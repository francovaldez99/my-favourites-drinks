const List=require("../models/list.model");


const getAllFav=async(req,res)=>{
    try {
        const authorId=req.id;
        
        const allFAv= await List.find({author:authorId,name:"Favourites"})
        res.status(200).json(allFAv)
    } catch (error) {
        res.status(400).json({errMessage:"Internal server error",...error})

    }
}

const newFav=async(req,res)=>{
    try {
        const authorId=req.id;
        const {newItem}=req.body
        const allFav= await List.findOne({author:authorId,name:"Favourites"})
    
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
        const allFAv= await List.findOne({author:authorId,name:"Favourites"})
        const updatedList = allFAv.list.filter((el) => el.idDrink !== idDrink);

     let fav=  await List.findOneAndUpdate(
          { author: authorId, name: "Favourites" },
          { list: updatedList },
          { new: true } 
        );
        console.log(idDrink);
        console.log(updatedList);
        // console.log(fav);
            res.status(200).json(fav)
    } catch (error) {
        res.status(400).json({errMessage:"Internal server error",...error})

    }
}



const getAllList=async(req,res)=>{
    try {
        const authorId=req.id;
        const allList=await List.find({author:authorId})
            res.status(200).json(allList)
    } catch (error) {
        res.status(400).json({errMessage:"Internal server error",...error})
    }
}

//new List
const newList=async(req,res)=>{
try {
    const authorId=req._id;
    const nameList=req.body.name
    const newList= await List.create({
        author:authorId,
        name:nameList
    })
    await newList.save()
    res.status(200).json(newList)
} catch (error) {
    res.status(400).json({errMessage:"Internal server error",...error})
    
}
}



module.exports={
    getAllFav,newFav,deleteFav
    ,getAllList,
    newList
}