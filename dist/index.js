import { NgModule } from '@angular/core';
import { ScrollModule } from './modules/alpha-scroll.module';
import { PipesModule } from './pipes/pipes.module';
export * from './modules/alpha-scroll.module';
export * from './pipes/pipes.module';
var AlphaScrollModule = (function () {
    function AlphaScrollModule() {
    }
    AlphaScrollModule.forRoot = function () {
        return {
            ngModule: AlphaScrollModule, providers: []
        };
    };
    AlphaScrollModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ScrollModule.forRoot(),
                        PipesModule.forRoot()
                    ],
                    exports: [
                        ScrollModule,
                        PipesModule
                    ]
                },] },
    ];
    /** @nocollapse */
    AlphaScrollModule.ctorParameters = function () { return []; };
    return AlphaScrollModule;
}());
export { AlphaScrollModule };
//# sourceMappingURL=index.js.map