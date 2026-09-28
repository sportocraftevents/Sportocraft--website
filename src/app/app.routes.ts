import { Routes } from '@angular/router';
import { PageComponent } from './pages/page.component';
const page=(title:string)=>({component:PageComponent,data:{title}});
export const appRoutes: Routes=[{path:'',...page('SPORTOCRAFT SPORTS & EVENTS')},{path:'about',...page('About Sportocraft')},{path:'sports-events',...page('Corporate Sports Events')},{path:'corporate-events',...page('Corporate Events')},{path:'garba-navratri',...page('Corporate Garba / Navratri')},{path:'our-work',...page('Our Work')},{path:'case-studies',...page('Case Studies')},{path:'contact',...page('Contact Us')},{path:'thank-you',...page('Thank You')},{path:'privacy-policy',...page('Privacy Policy')},{path:'terms',...page('Terms & Conditions')},{path:'**',...page('Page Not Found')}];
