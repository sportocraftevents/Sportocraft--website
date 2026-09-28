import { Component } from '@angular/core';
@Component({selector:'app-footer',standalone:true,template:`<footer><div class="container"><strong>SPORTOCRAFT SPORTS & EVENTS</strong><p>Corporate Events. Professionally Managed.</p><small>© {{year}} Sportocraft Sports & Events. All rights reserved.</small></div></footer>`,styles:[`footer{background:#172033;color:#fff;padding:2.5rem 0}footer p{color:#ccd2dc}small{color:#aab3c2}`]})
export class FooterComponent {year=new Date().getFullYear();}
