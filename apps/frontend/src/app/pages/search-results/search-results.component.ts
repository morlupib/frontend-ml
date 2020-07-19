import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item/item.service';
import { ISearchResult } from '../../interfaces/ISearchResult';
import { Title } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResult: ISearchResult;

  constructor(
    private route: ActivatedRoute,
    public itemService: ItemService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Resultados de búsqueda');
    this.route.queryParamMap.subscribe((res: any) => {
      this.itemService.getItems(res.params.query).pipe(first())
        .subscribe((response: ISearchResult) => {
          this.itemService.categories = response.categories;
          this.searchResult = response;
        }, err => console.error(err));
    });
  }

}
