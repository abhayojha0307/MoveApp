const {getLogin}=require('./auth/login')
const {getMovies,getOneMovies}=require('./movieController')

module.exports={
    getLogin,
    getMovies,
    getOneMovies
}