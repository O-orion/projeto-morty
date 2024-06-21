import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  inputWidth: string = '30px'; // Largura inicial do input

  constructor(private router: Router) { }

  expandInput() {
    this.inputWidth = '150px'; // Largura expandida ao passar o mouse
  }

  collapseInput() {
    // Se o input não estiver focado, volta para a largura inicial
    if (!document.activeElement || document.activeElement.tagName.toLowerCase() !== 'input') {
      this.inputWidth = '30px';
    }
  }

  inputSearch(event:any): void {
    console.log(event.target.value)
  }

  irParHome(): void {
    this.router.navigate(['/'])
  }
}
