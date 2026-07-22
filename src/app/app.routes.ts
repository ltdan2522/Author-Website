import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { BooksComponent } from './books-component/books-component';
import { ShortStoriesComponent } from './short-stories-component/short-stories-component';
import { AboutMeComponent } from './about-me-component/about-me-component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent},
    { path: 'Books', component: BooksComponent},
    { path: 'ShortStories', component: ShortStoriesComponent},
    { path: 'AboutMe', component: AboutMeComponent},
    { path: '**', component: HomeComponent}
];
