const ncp = require('ncp').ncp;
const resolve = require('path').resolve;

const source = resolve('./src/types');
const destination = resolve('./dist/types/types');

ncp(source, destination, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('All type files copied in dist folder!');
});