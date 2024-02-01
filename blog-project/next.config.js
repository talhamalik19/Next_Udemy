const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'talhamalick19',
        mongodb_password: 'talha123',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'talhamalick19',
      mongodb_password: 'talha123',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
