import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Color } from '../models/color';


@Injectable()
export class ColorService {
  constructor() {}
  getList(): Color[] {
    return [];
  }
}