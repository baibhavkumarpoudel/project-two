const weapon = require('../models').Weapon

const index = (req,res) => {
    weapon.findAll().then(weapon => {
        res.render('index.ejs', {weapon: weapon})
    })
}

const renderNew = (req,res) => {
    res.render('new.ejs')
}

const postWeapon = (req,res) => {
    weapon.create(req.body).then(newWeapon => {
        res.redirect('./weapon')
    })
}

const showWeapon = (req,res) => {
    weapon.findByPk(req.params.index).then(weapon => {
        res.render('show.ejs', {weapon: weapon})
    })
}

const weaponEditor = (req,res) => {
    weapon.findByPk(req.params.index).then(weapon => {
        res.render(
            'edit.ejs',
            {
                weapon:weapon
            }
        )
    })
}

const editWeapon = (req,res) => {

    weapon.update(req.body, {
        where: {id: req.params.index },
        returning: true 
    }).then(weapon => {
            res.redirect('/weapon')
    })
}

const deleteWeapon = (req,res) => {
    weapon.destroy({ where : { id: req.params.index}}).then(() => {
        res.redirect('/weapon')
    })
}

module.exports = {
    index,
    renderNew,
    postWeapon,
    showWeapon,
    weaponEditor,
    editWeapon,
    deleteWeapon
}