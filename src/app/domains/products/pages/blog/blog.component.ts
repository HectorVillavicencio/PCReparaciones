import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { HeaderComponent } from "../../../shared/component/header/header.component";
import { NavbarComponent } from "../../../shared/component/navbar/navbar.component";
import { FooterComponent } from "../../../shared/component/footer/footer.component";

@Component({
  selector: 'app-blog',
  imports: [CardComponent, HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
