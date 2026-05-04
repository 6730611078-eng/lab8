const express = require('express');
const router = express.Router();
const controller = require('../controller/itemController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); 
    }
});
const upload = multer({ storage: storage });

router.get('/', controller.index);
router.get('/add', controller.addPage);
router.post('/add', upload.single('image'), controller.save); 
router.get('/edit/:id', controller.editPage);
router.post('/edit/:id', upload.single('image'), controller.update);
router.post('/delete/:id', controller.remove);

module.exports = router;
