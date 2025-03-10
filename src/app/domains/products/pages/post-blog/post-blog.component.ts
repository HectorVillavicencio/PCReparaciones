import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/component/header/header.component";
import { NavbarComponent } from "../../../shared/component/navbar/navbar.component";
import { FooterComponent } from "../../../shared/component/footer/footer.component";

@Component({
  selector: 'app-post-blog',
  imports: [HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './post-blog.component.html',
  styleUrl: './post-blog.component.css'
})
export class PostBlogComponent {

}
