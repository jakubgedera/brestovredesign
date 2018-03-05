import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PricingComponent } from './components/pricing-page/pricing.component';
import { ContactComponent } from './components/contact-page/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PortfolioComponent } from './components/portfolio-page/portfolio-page.component';



const appRoutes: Routes = [
  { path: '',   redirectTo: '/domov', pathMatch: 'full' },
  { path: 'domov', component: HomePageComponent },
  { path: 'cennik', component: PricingComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'sluzby', component: PortfolioComponent },
  { path: '**', component: PageNotFoundComponent }, // musi byt posledny
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
