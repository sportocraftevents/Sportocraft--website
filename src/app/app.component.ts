import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
@Component({selector:'app-root',standalone:true,imports:[RouterOutlet,HeaderComponent,FooterComponent],template:'<app-header/><main><router-outlet/></main><app-footer/>',styles:['main{min-height:calc(100vh - 150px)}']})
export class AppComponent {}
