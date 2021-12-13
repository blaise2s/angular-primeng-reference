import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'bz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private readonly router: Router) {}

  navigate = (...to: string[]) => {
    this.router.navigate(to);
  };

  items: MenuItem[] = [
    {
      label: 'Allocation',
      command: () => {
        this.navigate('/allocation');
      },
    },
    {
      label: 'E-commerce',
      command: () => {
        this.navigate('/e-commerce');
      },
    },
    {
      label: 'Storefront',
      command: () => {
        this.navigate('/storefront');
      },
    },
  ];
}
