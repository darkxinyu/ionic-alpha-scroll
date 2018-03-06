/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import2 from 'ionic-angular/components/item/item';
import * as import3 from 'ionic-angular/util/form';
import * as import4 from 'ionic-angular/config/config';
import * as import5 from 'ionic-angular/components/item/item-reorder';
import * as import6 from 'ionic-angular/components/item/item-divider';
import * as import7 from '@angular/common';
import * as import8 from 'ionic-angular/components/list/list';
import * as import9 from 'ionic-angular/platform/platform';
import * as import10 from 'ionic-angular/gestures/gesture-controller';
import * as import11 from 'ionic-angular/platform/dom-controller';
import * as import12 from '../../../src/modules/alpha-scroll';
import * as import13 from '../../../src/pipes/order-by';
const styles_AlphaScroll:any[] = ([] as any[]);
export const RenderType_AlphaScroll:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AlphaScroll,
  data: {}
}
);
function View_AlphaScroll_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),6,'ion-item-divider',[
      [
        'class',
        'item item-divider'
      ]
      ,
      [
        'id',
        'scroll-letter-↑'
      ]
      ,
      [
        'style',
        'display:none'
      ]

    ]
    ,(null as any),(null as any),(null as any),import1.View_Item_0,import1.RenderType_Item)),
    import0.ɵdid(1097728,(null as any),3,import2.Item,[
      import3.Form,
      import4.Config,
      import0.ElementRef,
      import0.Renderer,
      [
        2,
        import5.ItemReorder
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵqud(335544320,4,{contentLabel: 0}),
    import0.ɵqud(603979776,5,{_buttons: 1}),
    import0.ɵqud(603979776,6,{_icons: 1}),
    import0.ɵdid(16384,(null as any),0,import6.ItemDivider,[
      import4.Config,
      import0.ElementRef,
      import0.Renderer
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted(2,['↑']))
  ]
  ,(null as any),(null as any));
}
function View_AlphaScroll_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[(l()(),import0.ɵand(0,(null as any),(null as any),0))],(null as any),(null as any));
}
function View_AlphaScroll_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),6,'ion-item-divider',[[
        'class',
        'item item-divider'
      ]
      ],[[
        8,
        'id',
        0
      ]
    ],(null as any),(null as any),import1.View_Item_0,import1.RenderType_Item)),
    import0.ɵdid(1097728,(null as any),3,import2.Item,[
      import3.Form,
      import4.Config,
      import0.ElementRef,
      import0.Renderer,
      [
        2,
        import5.ItemReorder
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵqud(335544320,7,{contentLabel: 0}),
    import0.ɵqud(603979776,8,{_buttons: 1}),
    import0.ɵqud(603979776,9,{_icons: 1}),
    import0.ɵdid(16384,(null as any),0,import6.ItemDivider,[
      import4.Config,
      import0.ElementRef,
      import0.Renderer
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted(2,[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = import0.ɵinlineInterpolate(1,'scroll-letter-',(<any>v.parent).context.$implicit.letter,'');
    ck(v,0,0,currVal_0);
    const currVal_1:any = (<any>v.parent).context.$implicit.letter;
    ck(v,6,0,currVal_1);
  });
}
function View_AlphaScroll_6(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[(l()(),import0.ɵted((null as any),['\n          ']))],(null as any),(null as any));
}
function View_AlphaScroll_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵand(16777216,(null as any),(null as any),2,(null as any),View_AlphaScroll_6)),
    import0.ɵdid(540672,(null as any),0,import7.NgTemplateOutlet,[import0.ViewContainerRef],{
      ngTemplateOutlet: [
        0,
        'ngTemplateOutlet'
      ]
      ,
      ngOutletContext: [
        1,
        'ngOutletContext'
      ]

    }
    ,(null as any)),
    import0.ɵpod([
      'item',
      'currentPageClass'
    ]
    ),
    (l()(),import0.ɵand(0,(null as any),(null as any),0))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.itemTemplate;
    const currVal_1:any = ck(v,2,0,(<any>v.parent).context.$implicit,co.currentPageClass);
    ck(v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_AlphaScroll_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AlphaScroll_4)),
    import0.ɵdid(16384,(null as any),0,import7.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n          '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AlphaScroll_5)),
    import0.ɵdid(16384,(null as any),0,import7.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit.isDivider;
    ck(v,3,0,currVal_0);
    const currVal_1:boolean = !v.context.$implicit.isDivider;
    ck(v,6,0,currVal_1);
  },(null as any));
}
function View_AlphaScroll_7(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'li',([] as any[]),[
      [
        8,
        'hidden',
        0
      ]
      ,
      [
        8,
        'className',
        0
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n      ']))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:boolean = !v.context.$implicit.isActive;
    const currVal_1:any = co.setAlphaClass(v.context.$implicit);
    ck(v,0,0,currVal_0,currVal_1);
    const currVal_2:any = v.context.$implicit.letter;
    ck(v,3,0,currVal_2);
  });
}
export function View_AlphaScroll_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵqud(402653184,1,{mainWrapper: 0}),
    import0.ɵqud(402653184,2,{list: 0}),
    import0.ɵqud(402653184,3,{sidebar: 0}),
    (l()(),import0.ɵted((null as any),['\n  '])),
    (l()(),import0.ɵeld(0,[
      [
        1,
        0
      ]
      ,
      [
        'wrapper',
        1
      ]

    ]
      ,(null as any),14,'section',[[
        'class',
        'alpha-list-wrapper'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,[
      [
        2,
        0
      ]
      ,
      [
        'list',
        1
      ]

    ]
      ,(null as any),11,'ion-list',[[
        'class',
        'ion-alpha-list'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import8.List,[
      import4.Config,
      import0.ElementRef,
      import0.Renderer,
      import9.Platform,
      import10.GestureController,
      import11.DomController
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AlphaScroll_1)),
    import0.ɵdid(16384,(null as any),0,import7.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AlphaScroll_2)),
      import0.ɵdid(540672,(null as any),0,import7.NgTemplateOutlet,[import0.ViewContainerRef],{ngTemplateOutlet: [
        0,
        'ngTemplateOutlet'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AlphaScroll_3)),
    import0.ɵdid(802816,(null as any),0,import7.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,[
      [
        3,
        0
      ]
      ,
      [
        'sidebar',
        1
      ]

    ]
      ,(null as any),5,'ul',[[
        'class',
        'ion-alpha-sidebar'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import7.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n      '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AlphaScroll_7)),
    import0.ɵdid(802816,(null as any),0,import7.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import12.AlphaScroll = v.component;
    const currVal_0:any = (co.headerTemplate != (null as any));
    ck(v,10,0,currVal_0);
    const currVal_1:any = co.headerTemplate;
    ck(v,13,0,currVal_1);
    const currVal_2:any = co.sortedItems;
    ck(v,16,0,currVal_2);
    const currVal_3:any = co.calculateDimensionsForSidebar();
    ck(v,21,0,currVal_3);
    const currVal_4:any = co.alphabet;
    ck(v,24,0,currVal_4);
  },(null as any));
}
function View_AlphaScroll_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'ion-alpha-scroll',([] as any[]),(null as any),(null as any),(null as any),View_AlphaScroll_0,RenderType_AlphaScroll)),
    import0.ɵdid(770048,(null as any),0,import12.AlphaScroll,[
      import0.ElementRef,
      import13.OrderBy
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const AlphaScrollNgFactory:import0.ComponentFactory<import12.AlphaScroll> = import0.ɵccf('ion-alpha-scroll',import12.AlphaScroll,View_AlphaScroll_Host_0,{
  listData: 'listData',
  key: 'key',
  itemTemplate: 'itemTemplate',
  currentPageClass: 'currentPageClass',
  headerTemplate: 'headerTemplate'
}
,{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRTovd29ya3NwYWNlL2dpdGh1Yi9kYXJreGlueXUvaW9uaWMtYWxwaGEtc2Nyb2xsL3NyYy9tb2R1bGVzL2FscGhhLXNjcm9sbC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9FOi93b3Jrc3BhY2UvZ2l0aHViL2Rhcmt4aW55dS9pb25pYy1hbHBoYS1zY3JvbGwvc3JjL21vZHVsZXMvYWxwaGEtc2Nyb2xsLnRzIiwibmc6Ly8vRTovd29ya3NwYWNlL2dpdGh1Yi9kYXJreGlueXUvaW9uaWMtYWxwaGEtc2Nyb2xsL3NyYy9tb2R1bGVzL2FscGhhLXNjcm9sbC50cy5BbHBoYVNjcm9sbC5odG1sIiwibmc6Ly8vRTovd29ya3NwYWNlL2dpdGh1Yi9kYXJreGlueXUvaW9uaWMtYWxwaGEtc2Nyb2xsL3NyYy9tb2R1bGVzL2FscGhhLXNjcm9sbC50cy5BbHBoYVNjcm9sbF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICA8c2VjdGlvbiBjbGFzcz1cImFscGhhLWxpc3Qtd3JhcHBlclwiICN3cmFwcGVyPlxuICAgIDxpb24tbGlzdCBjbGFzcz1cImlvbi1hbHBoYS1saXN0XCIgI2xpc3Q+XG4gICAgPGlvbi1pdGVtLWRpdmlkZXIgaWQ9XCJzY3JvbGwtbGV0dGVyLeKGkVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCIgKm5nSWY9XCJoZWFkZXJUZW1wbGF0ZSE9bnVsbFwiPuKGkTwvaW9uLWl0ZW0tZGl2aWRlcj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyVGVtcGxhdGVcIiA+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzb3J0ZWRJdGVtc1wiPlxuICAgICAgICAgIDxpb24taXRlbS1kaXZpZGVyIGlkPVwic2Nyb2xsLWxldHRlci17e2l0ZW0ubGV0dGVyfX1cIiAqbmdJZj1cIml0ZW0uaXNEaXZpZGVyXCI+e3tpdGVtLmxldHRlcn19PC9pb24taXRlbS1kaXZpZGVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtVGVtcGxhdGVcIiBbbmdPdXRsZXRDb250ZXh0XT1cInsnaXRlbSc6IGl0ZW0sICdjdXJyZW50UGFnZUNsYXNzJzogY3VycmVudFBhZ2VDbGFzc31cIiAqbmdJZj1cIiFpdGVtLmlzRGl2aWRlclwiPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9pb24tbGlzdD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHVsIGNsYXNzPVwiaW9uLWFscGhhLXNpZGViYXJcIiBbbmdTdHlsZV09XCJjYWxjdWxhdGVEaW1lbnNpb25zRm9yU2lkZWJhcigpXCIgI3NpZGViYXI+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGFscGhhIG9mIGFscGhhYmV0XCIgW2hpZGRlbl09XCIhYWxwaGEuaXNBY3RpdmVcIiBbY2xhc3NdPVwic2V0QWxwaGFDbGFzcyhhbHBoYSlcIj5cbiAgICAgICAgPGE+e3thbHBoYS5sZXR0ZXJ9fTwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD4iLCI8aW9uLWFscGhhLXNjcm9sbD48L2lvbi1hbHBoYS1zY3JvbGw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0dJO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBQTs7Ozs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Ozs7SUFBQTtLQUFBO0lBQXlGOzs7Ozs7Ozs7TUFHbkY7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO2dCQUFBO2dCQUFBO2dCQUFBOzs7O0lBQUE7S0FBQTtJQUE0RTtNQUFBO01BQUE7SUFBQTtJQUFBOzs7SUFBMUQ7SUFBbEIsU0FBa0IsU0FBbEI7SUFBNEU7SUFBQTs7Ozt5QkFDb0U7Ozs7SUFBaEo7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUErQztNQUFBO01BQUE7SUFBQTtJQUFBOzs7OztJQUFsQztJQUFrQztJQUEvQyxTQUFhLFVBQWtDLFNBQS9DOzs7OztJQUZGO0lBQXNDO0lBQ3BDO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBOEc7SUFDOUc7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUNjOzs7SUFGdUM7SUFBckQsU0FBcUQsU0FBckQ7SUFDd0g7SUFBeEgsU0FBd0gsU0FBeEg7Ozs7O0lBTUo7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUE2RjtJQUMzRjtJQUFHO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBb0I7Ozs7SUFEVTtJQUEyQjtJQUE5RCxTQUFtQyxVQUEyQixTQUE5RDtJQUNLO0lBQUE7Ozs7Ozs7O0lBZFg7SUFDRTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE2QztJQUMzQztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7OztJQUFBO0tBQUE7SUFBdUM7SUFDdkM7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE2RztJQUM3RztrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdFO0lBQzVEO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBSU07SUFDRztJQUNIO0lBQ1Y7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBbUY7SUFDakY7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFSzs7OztJQVpxRDtJQUE1RCxVQUE0RCxTQUE1RDtJQUNhO0lBQWIsVUFBYSxTQUFiO0lBQ1M7SUFBTCxVQUFLLFNBQUw7SUFPMEI7SUFBOUIsVUFBOEIsU0FBOUI7SUFDTTtJQUFKLFVBQUksU0FBSjs7Ozs7SUNiTjtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7Ozs7Ozs7Ozs7In0=
