'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Weapons', [
      {
        name: "Ak-47",
        description: "Very reliable automatic assault rifle chambered in 7.62mm Soviet. Large caliber ammunition requires skill to control recoil.",
        img: "https://www.krale.shop/media/catalog/product/c/y/cybergun-kalashnikov-ak47-_1_.jpg"
    },
    {
        name: "FN Scar 17",
        description: "Large caliber, fully automatic assualt rifle that provides high damage over long ranges.",
        img: "https://fnamerica.com/wp-content/uploads/2012/09/FN_SCAR_17S_Rotators_1-1200x598.png"
    },
    {
        name: "M13",
        description: "Automatic assault rifle featuring a short-stroke piston system that keeps the fire rate high and the recoil low.",
        img: "https://www.sigsauer.com/pub/media/catalog/product/cache/2f7933e2ff16f0ec074a16ab6b6195f2/r/m/rmcx-16b-tap-p-fde-right.jpg"
    },
    {
        name: "P90",
        description: "Double barrels provide two rapid shots before each re-chamber.",
        img: "https://static.3dbaza.com/models/26223/d6c289fc71a84c6cabced4ab.jpg"
    },
    {
        name: "R9-0 Shotgun",
        description: "Very reliable automatic assault rifle chambered in 7.62mm Soviet. Large caliber ammunition requires skill to control recoil.",
        img: "https://www.gameloadouts.com/uploads/Call+of+Duty+Warzone-R9-0+Shotgun.png"
    },
    {
        name: "Dragunov",
        description: "A soviet workhorse chambered in 7.62mm x 54mmR. This gas-operated semi-automatic sniper rifle allows for rapid followup shots.",
        img: "https://www.renderhub.com/b1endman/dragunov-sniper-rifle-svd/dragunov-sniper-rifle-svd-01.jpg"
    },
    {
        name: "RPG-7",
        description: "Unguided, self-propelled rocket launcher fires a slower projectile with a high-explosive yield.",
        img: "https://www.evike.com/images/21/large/matrix-42450.jpg"
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
