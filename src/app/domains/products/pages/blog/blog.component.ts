import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { HeaderComponent } from "../../../shared/component/header/header.component";
import { NavbarComponent } from "../../../shared/component/navbar/navbar.component";

@Component({
  selector: 'app-blog',
  imports: [CardComponent, HeaderComponent, NavbarComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
