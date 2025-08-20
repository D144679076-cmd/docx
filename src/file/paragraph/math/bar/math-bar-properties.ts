// https://www.datypic.com/sc/ooxml/e-m_barPr-1.html
import { XmlComponent } from "@file/xml-components";

import { createMathBarPos } from "./math-bar-pos";

export class MathBarProperties extends XmlComponent {
    public constructor(type: string) {
        super("m:barPr");
        this.root.push(createMathBarPos({ val: type }));
    }
}
