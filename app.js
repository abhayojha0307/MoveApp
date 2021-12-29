const express=require('express');

const app=express();

const middleware=require('./middlewares')

const route=require('./routes')

middleware(app)

route(app)


module.exports=app;