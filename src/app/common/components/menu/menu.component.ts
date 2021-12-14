import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuItems } from './constants/menu.constants';

@Component({
  selector: 'bz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  constructor(private readonly router: Router) {}

  navigate = (...to: string[]) => {
    this.router.navigate(to);
  };

  items: MenuItem[] = MenuItems.map(menuItem => {
    return {
      label: menuItem.label,
      command: () => this.navigate(menuItem.path),
    };
  });
}
