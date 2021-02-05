/* config-overrides.js */
const { useBabelRc, override, addDecoratorsLegacy } = require('customize-cra')

const config = override(addDecoratorsLegacy())
// const config = override(useBabelRc())
module.exports = configs