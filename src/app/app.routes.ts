import { Routes } from '@angular/router';
import { HomeComponent } from './domains/products/pages/home/home.component';
import { BlogComponent } from './domains/products/pages/blog/blog.component';
import { PostBlogComponent } from './domains/products/pages/post-blog/post-blog.component';
import { ContactoComponent } from './domains/products/pages/contacto/contacto.component';
import { ProductosComponent } from './domains/products/pages/productos/productos.component';
import { PostProductoComponent } from './domains/products/pages/post-producto/post-producto.component';
import path from 'path';
import { CirculoComponent } from './domains/products/pages/circulo/circulo.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'blog',
        component: BlogComponent
    },
    {
        path:'post',
        component: PostBlogComponent
    },
    {
        path:'contact',
        component: ContactoComponent
    },
    {
        path:'products',
        component: ProductosComponent
    },
    {
        path: 'product',
        component: PostProductoComponent
    },
    {
        path: 'circulo',
        component : CirculoComponent
    }
];
