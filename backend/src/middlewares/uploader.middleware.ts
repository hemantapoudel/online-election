<<<<<<< HEAD
const multer = require('multer');

const myStorage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
        let path = '/uploads';
        cb(null, path)
    },
    filename: (req: any, file: any, cb: any) => {
        let filename = Date.now() + file.originalname
        cb(null, filename)
    }
});

const uploader = multer({
    storage: myStorage,
    limits: 5 * 1024 * 1024,
    fileFilter: (req: any, file: any, cb: any) => {
        var ext_parts = file.originalname.split('.');
        let ext = ext_parts.pop();
        if (ext == 'jpg' || ext == 'png') {
            cb(null, true)
        }
        else {
            cb(null, false)
        }
    }
})
=======
const multer = require("multer");

const myStorage = multer.diskStorage({
    destination: (req:any, file:any, cb:any) => {
        let path = "public/";
        cb(null, path)
    },
    filename: (req:any, file:any, cb:any) =>{

        let filename = Date.now()+"."+file.originalname.split(".").pop();
        console.log(filename)
        cb(null, filename);
    }
})

const uploader = multer({
    storage: myStorage,
    fileFilter: (req:any, file:any, cb:any) => {
        let ext_parts = file.originalname.split(".");        
        let ext = ext_parts.pop();
        
        
        try{   
            let allowed = ['jpg', 'jpeg', 'png','gif','bmp','webp','svg','pdf'];
            if(allowed.includes(ext.toLowerCase())){
                cb(null, true);
            } else {
                cb(null, false);
            }
        } catch(error) {
            console.log("Error: ", error);
        }
    }
});


>>>>>>> ec69da86d2138a3e3d8f63c5a1a32ca83367815f
module.exports = uploader;