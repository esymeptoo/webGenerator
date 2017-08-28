const express = require('express')
const path = require('path')
const Busboy = require('busboy')
const fs = require('fs')
const router = express.Router()

router.post('/upload', (req, res) => {
    console.log('正在上传文件');
    var busboy = new Busboy({ headers: req.headers });
    var name = '',
        file_name = '';
    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        name = `upload_${(new Date()).getTime()}.${mimetype.split('/')[1]}`;
        file_name = filename;
        var saveTo = path.join(path.resolve(__dirname, '../../../public/upload'), path.basename(`upload_${(new Date()).getTime()}.${mimetype.split('/')[1]}`));
        file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('error', function () {
        console.log('上传失败');
        res.json({
            code: 10001,
            message: '上传失败'
        });
    });
    busboy.on('finish', function () {
        console.log('上传成功');
        res.json({
            code: 10000,
            url: `/upload/${name}`,
            origina: file_name,
        })
    });
    req.pipe(busboy);
})


module.exports = router;
