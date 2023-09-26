import { Component } from '@angular/core';
import { IconRegistryService } from './src/shared/services/icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ssp_fe';

  constructor(private iconRegistry: IconRegistryService) {
    this.iconRegistry.performRegistration();
  }
}
