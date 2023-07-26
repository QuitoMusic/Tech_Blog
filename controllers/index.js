const router = require('express').Router();

// Import routes 
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');


// middleware to handle home-related requests
router.use('/', homeRoutes);
// middleware to handle dashboard-related requests
router.use('/dashboard', dashboardRoutes);

// This middleware handles 404 (Not Found) response.
router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;
