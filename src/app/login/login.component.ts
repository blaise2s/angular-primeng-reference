import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bz-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
