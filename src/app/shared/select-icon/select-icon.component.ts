import { Component, input, OnInit, output } from '@angular/core';
import { Icon } from '../../helpers/icon-option.helper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-icon',
  imports: [CommonModule],
  templateUrl: './select-icon.component.html',
  styleUrl: './select-icon.component.scss'
})
export class SelectIconComponent {
  iconsOptions: string[] = Icon.options;
  defaultIcon: string = this.iconsOptions[0];
  selectedIcon = input.required<string>();
  onIconSelected = output<string>();

  selectIcon(icon: string): void {
    document.getElementById('toggleIcons').click();
    this.onIconSelected.emit(icon);
  }
}
