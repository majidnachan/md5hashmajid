var express = require('express');
var app = express();
app.use(express.json());

const md5 = require('md5');
const { base64encode, base64decode } = require('nodejs-base64');



app.get('/', function (req, res) {
    
  res.send('Hello World!');
});

app.post('/md5Hash', (req, res) => {

    const plainText = req.body.plainText;
    console.log(plainText);

    let customerId = 'RoyalCanin#CustomAPIRequest@'+ plainText;
    console.log(customerId);

    let hashString = md5(customerId);
    let base64encoded = base64encode(hashString);

    console.log(hashString);
    console.log(base64encoded);
    res.json({ 
        encodedText: base64encoded
    });
})

app.listen(process.env.PORT || 3000, function(){
  console.log('Example app listening on port 3000!');
});
