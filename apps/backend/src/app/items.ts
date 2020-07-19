import fetch from 'node-fetch';
import * as template from './template';
import { transform } from 'json-to-json-transformer';
import { environment } from './../environments/environment';
const router = require('express').Router();

const endpoints = {
    itemEndpoint: `${environment.urlApi}${environment.itemEndpoint}`,
    searchEndpoint: `${environment.urlApi}${environment.searchEndpoint}`
};

router.get('/api/items', (req, res, next) => {
  const query = req.query.q;
  fetch(`${endpoints.searchEndpoint}?q=${query}&limit=4`)
    .then(response => response.json())
    .then(data => {
      const items = transform(template.itemsTemplate, data, { getCategories: template.getCategories });
      res.status(200).send(items);
    })
    .catch(err => {
      console.error('Error Message:' + err.message);
      res.status(500).send(err);
    });
});

router.get('/api/items/:id', (req, res, next) => {
  const id = req.params.id;
  const urls = [
    `${endpoints.itemEndpoint}/${id}`,
    `${endpoints.itemEndpoint}/${id}/description`
  ];

  const allRequests = urls.map(url => fetch(url).then(response => response.json()));

  Promise.all(allRequests)
    .then(data => {
      const item = transform(template.itemTemplate, data[0]);
      item.item.description = data[1].plain_text;
      res.status(200).send(item);
    })
    .catch((err) => {
      console.error('Error Message:' + err.message);
      res.status(500).send(err);
    });
});

export const routes = router;