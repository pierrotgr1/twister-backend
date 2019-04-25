const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.port || 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, function(){
  console.log(`twister backend running on port ${PORT}`);
});
