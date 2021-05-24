const warriors = require('../warriors')
const Warrior = require('../models').Warrior
const SpaceShip = require('../models').SpaceShip

const index = (req,res) => {
    Warrior.findAll().then(warriors => {
        res.render('warriors/index.ejs')
    })
}

const renderSignup = (req,res) => {
    res.render('warriors/signup.ejs')
}

const signUp = (req,res) => {
    Warrior.create(req.body).then(newUser => {
        res.redirect(`/warriors/profile/${newUser.id}`)
    })
}

const renderLogin  = (req,res) => {
    res.render('warriors/login.ejs')
}

const login = (req,res)  => {
    Warrior.findOne({where: {username: req.body.username}}).then(user => {
        if(user.password === req.body.password){
            res.redirect(`/warriors/profile/${user.id}`)
        }else {
            res.redirect('/warriors/login')
        }
    })
}

const renderProfile = (req,res) => {
    Warrior.findByPk(req.params.index, {
        include: [{
            model: SpaceShip,
            attributes: ['name']
        }]
    }).then(user => {
        SpaceShip.findAll().then(allSpaceships => {
            res.render('warriors/profile.ejs', {
                user:user,
                spaceships: allSpaceships
            })
        })
    })
}

const editProfile = (req,res) => {
    Warrior.update(req.body, {
        where: {id: req.params.index},
        returning: true,
        plain: true 
    }).then(updatedUser => {
        res.redirect(`/warriors/profile/${updatedUser[1].dataValues.id}`)
    })
}

const deleteWarrior = (req,res) => {
    Warrior.destroy({ where: { id: req.params.index}}).then(() =>{
        res.redirect('/warriors')
    })
}

module.exports = {
    index,
    renderSignup,
    signUp,
    renderLogin,
    login,
    renderProfile,
    editProfile,
    deleteWarrior

}