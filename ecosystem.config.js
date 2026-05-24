module.exports = {
  apps: [{
    name: 'danceweb',
    script: 'server.js',
    env: {
      PORT: 2326
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '200M'
  }]
};
