import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  query = '';

  constructor(
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Busca tus productos');
  }

  search() {
    this.router.navigate(['/items'], { queryParams: { query: this.query } });
  }
}
