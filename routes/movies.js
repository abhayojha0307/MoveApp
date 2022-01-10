const {Router}=require('express')
const router=Router()
const {getMovies,getOneMovies}=require('../controllers')

router
.get('/getMovies/:page',getMovies)
.get('/getOneMovies/:id',getOneMovies)

module.exports=router