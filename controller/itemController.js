const Item = require('../models/itemmodel');
const fs = require('fs');

exports.index = async (req, res) => {
    const data = await Item.all();
    res.render('index', { items: data });
};

exports.addPage = (req, res) => {
    res.render('form', { isEdit: false, product: {} }); // 
};

exports.save = async (req, res) => {
    const p = {
        name: req.body.name,
        cat: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        img: req.file ? req.file.filename : ''
    };
    await Item.create(p);
    res.redirect('/');
};

exports.editPage = async (req, res) => {
    const p = await Item.find(req.params.id);
    res.render('form', { isEdit: true, product: p }); 
};

exports.update = async (req, res) => {
    const old = await Item.find(req.params.id);
    let pic = old.image;

    if (req.file) {
        pic = req.file.filename;
        if (old.image) {
            fs.unlinkSync('./uploads/' + old.image);
        }
    }

    await Item.edit(req.params.id, {
        name: req.body.name,
        cat: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        img: pic
    });
    res.redirect('/');
};

exports.remove = async (req, res) => {
    const p = await Item.find(req.params.id);
    if (p.image) {
        fs.unlinkSync('./uploads/' + p.image); 
    }
    await Item.del(req.params.id);
    res.redirect('/');
};
