import {Directive, ViewContainerRef, ComponentFactoryResolver, HostListener, Input} from '@angular/core';
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

  @Input() appTooltip: string;

  @HostListener('click')
  public showTooltip(){
    const cf = this.crf.resolveComponentFactory(TestComponent);
    const toolTip = this.entry.createComponent(cf);
    toolTip.instance.text = this.appTooltip;
  }

}
