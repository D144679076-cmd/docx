import { IContext, IXmlableObject } from "@file/xml-components";

export abstract class BaseRawComponent {
    protected readonly xmlString: string;
    public constructor(xmlString: string) {
        this.xmlString = xmlString;
    }
    public abstract prepForXml(context: IContext): IXmlableObject | undefined;
}
