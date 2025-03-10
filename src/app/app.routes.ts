import { Routes } from '@angular/router';
import { HomeComponent } from './domains/products/pages/home/home.component';
import { BlogComponent } from './domains/products/pages/blog/blog.component';
import { PostBlogComponent } from './domains/products/pages/post-blog/post-blog.component';
import { ContactoComponent } from './domains/products/pages/contacto/contacto.component';
import { ProductosComponent } from './domains/products/pages/productos/productos.component';
import { PostProductoComponent } from './domains/products/pages/post-producto/post-producto.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'PCReparaciones/blog',
        component: BlogComponent
    },
    {
        path:'PCReparaciones/post',
        component: PostBlogComponent
    },
    {
        path:'PCReparaciones/contact',
        component: ContactoComponent
    },
    {
        path:'PCReparaciones/products',
        component: ProductosComponent
    },
    {
        path: 'PCReparaciones/product',
        component: PostProductoComponent
    }
];
