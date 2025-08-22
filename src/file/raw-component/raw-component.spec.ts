import { describe } from "node:test";
import { expect, it } from "vitest";

import { Formatter } from "@export/formatter";

import { RawComponent } from "./raw-component";

class TestComponent extends RawComponent {
    public constructor(xmlString: string) {
        super(xmlString);
    }
}
describe("RawComponent", () => {
    describe("#constructor", () => {
        it("should create an instance of RawComponent", () => {
            const component = new TestComponent("<w:p><w:r><w:t>Hello, world!</w:t></w:r></w:p>");
            const tree = new Formatter().format(component);
            expect(tree).to.deep.equal({
                "w:p": [
                    {
                        "w:r": [
                            {
                                "w:t": ["Hello, world!"],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
