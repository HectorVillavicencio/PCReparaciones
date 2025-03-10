import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/component/footer/footer.component";
import { HeaderComponent } from "../../../shared/component/header/header.component";
import { NavbarComponent } from "../../../shared/component/navbar/navbar.component";

@Component({
  selector: 'app-post-producto',
  imports: [FooterComponent, HeaderComponent, NavbarComponent],
  templateUrl: './post-producto.component.html',
  styleUrl: './post-producto.component.css'
})
export class PostProductoComponent {

}
