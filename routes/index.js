const authRouter=require('./auth')
const movieRouter=require('./movies')

module.exports=(app)=>{
    app.use('/auth',authRouter);
    app.use(movieRouter)
}