import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItemModel } from '../models/nav-item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  screenWidth = input.required<number>();
  navItems = input.required<NavItemModel[]>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  systemName = 'AdminPro';
  userName = 'Rengoku';
  userPhoto = 'assets/user-avatar.jpeg';

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

  goToRoute(): void {
    if (this.screenWidth() < 768) {
      this.closeSidenav();
    }
  }

  get userInitials(): string {
    var userNames = this.userName.split(' ');

    if (userNames.length == 1)
      return this.userName.charAt(0);

    return userNames[0].charAt(0) + userNames[userNames.length - 1].charAt(0);
  }
}