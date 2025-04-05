import { Component, HostListener, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { NavItemModel } from './models/nav-item.model';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zen-budget';
  currentRoute: string = '';
  navItems: NavItemModel[] = [
    {
      routeLink: `${this.currentRoute}/add`,
      icon: 'fal fa-plus',
      label: 'Adicionar',
      customClass: 'add'
    },
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard',
    },
    {
      routeLink: 'crud',
      icon: 'fal fa-bookmark',
      label: 'Crud',
    },
  ];
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  constructor(private router: Router, private appService: AppService) { }

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart)
        this.appService.showLoading.next(true);

      if (event instanceof NavigationEnd)
        this.appService.showLoading.next(false);
      this.currentRoute = this.router.url;
      this.navItems.forEach(item => {
        if (item.customClass == 'add')
          item.routeLink = `${this.currentRoute}/add`
      });
    });
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
