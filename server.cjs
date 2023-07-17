const express = require('express')
const ExampleRoutes = require('./example/example.routes.cjs')

const app = express();
const port = 3000;

app.use('/weird', ExampleRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
