import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() categories: string[];

  constructor() {}

  isLast(i: number) {
    return i === this.categories.length - 1;
  }
}
