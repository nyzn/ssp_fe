import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconRegistryData } from 'src/shared/enum/IconRegistryData';
import { IconRegistryObject } from 'src/shared/interface/IconRegistryObject';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  performRegistration() {
    IconRegistryData.forEach((element: IconRegistryObject) => {
      this.iconRegistry.addSvgIcon(
        element.iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(element.iconPath)
      );
    });
  }
}
