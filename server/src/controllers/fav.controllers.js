const Fav=require("../models/fav.model");

const getAllFav=async(req,res)=>{
    try {
        const authorId=req.id;
        
        const allFAv= await Fav.find({author:authorId})
        res.status(200).json(allFAv)
    } catch (error) {
        res.status(400).json({errMessage:"Internal server error",...error})

    }
}

const newFav=async(req,res)=>{
    try {
        const authorId=req.id;
        const {newItem}=req.body
        const allFav= await Fav.findOne({author:authorId})
    
        allFav.list.push(newItem)
            await allFav.save()
            res.status(200).json(allFav)
    } catch (error) {
        res.status(400).json({errMessage:"Internal server error",...error})
        
    }
}

const deleteFav=async(req,res)=>{
    try {
        const authorId=req.id;
        const {idDrink}=req.body;
        const allFAv= await Fav.findOne({author:authorId})
        const updatedList = allFAv.list.filter((el) => el.idDrink !== idDrink);

     let fav=  await Fav.findOneAndUpdate(
          { author: authorId},
          { list: updatedList },
          { new: true } 
        );
      
            res.status(200).json(fav)
    } catch (error) {
        res.status(400).json({errMessage:"Internal server error",...error})

    }
}
module.exports={
    getAllFav,newFav,deleteFav
}