const raspihats = require('raspihats')
const DQ10rly = raspihats.i2cHats.DQ10rly

var relay = new DQ10rly(0x50);

// All the following methods will issue a request and get a response from the board over the I2C bus.

// Digital Outputs
console.log("running")
relay.DQ.setChannel(0, true)   // write single digital output channel
setTimeout(function () {
  relay.DQ.setChannel(0, false)
}, 3000)
