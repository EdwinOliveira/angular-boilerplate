import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, of } from 'rxjs';
import { LocalizationService } from '../core/services/localization/localization.service';
import { ThemeService } from '../core/services/theme/theme.service';
import { RouterStateModel } from '../shared/models/router-state.model';
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
    private readonly _localizationService: LocalizationService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this._initializeRouterParams();
    this._localizationService.initializeLanguage();
  }

  ngOnInit(): void { }

  private _initializeRouterParams(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this._activatedRoute.firstChild;
          let childRoute = route;

          while (childRoute) {
            if (childRoute.firstChild !== null) {
              childRoute = childRoute.firstChild;
              route = childRoute;
            } else {
              childRoute = null;
            }
          }

          return route;
        }),
        mergeMap((route) => {
          if (route === null) {
            return of({ navbarState: true, contentState: true, footerState: true });
          }

          return route['data'];
        }),
      )
      .subscribe((data: Data | RouterStateModel) => {
        const { navbarState, contentState, footerState } = data;

        console.log(navbarState)

        this._navbarService.updateState(navbarState);
        this._contentService.updateState(contentState);
        this._footerService.updateState(footerState);
      })
  }

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
