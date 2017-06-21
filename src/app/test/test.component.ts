import {
    Component, OnInit, Compiler, Injector, NgModuleRef, ElementRef, ViewChild,
    ViewContainerRef, ComponentFactoryResolver
} from '@angular/core';
import {AppModule} from '../app.module';
import {DynamicModule} from '../dynamic/dynamic.module';


@Component({
  selector: 'app-test',
  template: `
    <h1 appTooltip="test">Welcome to angular</h1>
    <h1 appTooltip="hi">Welcome to angular</h1>
`,
  styles: ['./test.component.css']
})
export class TestComponent implements OnInit {

    @ViewChild('entry') public entry: ViewContainerRef;

    private container: ViewContainerRef;
    private cfr: ComponentFactoryResolver;

    constructor(container: ViewContainerRef,
             cfr: ComponentFactoryResolver){
        this.container = container;
        this.cfr = cfr;
        console.log(container);
    }

    ngOnInit(): void {
        const cf =this.cfr.resolveComponentFactory(TestComponent);
        console.log(this.entry);
        this.container.createComponent(cf);
    }

    /* constructor(){
        console.log(this.entry);
    }*/


  /* constructor(compiler: Compiler,
              injector: Injector,
              module: NgModuleRef<AppModule>) {
      const m = compiler.compileModuleAndAllComponentsSync(DynamicModule);
      //console.log(m.componentFactories[0].create(injector));
      const c = m.componentFactories[0].create(injector, null, null, module);
    console.log(c); */

}
