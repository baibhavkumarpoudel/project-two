const weapon = require('../models').Weapon

const index = (req,res) => {
    weapon.findAll().then(weapon => {
        res.render('index.ejs', {weapon: weapon})
    })
}
module.exports = {
    index
}