const UserRoutes = require('./UserRoute');
const ProductRoutes = require('./ProductRoutes');

module.exports = (app) => {
  app.use('api/v1/products', ProductRoutes);
  app.use('/api/v1/users', UserRoutes);
};
