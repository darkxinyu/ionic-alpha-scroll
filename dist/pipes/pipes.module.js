import { NgModule } from '@angular/core';
import { MapToIterable } from './map-to-iterable';
import { OrderBy } from './order-by';
import { TrustResourceUrl } from './bypass-trust-res-url';
export { MapToIterable } from './map-to-iterable';
export { OrderBy } from './order-by';
export { TrustResourceUrl } from './bypass-trust-res-url';
var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule,
            providers: [
                MapToIterable,
                OrderBy,
                TrustResourceUrl
            ]
        };
    };
    PipesModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        MapToIterable,
                        OrderBy,
                        TrustResourceUrl
                    ],
                    declarations: [
                        MapToIterable,
                        OrderBy,
                        TrustResourceUrl
                    ]
                },] },
    ];
    /** @nocollapse */
    PipesModule.ctorParameters = function () { return []; };
    return PipesModule;
}());
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map