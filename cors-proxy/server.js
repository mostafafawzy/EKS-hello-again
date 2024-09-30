const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(port, host, () => {
  console.log(`CORS proxy running on ${host}:${port}`);
});
