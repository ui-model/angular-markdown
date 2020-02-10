import { Injectable } from '@angular/core';
import { highlightAuto } from 'highlight.js';
import * as marked from 'marked';
import { MarkedOptions } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {

  constructor() {
  }

  defaultOptions: MarkedOptions = {
    highlight: function (code, lang) {
      return highlightAuto(code, [lang]).value;
    },
    smartLists: true,
    smartypants: false,
    xhtml: true,
  };

  render(text: string, options: MarkedOptions = {}): string {
    return marked(text, { ...this.defaultOptions, ...options });
  }
}
