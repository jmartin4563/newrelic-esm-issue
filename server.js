import express from 'express';
import ExampleRoutes from './example/example.routes.js';
import swaggerUi from 'swagger-ui-express';

debugger

const app = express();
const port = 3000;

app.use('/weird1', ExampleRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
