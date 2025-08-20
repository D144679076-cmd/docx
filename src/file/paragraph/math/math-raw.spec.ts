import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter";

import { MathRaw } from "./math-raw";

describe("#MathRaw", () => {
    describe("#constructor()", () => {
        it("should create a MathRaw instance", () => {
            const mathRaw = new MathRaw(
                `<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"><m:func><m:funcPr><m:ctrlPr><w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/></w:rPr></m:ctrlPr></m:funcPr><m:fName><m:r><m:t>sin</m:t></m:r></m:fName><m:e><m:r><m:t>x</m:t></m:r></m:e></m:func></m:oMath>`,
            );
            const tree = new Formatter().format(mathRaw);
            expect(tree).to.deep.equal({
                "m:oMath": {
                    _attributes: {
                        "xmlns:m": "http://schemas.openxmlformats.org/officeDocument/2006/math",
                    },
                    "m:func": {
                        "m:e": {
                            "m:r": {
                                "m:t": {
                                    _text: "x",
                                },
                            },
                        },
                        "m:fName": {
                            "m:r": {
                                "m:t": {
                                    _text: "sin",
                                },
                            },
                        },
                        "m:funcPr": {
                            "m:ctrlPr": {
                                "w:rPr": {
                                    "w:rFonts": {
                                        _attributes: {
                                            "w:ascii": "Cambria Math",
                                            "w:hAnsi": "Cambria Math",
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
        });
    });
});
