import { IItem, ISearchResult } from './../../interfaces/search-result.interface';

export const mockedItem: IItem = {
    id: 'id',
    title: 'string',
    price: {
        currency: 'string',
        amount: 1,
        decimals: 1
    },
    picture: 'string',
    condition: 'string',
    free_shipping: true,
    state_name: 'string',
    sold_quantity: 1,
    description: 'string'
};

export const mockedItems: ISearchResult = {
    author: {
        name: 'string',
        lastname: 'string'
    },
    categories: ['string', 'string'], 
    items: [{
        id: 'id1',
        title: 'string',
        price: {
        currency: 'string',
        amount: 1,
        decimals: 1
        },
        picture: 'string',
        condition: 'string',
        free_shipping: true,
        state_name: 'string',
        sold_quantity: 1,
        description: 'string'
    },
    {
        id: 'id2',
        title: 'string',
        price: {
        currency: 'string',
        amount: 1,
        decimals: 1
        },
        picture: 'string',
        condition: 'string',
        free_shipping: true,
        state_name: 'string',
        sold_quantity: 1,
        description: 'string'
    }]
};
