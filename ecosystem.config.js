module.exports = {
  apps: [
    {
      name: "steem-dashboard",
      script: "./bin/www.js",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      // cron_restart: '0 0 * * *',
    },
  ],
};
