import * as express from 'express';
import * as cors from 'cors';
import { routes } from './app/items';

const app = express();

app.use(cors());
app.use(routes);

app.use((req, res, next) => {
  next({
    message: 'Not Found',
    status: 404
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      status: err.status
    }
  });
});

const port = process.env.port || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/items`);
});
server.on('error', console.error);
