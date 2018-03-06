import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
import { AlphaScroll } from './alpha-scroll';
var ScrollModule = (function () {
    function ScrollModule() {
    }
    ScrollModule.forRoot = function () {
        return {
            ngModule: ScrollModule, providers: []
        };
    };
    ScrollModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule,
                        PipesModule
                    ],
                    exports: [
                        AlphaScroll
                    ],
                    declarations: [
                        AlphaScroll
                    ]
                },] },
    ];
    /** @nocollapse */
    ScrollModule.ctorParameters = function () { return []; };
    return ScrollModule;
}());
export { ScrollModule };
//# sourceMappingURL=alpha-scroll.module.js.map