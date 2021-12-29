const {Router}=require('express')
const {getLogin}=require('../controllers')

const router=Router()

router
.get('./signup',(req,res,next)=>{
    res.send('Welcome to the get signup')
})
.post('/signup',(req,res,next)=>{
    res.send('Welcome to the post sgnup')
})
.get('/login',getLogin)
.post('/login',(req,res,next)=>{
    res.send('Welcome to the post login')
})

module.exports=router