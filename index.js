const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require("cors")
const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 5000
var jsonParser = bodyParser.json()


const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(cors())

app.get('/', (req, res) => res.render('client/build/index.html'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


app.get('/test', (req, res) => {
  res.send('Hello from exp kk!')
})


app.post('/sendmail', jsonParser, (req, res) => {
  console.log(JSON.stringify(req.body))
  var mailOptions = {
      from: 'pestbugcontrol@gmail.com',
      to: 'tarsem.tps@gmail.com',
      subject: req.body.subject,
      text: req.body.body};

  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'pestbugcontrol@gmail.com',
          pass: Buffer.from("cmFtcmFtQHRhcnNlbTE=", 'base64').toString('ascii')
      }
  });
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.status(400).json({message: 'Failed to send mail! error '+error});
          return;
      } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({message: "Email sent successfully "+info.response});
          return;
      }
  });
})



