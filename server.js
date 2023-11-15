const routes = require('./routes');

const sequelize = require('./config/connection');


// This is the code for syncing sequelize models to the database 
// Then turn on the server is able

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => 

        console.log(''));
  });
