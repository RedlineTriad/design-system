/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PostAlert {
        /**
          * Triggers alert closing programmatically (same as clicking on the close button (×)).
         */
        "close": () => Promise<void>;
        /**
          * The label to use for the close button of a dismissible alert.
         */
        "dismissLabel": string;
        /**
          * If `true`, a close button (×) is displayed and the alert can be dismissed by the user.
         */
        "dismissible": boolean;
        /**
          * If `true`, the alert is positioned at the bottom of the window, from edge to edge.
         */
        "fixed": boolean;
        /**
          * The icon to display in the alert.  If `null`, no icon will be displayed. By default, the icon depends on the alert type.
         */
        "icon": string;
        /**
          * The type of the alert.  We provide styles for the following types: `'primary'`, `'success'`, `'danger'`, `'warning'`, `'info'`.
         */
        "type": string;
    }
    interface PostCollapsible {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * Defines the hierarchical level of the collapsible header within the headings structure.
         */
        "headingLevel"?: number;
        /**
          * Triggers the collapse programmatically.
         */
        "toggle": (open?: boolean) => Promise<boolean>;
    }
    /**
     * @class PostIcon - representing a stencil component
     */
    interface PostIcon {
        /**
          * The name of the animation (`cylon`, `cylon-vertical`, `spin`, `spin-reverse`, `fade`, `throb`).
         */
        "animation"?: string;
        /**
          * The base path, where the icons are located (must be a public url).
         */
        "base"?: string;
        /**
          * When set to `true`, the icon will be flipped horizontally.
         */
        "flipH"?: boolean;
        /**
          * When set to `true`, the icon will be flipped vertically.
         */
        "flipV"?: boolean;
        /**
          * The name/id of the icon (e.g. 1000, 1001, ...).
         */
        "name": string;
        /**
          * The `number` of degree for the css `rotate` transformation.
         */
        "rotate"?: number;
        /**
          * The `number` for the css `scale` transformation.
         */
        "scale"?: number;
    }
}
declare global {
    interface HTMLPostAlertElement extends Components.PostAlert, HTMLStencilElement {
    }
    var HTMLPostAlertElement: {
        prototype: HTMLPostAlertElement;
        new (): HTMLPostAlertElement;
    };
    interface HTMLPostCollapsibleElement extends Components.PostCollapsible, HTMLStencilElement {
    }
    var HTMLPostCollapsibleElement: {
        prototype: HTMLPostCollapsibleElement;
        new (): HTMLPostCollapsibleElement;
    };
    /**
     * @class PostIcon - representing a stencil component
     */
    interface HTMLPostIconElement extends Components.PostIcon, HTMLStencilElement {
    }
    var HTMLPostIconElement: {
        prototype: HTMLPostIconElement;
        new (): HTMLPostIconElement;
    };
    interface HTMLElementTagNameMap {
        "post-alert": HTMLPostAlertElement;
        "post-collapsible": HTMLPostCollapsibleElement;
        "post-icon": HTMLPostIconElement;
    }
}
declare namespace LocalJSX {
    interface PostAlert {
        /**
          * The label to use for the close button of a dismissible alert.
         */
        "dismissLabel"?: string;
        /**
          * If `true`, a close button (×) is displayed and the alert can be dismissed by the user.
         */
        "dismissible"?: boolean;
        /**
          * If `true`, the alert is positioned at the bottom of the window, from edge to edge.
         */
        "fixed"?: boolean;
        /**
          * The icon to display in the alert.  If `null`, no icon will be displayed. By default, the icon depends on the alert type.
         */
        "icon"?: string;
        /**
          * The type of the alert.  We provide styles for the following types: `'primary'`, `'success'`, `'danger'`, `'warning'`, `'info'`.
         */
        "type"?: string;
    }
    interface PostCollapsible {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * Defines the hierarchical level of the collapsible header within the headings structure.
         */
        "headingLevel"?: number;
    }
    /**
     * @class PostIcon - representing a stencil component
     */
    interface PostIcon {
        /**
          * The name of the animation (`cylon`, `cylon-vertical`, `spin`, `spin-reverse`, `fade`, `throb`).
         */
        "animation"?: string;
        /**
          * The base path, where the icons are located (must be a public url).
         */
        "base"?: string;
        /**
          * When set to `true`, the icon will be flipped horizontally.
         */
        "flipH"?: boolean;
        /**
          * When set to `true`, the icon will be flipped vertically.
         */
        "flipV"?: boolean;
        /**
          * The name/id of the icon (e.g. 1000, 1001, ...).
         */
        "name"?: string;
        /**
          * The `number` of degree for the css `rotate` transformation.
         */
        "rotate"?: number;
        /**
          * The `number` for the css `scale` transformation.
         */
        "scale"?: number;
    }
    interface IntrinsicElements {
        "post-alert": PostAlert;
        "post-collapsible": PostCollapsible;
        "post-icon": PostIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "post-alert": LocalJSX.PostAlert & JSXBase.HTMLAttributes<HTMLPostAlertElement>;
            "post-collapsible": LocalJSX.PostCollapsible & JSXBase.HTMLAttributes<HTMLPostCollapsibleElement>;
            /**
             * @class PostIcon - representing a stencil component
             */
            "post-icon": LocalJSX.PostIcon & JSXBase.HTMLAttributes<HTMLPostIconElement>;
        }
    }
}
