const router = require('express').Router();
const fs = require('fs');

let datas = JSON.parse(fs.readFileSync('./data/data.json').toString());
if (!datas.data) datas.data = [];

router.get('/', (req, res) => {
    res.render('product/list.ejs', datas);
})
router.get('/new', (req, res) => {
    res.render('./product/new', {});
})

router.post('/', (req, res) => {
    datas.data.push(req.body);
    fs.writeFileSync('./data/data.json', JSON.stringify(datas));
    res.redirect('/products')
})

module.exports = router;