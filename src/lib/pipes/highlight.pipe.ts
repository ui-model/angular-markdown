import { Pipe, PipeTransform } from '@angular/core';
import { HighlightService } from '../services/highlight.service';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  constructor(private highlighter: HighlightService) {
  }

  transform(value: string, languageSubset?: string[]): string {
    if (!value) {
      return;
    }
    return this.highlighter.render(value, languageSubset).value;
  }
}
