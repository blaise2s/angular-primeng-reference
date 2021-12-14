import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bz-storefront',
  templateUrl: './storefront.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorefrontComponent {}
