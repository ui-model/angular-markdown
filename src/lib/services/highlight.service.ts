import { Injectable } from '@angular/core';
import { highlightAuto, IAutoHighlightResult } from 'highlight.js';

@Injectable({
  providedIn: 'root',
})
export class HighlightService {

  constructor() {
  }

  render(text: string, languageSubset?: string[]): IAutoHighlightResult {
    return highlightAuto(text, languageSubset);
  }
}
