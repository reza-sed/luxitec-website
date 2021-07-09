const { i18n } = require("./next-i18next.config");

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = {
  reactStrictMode: true,
  i18n,
};
