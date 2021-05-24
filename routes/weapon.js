const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/', ctrl.weapon.index)
router.get('/new', ctrl.weapon.renderNew)
router.get('/:index', ctrl.weapon.showWeapon)
router.get('/:index/edit', ctrl.weapon.weaponEditor)

router.post('/', ctrl.weapon.postWeapon)

router.put('/:index', ctrl.weapon.editWeapon)

router.delete('/:index', ctrl.weapon.deleteWeapon)

module.exports = router
