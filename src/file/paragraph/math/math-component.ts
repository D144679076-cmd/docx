import { XmlComponent } from "@file/xml-components";

import { MathAngledBrackets, MathCurlyBrackets, MathRoundBrackets, MathSquareBrackets } from "./brackets";
import { MathFraction } from "./fraction";
import { MathFunction } from "./function";
import { MathRaw } from "./math-raw";
import { MathRun } from "./math-run";
import { MathIntegral, MathSum } from "./n-ary";
import { MathRadical } from "./radical";
import { MathSubScript, MathSubSuperScript, MathSuperScript } from "./script";

export type MathComponent = XmlComponent &
    (
        | MathRun
        | MathFraction
        | MathSum
        | MathIntegral
        | MathSuperScript
        | MathSubScript
        | MathSubSuperScript
        | MathRadical
        | MathFunction
        | MathRoundBrackets
        | MathCurlyBrackets
        | MathAngledBrackets
        | MathSquareBrackets
        | MathRaw
    );

// Needed because of: https://github.com/s-panferov/awesome-typescript-loader/issues/432
/**
 * @ignore
 */
export const WORKAROUND4 = "";
