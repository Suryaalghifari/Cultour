const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.watchFolders = [__dirname];

module.exports = withNativeWind(config, { input: './src/app/global.css' })