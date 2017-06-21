import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';
import {TooltipDirective} from "./tooltip.directive";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestComponent, TooltipDirective];,
  entryComponents: [TestComponent];
  exports: [TestComponent, TooltipDirective];
})
export class DynamicModule { }
