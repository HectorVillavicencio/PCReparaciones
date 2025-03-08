import { Routes } from '@angular/router';
import { HomeComponent } from './domains/products/pages/home/home.component';
import { BlogComponent } from './domains/products/pages/blog/blog.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'blog',
        component: BlogComponent
    }
];
