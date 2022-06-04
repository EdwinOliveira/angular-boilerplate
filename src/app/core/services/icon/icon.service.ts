import { Injectable } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import { IconCollection } from 'src/app/shared/constants/collections/icon.collection';
import { IconModel } from 'src/app/shared/models/icon.model';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private readonly _icons: Array<IconModel>;

  constructor() {
    this._icons = new Array<IconModel>(
      new IconModel(IconCollection.THEME, faPaintRoller),
      new IconModel(IconCollection.THEME, faGlobe),
    );
  }

  private _fetchIconDefinitionByName(name: IconCollection): IconDefinition | null {
    const icon = this._icons.find((icon) => icon.name.match(name));

    return icon !== undefined ? icon.definition : null;
  }

  /** Icons */

  public get themeIcon(): IconDefinition {
    return this._fetchIconDefinitionByName(IconCollection.THEME) ?? faPaintRoller;
  }

  public get languageIcon(): IconDefinition {
    return this._fetchIconDefinitionByName(IconCollection.LANGUAGE) ?? faGlobe;
  }
}