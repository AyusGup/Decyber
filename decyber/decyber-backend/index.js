const connectToMongo = require('./db');
const express = require('express')
var cors=require('cors');// installed this because you can't call your api's from you web server

connectToMongo();
const app = express()
const port = 8000// bcoz 3000 pe humari react app chalegi

app.use(cors(
  origin = ["http://localhost:3000", "https://decyber-seven.vercel.app"]
));
// MiddleWare (if you want to use req.body)
app.use(express.json()); 

// Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/scoreboard',require('./routes/scoreboard'));
app.use('/api/ap_questions',require('./routes/ap_questions'));
app.use('/api/cp_questions',require('./routes/cp_questions'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})