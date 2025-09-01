const express=require('express');
const router=express.Router();
const menu=require('./../models/menu');

router.post('/',async(req,resp)=>{

    try{
   
        const data=req.body;
        const newmenu=new menu(data);
       const response=await newmenu.save();
       console.log(" menu data saved sucessfully");
       resp.status(200).json(response);
    }
    catch{err}{
     console.log(err);
     resp.status(500).json({error:"internal server error"});
    }
    
})

router.get('/',async(req,resp)=>{
        try{
       const data=await menu. find();
       console.log("menu data fatched sucessfully");
       resp.status(200).json(data);
        }
        catch(err){
        console.log(err);
        resp.status(500).json({error:"internal server error"});
    
        }
})

router.get('/:tastetype',async(req,resp)=>{
    try{
        const tastetype=req.params.tastetype;
      if(tastetype=='sweet'||tastetype=='spicy'||tastetype=='sour'||tastetype=='cold')
    {
         const response=await menu.find({taste:tastetype});
         console.log(' menu related response fatched');
         resp.status(404).json({response});
    }
    else{
        resp.status(404).json({error:"invalid taste type"});
    }

    }
    catch(err){
         console.log(err);
         resp.status(500).json({error:'internal server error'})
    }
})


router.put('/:id',async(req,resp)=>{


    try{
  const menuId=req.params.id;
  const updatedMenuData=req.body;
   
   const response=await menu.findByIdAndUpdate(menuId,updatedMenuData,{
      new:true,
      runvalidators:true,
   })

   if(!response)
        {
            return resp.status(404).json({error:'menu not found'});
        }

        console.log('menu data updated');
        resp.status(200).json(response);
            
    }
    catch(err)
    {
         console.log(err);
     resp.status(500).json({error:"internal server error"});

    }
})

router.delete('/:id',async(req,res)=>{

    try{

        const menuId=req.params.id;
        const response=await menu.findByIdAndDelete(menuId);

        if(!response)
        {
           return res.status(404).json({message:"menu deletd sucesfully"});

    }
     console.log('menu data deleted');
        res.status(200).json(response);
            
}
    catch(err){
        console.log(err);
        res.status(500).json({message:'menu related data deleted'});
    }
})

module.exports=router;