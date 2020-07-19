import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: SearchResultsComponent },
  { path: 'items/:id', component: ItemDetailComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
