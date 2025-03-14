import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-circulo',
  imports: [CommonModule],
  templateUrl: './circulo.component.html',
  styleUrl: './circulo.component.css'
})
export class CirculoComponent {

  imageUrl: string | ArrayBuffer | null = null;

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.handleFile(input.files[0]);
    }
  }

  handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
}
