const warriors = require('../warriors')
const Warrior = require('../models').Warrior
const Spaceship = require('../models').Spaceship
const Weapon = require('../models').Weapon

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
            model: Spaceship,
            attributes: ['name']
        }]
    }).then(user => {
        Spaceship.findAll().then(allSpaceships => {
        Weapon.findAll().then(allWeapons => {
            res.render('warriors/profile.ejs', {
                user:user,
                spaceships: allSpaceships,
                weapons: allWeapons
            })
        })    
        })
    })
}



const editProfile = (req,res) => {
    console.log(req.body)
    const warriorBody = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        spaceshipId: req.body.spaceshipId 
    }
    Warrior.update(warriorBody, {
        where: {id: req.params.index},
        returning: true,
        plain: true 
    }).then(updatedUser => {
        const weaponBody = {
            warriorId: updatedUser[1].dataValues.id
        }
        Weapon.update(weaponBody, {
            where: {id: req.body.weaponId}
        }).then(updatedWeapon => {
            res.redirect(`/warriors/profile/${updatedUser[1].dataValues.id}`)
        })
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