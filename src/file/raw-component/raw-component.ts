/* eslint-disable functional/immutable-data */
import { Element, xml2js } from "xml-js";

import { IContext, IXmlableObject } from "@file/xml-components";

import { BaseRawComponent } from "./base";

export const convertToXmlComponent = (element: Element): IXmlableObject | string | undefined => {
    switch (element.type) {
        case undefined:
        case "element": {
            let returnObject = {};
            if (!element.elements) {
                returnObject = {
                    [element.name as string]: {},
                };
                return returnObject;
            }
            const temp = [];
            for (const childEle of element.elements || []) {
                temp.push(convertToXmlComponent(childEle));
            }
            if (element.name) {
                returnObject = {
                    ...returnObject,
                    [element.name]: temp.filter((childEle) => !!childEle).length > 0 ? temp.filter((childEle) => !!childEle) : {},
                };
            } else {
                returnObject =
                    temp.filter((childEle) => !!childEle).length > 0 ? (temp.filter((childEle) => !!childEle)?.[0] as IXmlableObject) : {};
            }
            return returnObject;
        }
        case "text":
            return element.text as string;
        default:
            return undefined;
        /* c8 ignore next 2 */
    }
};

export abstract class RawComponent extends BaseRawComponent {
    public constructor(xmlString: string) {
        super(xmlString);
    }

    public prepForXml(context: IContext): IXmlableObject {
        // eslint-disable-next-line functional/immutable-data
        context.stack.push(this);
        // eslint-disable-next-line functional/immutable-data
        context.stack.pop();
        const parse = xml2js(this.xmlString, { compact: false, captureSpacesBetweenElements: true }) as Element;

        return convertToXmlComponent(parse) as IXmlableObject;
    }
}
