import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {TimetableComponent} from './timetable/timetable.component';
import {PricingComponent} from './pricing/pricing.component';
import {KumdoComponent} from './kumdo/kumdo.component';
import {FaqsComponent} from './faqs/faqs.component';
import {NewsComponent} from './news/news.component';
import {ContactComponent} from './contact/contact.component';
import {BookNowComponent} from './book-now/book-now.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/hapkido',
    component: AboutComponent
  },
  {
    path: 'about/timetable',
    component: TimetableComponent
  },
  {
    path: 'about/pricing',
    component: PricingComponent
  },
  {
    path: 'about/kumdo',
    component: KumdoComponent
  },
  {
    path: 'about/faqs',
    component: FaqsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'book-now',
    component: BookNowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
