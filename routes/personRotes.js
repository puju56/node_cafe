const express=require('express');
const router=express.Router();
const person=require('./../models/person');


router.get('/',async(req,resp)=>{
        try{
       const data=await person. find();
       console.log("data fatched sucessfully");
       resp.status(200).json(data);
        }
        catch(err){
        console.log(err);
        resp.status(500).json({error:"internal server error"});
    
        }
})

router.get('/:worktype',async(req,resp)=>{
    try{
        const worktype=req.params.worktype;
      if(worktype=='chef'||worktype=='manager'||worktype=='waiter')
    {
         const response=await person.find({work:worktype});
         console.log('person related response fatched');
         resp.status(404).json({response});
    }
    else{
        resp.status(404).json({error:"invalid work type"});
    }

    }
    catch(err){
         console.log(err);
         resp.status(500).json({error:'internal server error'})
    }
})

router.post('/',async(req,resp)=>{

    try{
   
        const data=req.body;
        const newperson=new person(data);
       const response=await newperson.save();
       console.log("data saved sucessfully");
       resp.status(200).json(response);
    }
    catch{err}{
     console.log(err);
     resp.status(500).json({error:"internal server error"});
    }
    
})

router.put('/:id',async(req,resp)=>{

    try{
        const personId=req.params.id;
        const updatePersonData=req.body;

        const response=await person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,  //return updated document
            runValidators:true, //run mongoose validation
        })

        if(!response)
        {
            return resp.status(404).json({error:'person not found'});
        }

        console.log('perosn data updated');
        resp.status(200).json(response);
            

    }
    catch(err){
      console.log(err);
     resp.status(500).json({error:"internal server error"});
    }
})

router.delete('/:id',async(req,res)=>{

    try{
        const personId=req.params.id;
      const response=await person.findByIdAndDelete(personId);

      if(!response)
        {
            return res.status(404).json({error:'person not found'});
        }

         console.log('perosn data deleted');
        res.status(200).json({message: 'person deleted sucessfully'});
            

    }
    catch(err)
    {
       console.log(err);
     res.status(500).json({error:"internal server error"});
    }
})

module.exports=router;