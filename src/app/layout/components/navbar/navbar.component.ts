import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/core/services/icon/icon.service';
import { LocaleService } from 'src/app/core/services/locale/locale.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private readonly _iconService: IconService,
    private readonly _localeService: LocaleService,
  ) { }

  ngOnInit(): void { }

  public get iconService(): IconService {
    return this._iconService;
  }

  public get localeService(): LocaleService {
    return this._localeService;
  }

}
