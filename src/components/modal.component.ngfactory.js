import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/backdrop/backdrop";
import * as i2 from "./modal.component";
import * as i3 from "ionic-angular/navigation/nav-params";
import * as i4 from "ionic-angular/navigation/view-controller";
import * as i5 from "ionic-angular/gestures/gesture-controller";
import * as i6 from "ionic-angular/util/module-loader";
var styles_ModalCmp = [];
var RenderType_ModalCmp = i0.ɵcrt({ encapsulation: 2, styles: styles_ModalCmp, data: {} });
export { RenderType_ModalCmp as RenderType_ModalCmp };
export function View_ModalCmp_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { _viewport: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 1, "ion-backdrop", [["disable-activated", ""], ["role", "presentation"], ["tappable", ""]], [[2, "backdrop-no-tappable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co._bdClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 16384, null, 0, i1.Backdrop, [i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "modal-wrapper"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 16777216, [[1, 3], ["viewport", 1]], null, 0, "div", [["nav-viewport", ""]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co._bdDismiss; _ck(_v, 1, 0, currVal_0); }); }
export function View_ModalCmp_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ion-modal", [], null, [["body", "keyup"]], function (_v, en, $event) { var ad = true; if (("body:keyup" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1)._keyUp($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ModalCmp_0, RenderType_ModalCmp)), i0.ɵdid(1, 180224, null, 0, i2.ModalCmp, [i0.ComponentFactoryResolver, i0.Renderer, i0.ElementRef, i3.NavParams, i4.ViewController, i5.GestureController, i6.ModuleLoader], null, null)], null, null); }
var ModalCmpNgFactory = i0.ɵccf("ion-modal", i2.ModalCmp, View_ModalCmp_Host_0, {}, {}, []);
export { ModalCmpNgFactory as ModalCmpNgFactory };
//# sourceMappingURL=modal.component.ngfactory.js.map