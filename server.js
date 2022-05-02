 const express = require('express');
 const routes = require('./routes');
 const sequelize = require('./config/connection');

 const app = express();
 const PORT = process.env.PORT || 3001;

 app.use(express.json());
 app.use(express.urlencoded({ extended: true}));

 //turn on routes
 app.use(routes);

 //turn on connection to db and server
 //sync({ force: true}) causes db connection must first sync to model defenitions and association, tables recreate when changes are made. Best to keep false to avoide having to reseed tables every time. 
 sequelize.sync({ force: false}).then(() =>{
     app.listen(PORT, () => console.log('Now listening'))
 });