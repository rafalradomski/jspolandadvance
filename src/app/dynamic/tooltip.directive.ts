import {Directive, ViewContainerRef, ComponentFactoryResolver, HostListener} from '@angular/core';
import {TestComponent} from "../test/test.component";

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  private entry: ViewContainerRef;
  private crf: ComponentFactoryResolver;

  constructor(entry: ViewContainerRef,
              crf: ComponentFactoryResolver) {
      this.entry = entry;
      this.crf = crf;
  }

  @HostListener('click')
  public showTooltip(){
    const cf = this.crf.resolveComponentFactory(TestComponent);
    this.entry.createComponent(cf);
  }

}
