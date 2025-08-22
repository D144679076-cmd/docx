import { describe, expect, it } from "vitest";

import { Formatter } from "@export/formatter";

import { MathRaw } from "./math-raw";

describe("#MathRaw", () => {
    describe("#constructor()", () => {
        it("should create a MathRaw instance", () => {
            const mathRaw = new MathRaw(
                `<m:func><m:funcPr></m:funcPr><m:fName><m:r><m:t>sin</m:t></m:r></m:fName><m:e><m:r><m:t>x</m:t></m:r></m:e></m:func>`,
            );
            const tree = new Formatter().format(mathRaw);
            expect(tree).to.deep.equal({
                "m:func": [
                    {
                        "m:funcPr": {},
                    },
                    {
                        "m:fName": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["sin"],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "m:e": [
                            {
                                "m:r": [
                                    {
                                        "m:t": ["x"],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        });
    });
});
