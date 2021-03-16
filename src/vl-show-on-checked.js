import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlShowOnChecked
 * @class
 * @classdesc Gebruik de show on checked component om een element te tonen of verbergen wanneer men een checkbox of radio button (de)selecteert.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-show-on-checked/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-show-on-checked/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-show-on-checked.html|Demo}
 *
 */
export class VlShowOnChecked extends vlElement(HTMLElement) {}

define('vl-show-on-checked', VlShowOnChecked);
