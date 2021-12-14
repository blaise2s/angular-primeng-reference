import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bz-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
