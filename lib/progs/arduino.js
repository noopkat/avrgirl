// do a thing or two in here

var SerialPort = require("serialport");
var intel_hex = require('intel-hex');
var fs = require('fs');
var Stk500 = require('stk500');

var data = fs.readFileSync(__dirname + '/../../junk/hex/Blink.cpp.hex', { encoding: 'utf8' });
var hex = intel_hex.parse(data).data;

var board = {
  name: "Arduino Uno",
  baud: 115200,
  signature: new Buffer([0x1e, 0x95, 0x0f]),
  pageSize: 128,
  timeout: 400
};

// is a bit noisy eh
console.log = function () {};

function upload(path, done) {

  var serialPort = new SerialPort.SerialPort(path, {
    baudrate: board.baud,
  });

  serialPort.on('open', function () {

    Stk500.bootload(serialPort, hex, board, function (error){

      serialPort.close(function (error) {
        console.log(error);
      });

      done(error);
    });

  });

}

upload('/dev/cu.usbmodem1411', function (error){
  if (!error) {
    console.info("programing SUCCESS!");
    process.exit(0);
  }
});
