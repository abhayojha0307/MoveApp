const {dbCon}=require('../configuration')
const {ObjectId}=require('bson')

const getMovies=(req,res,next)=>{
    const pageNumber=parseInt(req.params.page)
    if(isNaN(pageNumber)){
        return res.status(400).send('Bad Request')
    }

    const movieSkip=(pageNumber-1)*10

    dbCon('movies',async (db)=>{
        try{
            const movies= await db.find({}).skip(movieSkip).limit(10).toArray()
        res.json(movies)
        }
        catch (err){
            res.status(500).send("Internal Server Error")
        }
        
    })
}

const getOneMovies=(req,res,next)=>{
    if(!ObjectId.isValid(req.params.id))
    {
       return res.status(400).send("Bad Request")
    }
    const _id=new ObjectId(req.params.id)
    dbCon('movies',async (db)=>{
        try{
            const movies= await db.findOne({_id})
            if(!movies){
                return res.status(404).send('Movie not found')
            }
            res.json(movies)
        }
        catch(err){
            res.status(500).send("Internal Server Error")
        }
    })  
}

module.exports={
    getMovies,
    getOneMovies
}