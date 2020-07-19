import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item/item.service';
import { IItem } from '../../interfaces/search-result.interface';
import { Title } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  item: IItem;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    public itemService: ItemService,
    private title: Title
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.title.setTitle('Detalle del producto');
    const id = this.route.snapshot.params.id;
    this.getItem(id);
  }

  getItem(id: string) {
    this.itemService
      .getItem(id)
      .pipe(first())
      .subscribe(
        (res: any) => (this.item = res.item),
        (err) => console.error(err),
        () => (this.isLoading = false)
      );
  }

  getCondition(condition: string) {
    return condition === 'new' ? 'Nuevo' : 'Usado';
  }
}
