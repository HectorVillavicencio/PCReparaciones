import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';
import { ServiciosYPreciosComponent } from "../../components/servicios-yprecios/servicios-yprecios.component";
import { NavbarComponent } from "../../../shared/component/navbar/navbar.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, ServiciosYPreciosComponent, NavbarComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
