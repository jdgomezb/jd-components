/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JdSpinner {
    }
    interface JdStockFinder {
    }
    interface JdStockPrice {
        "stockSymbol": string;
    }
}
export interface JdStockFinderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJdStockFinderElement;
}
declare global {
    interface HTMLJdSpinnerElement extends Components.JdSpinner, HTMLStencilElement {
    }
    var HTMLJdSpinnerElement: {
        prototype: HTMLJdSpinnerElement;
        new (): HTMLJdSpinnerElement;
    };
    interface HTMLJdStockFinderElement extends Components.JdStockFinder, HTMLStencilElement {
    }
    var HTMLJdStockFinderElement: {
        prototype: HTMLJdStockFinderElement;
        new (): HTMLJdStockFinderElement;
    };
    interface HTMLJdStockPriceElement extends Components.JdStockPrice, HTMLStencilElement {
    }
    var HTMLJdStockPriceElement: {
        prototype: HTMLJdStockPriceElement;
        new (): HTMLJdStockPriceElement;
    };
    interface HTMLElementTagNameMap {
        "jd-spinner": HTMLJdSpinnerElement;
        "jd-stock-finder": HTMLJdStockFinderElement;
        "jd-stock-price": HTMLJdStockPriceElement;
    }
}
declare namespace LocalJSX {
    interface JdSpinner {
    }
    interface JdStockFinder {
        "onJdSymbolSelected"?: (event: JdStockFinderCustomEvent<string>) => void;
    }
    interface JdStockPrice {
        "stockSymbol"?: string;
    }
    interface IntrinsicElements {
        "jd-spinner": JdSpinner;
        "jd-stock-finder": JdStockFinder;
        "jd-stock-price": JdStockPrice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jd-spinner": LocalJSX.JdSpinner & JSXBase.HTMLAttributes<HTMLJdSpinnerElement>;
            "jd-stock-finder": LocalJSX.JdStockFinder & JSXBase.HTMLAttributes<HTMLJdStockFinderElement>;
            "jd-stock-price": LocalJSX.JdStockPrice & JSXBase.HTMLAttributes<HTMLJdStockPriceElement>;
        }
    }
}