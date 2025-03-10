import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/component/footer/footer.component";
import { HeaderComponent } from "../../../shared/component/header/header.component";
import { NavbarComponent } from "../../../shared/component/navbar/navbar.component";

@Component({
  selector: 'app-contacto',
  imports: [FooterComponent, HeaderComponent, NavbarComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
contactForm: any;

}
