import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  screenWidth = input.required<number>();
  sizeClass = computed(() => {      
    if (!this.isLeftSidebarCollapsed()) {
      if (this.screenWidth() < 768)
        return 'body-trimmed-small-screen';
      
      return 'body-trimmed';
    }

    if (this.screenWidth() < 768)
      return 'body-trimmed-collapsed-small-screen';

    return 'body-trimmed-collapsed';
  });
}