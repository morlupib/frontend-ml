import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ItemService } from './item.service';
import { environment } from '../../../environments/environment';
import { mockedItem, mockedItems } from './mockItem';

describe('ItemService', () => {
  let service;
  let httpMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ItemService ]
    })
    .compileComponents();
    service = TestBed.inject(ItemService);
    httpMock = TestBed.inject(HttpTestingController);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get item when getItem is called', () => {
    const id = 'id';

    service.getItem(id).subscribe(item => {
      expect(item).toEqual(mockedItem);
    });

    const request = httpMock.expectOne( `${environment.apiUrl}/items/id`);
    expect(request.request.method).toBe('GET');

    request.flush(mockedItem);
  });

  it('should get items when getItems is called', () => {
    const query = 'query';

    service.getItems(query).subscribe(item => {
      expect(item).toEqual(mockedItem);
      expect(item.items.lenght).toBe(2);
      console.log(item.items.lenght);
    });

    const request = httpMock.expectOne( `${environment.apiUrl}/items?q=query`);
    expect(request.request.method).toBe('GET');

    request.flush(mockedItems);
  });
});
