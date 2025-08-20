import { xml2js } from "xml-js";

import { IContext, IXmlableObject } from "@file/xml-components";

import { BaseRawComponent } from "./base";


export abstract  class RawComponent extends BaseRawComponent{
    public constructor(xmlString: string) {
        super(xmlString);
    }

    public  prepForXml(context: IContext): IXmlableObject  {
        // eslint-disable-next-line functional/immutable-data
        context.stack.push(this);
        // eslint-disable-next-line functional/immutable-data
        context.stack.pop();
        return  xml2js(this.xmlString,{ compact: true, captureSpacesBetweenElements: true });
    };
}