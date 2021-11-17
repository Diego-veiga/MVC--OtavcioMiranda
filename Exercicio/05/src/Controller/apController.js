const apModel = require('../model/apModel')

 const index = (req, resp, next)=>{
    console.log('chegeui aqui')
    let{dados}=  apModel.find()
   if(typeof dados ==='undefined'){
       dados =''
   }
   

    resp.render('index',{
        ap:undefined      
    })
    
     
 }


 module.exports ={
     index
 }