import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/component/navbar/navbar.component";
import { HeaderComponent } from "../../../shared/component/header/header.component";
import { FooterComponent } from "../../../shared/component/footer/footer.component";

@Component({
  selector: 'app-productos',
  imports: [NavbarComponent, HeaderComponent, FooterComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
