const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://khang:12345@dulieu.4osea.mongodb.net/data?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true });


const app = express()
const port = 3000
app.use(bodyParser.json())


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


const name = new mongoose.Schema({
  ten: String
});

const Name = mongoose.model('tenka', name);





app.get('/', (req, res) => {
  res.send('lie sau')
})

app.post('/', (req, res) => {
    
    const silence = new Name({ ten: req.body.ten });

  silence.save(function (err,silence) {
    if (err) return console.error(err);
    silence.ten;
  });
    Name.find({}).then(notes => {
      res.json(notes)
    })
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})