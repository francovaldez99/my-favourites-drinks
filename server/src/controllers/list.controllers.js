const List=require("../models/list.model");




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
    const authorId=req.id;
    const nameList=req.body.name
    const listExist= await List.findOne({
        author:authorId,
        name:nameList
    })
    if(listExist){
        res.status(400).json({errMessage:"lista con este nombre ya existe"})

        return
    }
    const newList= await List.create({
        author:authorId,
        name:nameList
    })
    await newList.save()
    const allList=await List.find({author:authorId})
    res.status(200).json(allList)
} catch (error) {
    console.log(error.code);
    if (error.code==11000) {
        res.status(400).json({errMessage:"lista con este nombre ya existe",...error})
    } else {
        
        res.status(400).json({errMessage:"Internal server error",...error})
    }
}
}

const newListItem=async(req,res)=>{
    try {
        const authorId=req.id;
        const {idlist}=req.params
        const {newItem}=req.body
        const listtoupdate= await List.findOne({author:authorId,_id:idlist})
    
        listtoupdate.list.push(newItem)
            await listtoupdate.save()
            const allList=await List.find({author:authorId})
            res.status(200).json(allList)
    } catch (error) {
        res.status(400).json({errMessage:"Internal server error",...error})
        
    }
}

const deleteItemList=async(req,res)=>{
    try {
        const authorId=req.id;

        const {idlist}=req.params;
        const {idDrink}=req.body
        const listtoupdate= await List.findOne({author:authorId,_id:idlist})
        const updatedList = listtoupdate.list.filter((el) => el.idDrink !== idDrink);
console.log(updatedList);
     let newlistupdated=  await List.findOneAndUpdate(
          { author: authorId ,_id:idlist},
          { list: updatedList }
        );
        await newlistupdated.save()
        // console.log(newlistupdated);

        const allList=await List.find({author:authorId})
        console.log(allList);
        res.status(200).json(allList)
    } catch (error) {
        res.status(400).json({errMessage:"Internal server error",...error})

    }
}

const deleteList=async(req,res)=>{
        const {idList}=req.params
    try {
        const authorId=req.id;
        const listtoDelete= await List.findByIdAndRemove({ author:authorId,_id:idList },{new:true})
        const allList=await List.find({author:authorId})
        res.status(200).json(allList)
    } catch (error) {
        res.status(400).json({errMessage:"Internal server error",...error})
        
    }
}



module.exports={
getAllList,
    newList,
    newListItem,
    deleteItemList,
    deleteList
}