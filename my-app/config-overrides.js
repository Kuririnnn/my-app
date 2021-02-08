const { override, addDecoratorsLegacy, addLessLoader } = require('customize-cra');
module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {}
        }
    }),
    addDecoratorsLegacy()
);