var multer = require('multer'); 
var fs = require('fs');

var storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        var dest = 'uploads/documents';
        var stat = null;

        try{
            stat = fs.statSync(dest);
        }catch(err){
            fs.mkdirSync(dest);
        }
        if (stat && !stat.isDirectory()) {
            throw new Error('Directory cannot be created because an inode of a different type exists at "' + dest + '"');
        }       
        cb(null, dest);
    }, 
    filename: (req, file, cb) => { 
        var filename = file.originalname
        filename = filename.replace(/ /g, "_")
        cb(null, 'kai' + '_' + 'document' + '_' + Date.now() + '_' + filename) 
    }
});

var upload = multer(
    { 
        storage: storage,
    },
);

module.exports = upload;
