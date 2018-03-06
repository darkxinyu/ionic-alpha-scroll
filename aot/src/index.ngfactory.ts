/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../src/index';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from 'ionic-angular/module';
import * as import5 from '../../src/pipes/pipes.module';
import * as import6 from '../../src/modules/alpha-scroll.module';
import * as import7 from '../../src/pipes/map-to-iterable';
import * as import8 from '../../src/pipes/order-by';
import * as import9 from '../../src/pipes/bypass-trust-res-url';
import * as import10 from '../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory';
import * as import11 from '../node_modules/ionic-angular/components/alert/alert-component.ngfactory';
import * as import12 from '../node_modules/ionic-angular/components/app/app-root.ngfactory';
import * as import13 from '../node_modules/ionic-angular/components/loading/loading-component.ngfactory';
import * as import14 from '../node_modules/ionic-angular/components/modal/modal-component.ngfactory';
import * as import15 from '../node_modules/ionic-angular/components/picker/picker-component.ngfactory';
import * as import16 from '../node_modules/ionic-angular/components/popover/popover-component.ngfactory';
import * as import17 from '../node_modules/ionic-angular/components/select/select-popover-component.ngfactory';
import * as import18 from '../node_modules/ionic-angular/components/toast/toast-component.ngfactory';
import * as import19 from '@angular/platform-browser';
class AlphaScrollModuleInjector extends import0.ɵNgModuleInjector<import1.AlphaScrollModule> {
  _CommonModule_0:import2.CommonModule;
  _ɵba_1:import3.ɵba;
  _FormsModule_2:import3.FormsModule;
  _ReactiveFormsModule_3:import3.ReactiveFormsModule;
  _IonicModule_4:import4.IonicModule;
  _PipesModule_5:import5.PipesModule;
  _ScrollModule_6:import6.ScrollModule;
  _AlphaScrollModule_7:import1.AlphaScrollModule;
  __NgLocalization_8:import2.NgLocaleLocalization;
  __ɵi_9:import3.ɵi;
  __FormBuilder_10:import3.FormBuilder;
  __MapToIterable_11:import7.MapToIterable;
  __OrderBy_12:import8.OrderBy;
  __TrustResourceUrl_13:import9.TrustResourceUrl;
  constructor(parent:import0.Injector) {
    super(parent,[
      import10.ActionSheetCmpNgFactory,
      import11.AlertCmpNgFactory,
      import12.IonicAppNgFactory,
      import13.LoadingCmpNgFactory,
      import14.ModalCmpNgFactory,
      import15.PickerCmpNgFactory,
      import16.PopoverCmpNgFactory,
      import17.SelectPopoverNgFactory,
      import18.ToastCmpNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_8():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_8 == null)) { (this.__NgLocalization_8 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_8;
  }
  get _ɵi_9():import3.ɵi {
    if ((this.__ɵi_9 == null)) { (this.__ɵi_9 = new import3.ɵi()); }
    return this.__ɵi_9;
  }
  get _FormBuilder_10():import3.FormBuilder {
    if ((this.__FormBuilder_10 == null)) { (this.__FormBuilder_10 = new import3.FormBuilder()); }
    return this.__FormBuilder_10;
  }
  get _MapToIterable_11():import7.MapToIterable {
    if ((this.__MapToIterable_11 == null)) { (this.__MapToIterable_11 = new import7.MapToIterable()); }
    return this.__MapToIterable_11;
  }
  get _OrderBy_12():import8.OrderBy {
    if ((this.__OrderBy_12 == null)) { (this.__OrderBy_12 = new import8.OrderBy()); }
    return this.__OrderBy_12;
  }
  get _TrustResourceUrl_13():import9.TrustResourceUrl {
    if ((this.__TrustResourceUrl_13 == null)) { (this.__TrustResourceUrl_13 = new import9.TrustResourceUrl(this.parent.get(import19.DomSanitizer))); }
    return this.__TrustResourceUrl_13;
  }
  createInternal():import1.AlphaScrollModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ɵba_1 = new import3.ɵba();
    this._FormsModule_2 = new import3.FormsModule();
    this._ReactiveFormsModule_3 = new import3.ReactiveFormsModule();
    this._IonicModule_4 = new import4.IonicModule();
    this._PipesModule_5 = new import5.PipesModule();
    this._ScrollModule_6 = new import6.ScrollModule();
    this._AlphaScrollModule_7 = new import1.AlphaScrollModule();
    return this._AlphaScrollModule_7;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ɵba)) { return this._ɵba_1; }
    if ((token === import3.FormsModule)) { return this._FormsModule_2; }
    if ((token === import3.ReactiveFormsModule)) { return this._ReactiveFormsModule_3; }
    if ((token === import4.IonicModule)) { return this._IonicModule_4; }
    if ((token === import5.PipesModule)) { return this._PipesModule_5; }
    if ((token === import6.ScrollModule)) { return this._ScrollModule_6; }
    if ((token === import1.AlphaScrollModule)) { return this._AlphaScrollModule_7; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import3.ɵi)) { return this._ɵi_9; }
    if ((token === import3.FormBuilder)) { return this._FormBuilder_10; }
    if ((token === import7.MapToIterable)) { return this._MapToIterable_11; }
    if ((token === import8.OrderBy)) { return this._OrderBy_12; }
    if ((token === import9.TrustResourceUrl)) { return this._TrustResourceUrl_13; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AlphaScrollModuleNgFactory:import0.NgModuleFactory<import1.AlphaScrollModule> = new import0.NgModuleFactory<any>(AlphaScrollModuleInjector,import1.AlphaScrollModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRTovd29ya3NwYWNlL2dpdGh1Yi9kYXJreGlueXUvaW9uaWMtYWxwaGEtc2Nyb2xsL3NyYy9pbmRleC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9FOi93b3Jrc3BhY2UvZ2l0aHViL2Rhcmt4aW55dS9pb25pYy1hbHBoYS1zY3JvbGwvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
