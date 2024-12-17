import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about copy/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShopComponent } from './components/shop/shop.component';
import { DetailsComponent } from './components/details/details.component';
import { DonateComponent } from './components/donate/donate.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home كصفحة افتراضية
  {path: 'home', component:HomeComponent},
  {path: 'shop', component:ShopComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'donate', component: DonateComponent },
  {path: 'details', component:DetailsComponent},
  {path: '**', component:NotFoundComponent}
];
