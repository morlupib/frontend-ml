const author =  {
  name: 'Bruno',
  lastname: 'Morlupi'
};

export const itemsTemplate = {
  author,
  categories: '=> getCategories(filters)',
  items: [
    '{{results}}',
    {
      id: '{{id}}',
      title: '{{title}}',
      price: {
        currency: '{{currency_id}}',
        amount: '{{price}}',
        decimals: '{{available_quantity}}'
      },
      picture: '{{thumbnail}}',
      condition: '{{condition}}',
      free_shipping: '{{shipping.free_shipping}}',
      state_name: '{{address.state_name}}'
    }
  ],
};

export const itemTemplate = {
  author,
  item: {
    id: '{{id}}',
    title: '{{title}}',
    price: {
      currency: '{{currency_id}}',
      amount: '{{price}}',
      decimals: '{{available_quantity}}'
    },
    picture: '{{pictures[0].url}}',
    condition: '{{condition}}',
    free_shipping: '{{shipping.free_shipping}}',
    sold_quantity: '{{sold_quantity}}',
    description: '',
  }
};

export const getCategories = filters => {
  if (!filters.length) return [];
  const paths = filters[0].values[0].path_from_root;
  const categories = paths.map(category => category.name);
  return categories;
};
