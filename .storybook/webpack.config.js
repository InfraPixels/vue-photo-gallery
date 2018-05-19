const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Add js, json and vue extension support
  defaultConfig.resolve.extensions.push('.js', '.vue', '.json');

  // Add alias for @ pointing to src
  defaultConfig.resolve.alias['@'] = path.resolve('src')

  return defaultConfig;
};
