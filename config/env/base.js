
module.exports = {
  name: 'gokoa-demo',
  env: process.env.NODE_ENV,
  db: process.env.MONGOHQ_URL,
  templating: 'swig',
  viewsCache: false
};
