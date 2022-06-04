import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private readonly _themeService: ThemeService,
  ) { }

  ngOnInit(): void { }

  public get themeService(): ThemeService {
    return this._themeService;
  }

}
