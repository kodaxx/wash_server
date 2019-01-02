const express = require('express')
const app = express()

const raspihats = require('raspihats')
const DQ10rly = raspihats.i2cHats.DQ10rly

// access control allow headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// get Poloniex trading price
app.get('/relay1', function(req, res) {
  const relay = new DQ10rly(0x50)
  console.log("running")
  res.sendStatus(200)
  
  relay.DQ.setChannel(0, true)   // write single digital output channel

  setTimeout(function () {
    relay.DQ.setChannel(0, false)
  }, 3000)
})

// set server
const port = 3000;
app.listen(port);
console.log(`wash_server v0.0.1 running on port http://localhost:${port}`);
