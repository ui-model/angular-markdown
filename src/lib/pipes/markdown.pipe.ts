import { Pipe, PipeTransform } from '@angular/core';
import { MarkedOptions } from 'marked';
import { MarkdownService } from '../services/markdown.service';

@Pipe({
  name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {
  constructor(private marked: MarkdownService) {
  }

  transform(value: string, options: MarkedOptions = {}): string {
    if (!value) {
      return '';
    }
    return this.marked.render(value, options);
  }
}
