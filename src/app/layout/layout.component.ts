import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme/theme.service';
import { ContentService } from './components/content/content.service';
import { FooterService } from './components/footer/footer.service';
import { NavbarService } from './components/navbar/navbar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private readonly _themeService: ThemeService,
    private readonly _navbarService: NavbarService,
    private readonly _contentService: ContentService,
    private readonly _footerService: FooterService,
  ) { }

  ngOnInit(): void { }

  public get themeService(): ThemeService {
    return this._themeService;
  }

  public get navbarService(): NavbarService {
    return this._navbarService;
  }

  public get contentService(): ContentService {
    return this._contentService;
  }

  public get footerService(): FooterService {
    return this._footerService;
  }

}
