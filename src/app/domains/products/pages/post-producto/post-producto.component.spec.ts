import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProductoComponent } from './post-producto.component';

describe('PostProductoComponent', () => {
  let component: PostProductoComponent;
  let fixture: ComponentFixture<PostProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
