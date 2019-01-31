const fs = require('fs');
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
const PNG = require('png-js');
const Jimp = require('jimp');
const getPixels = require('get-pixels');


module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/', async (req, res, next) => {
        // const model = await tf.loadModel('http://localhost:3000/model.json');
        res.render('index.ejs');
    });

    app.post('/upload', async (req, res, next) => {
        // const model = await tf.loadModel('http://localhost:3000/model.json');
        console.log(req.body);
        // base64image = req.body.image.replace('data:image/png;base64,', '');
        // fs.writeFile('./app/image.png', new Buffer.from(base64image, 'base64'), async (err) => {
        //     console.log('The file has been saved!');
        //     Jimp.read('./app/image.png', async (err, image) => {
        //         if (err) throw err;
        //         await image
        //             .resize(32, 32) // resize
        //             .greyscale()
        //             .write('hooray.png'); // save
        //         getPixels("./hooray.png", function (err, pixels) {
        //             if (err) {
        //                 console.log("Bad image path")
        //             }
        //             console.log(pixels.data);
        //             const input = tf.tensor4d(pixels.data.map(pixel => pixel/255),[1,32,32,4],'float32');
        //             console.log(input);
        //         })
        //     });
        // });
    });

}