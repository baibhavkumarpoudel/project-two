const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/', ctrl.warriors.index)
router.get('/signup', ctrl.warriors.renderSignup)
router.post('/', ctrl.warriors.signUp)
router.get('/profile/:index', ctrl.warriors.renderProfile)
router.get('/login', ctrl.warriors.renderLogin)
router.post('/login', ctrl.warriors.login)
router.put('/profile/:index', ctrl.warriors.editProfile)
router.delete('/:index', ctrl.warriors.deleteWarrior)





module.exports = router
