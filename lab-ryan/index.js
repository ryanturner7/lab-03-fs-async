'use strict';

const printFiles = require('./lib/print-files.js');

let contents = module.exports = () => {
  let results = printFiles(process.argv.slice(2), (err, data) => {
    data.forEach((file) => {
      console.log(file);
    });
  });
  return results;
};
contents();
