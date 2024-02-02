if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const cors = require('cors')
  const dbConnect = require('./Config/dbConnect.js');
  const {
    globalErrhandler,
    notFound,
  } = require('./middlewares/globalErrHandler.js');
  const songRoutes = require('./routes/songRoutes.js');
  
  // db connect
  dbConnect();
  const app = express();
  
  // pass incoming data
  app.use(express.json());

  // url encoded
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  
  //routes
  app.use('/songs/', songRoutes);
  
  //err middleware
  app.use(notFound);
  app.use(globalErrhandler);
  
  module.exports = app;
  