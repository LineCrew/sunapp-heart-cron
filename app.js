var dotenv = require('dotenv');
var Sequelize = require('sequelize');
var CronJob = require('cron').CronJob;

dotenv.config();

var sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    define: {
      timestamps: true,
      underscored: true,
    },
  }
);

var job = new CronJob({
  // Mon ~ Sun, 23:59 PM
  cronTime: '00 59 23 * * 0-7',
  onTick: function() {
    sequelize.query(process.env.CRON_QUERY, { type: sequelize.QueryTypes.SELECT})
    .then(result => console.log(result));
  },
  start: false,
  timeZone: 'Asia/Seoul'
});

job.start();

console.log(`Heart Cron Job Status -> ${job.running}`);
