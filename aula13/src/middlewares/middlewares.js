module.exports= (req, resp, next)=>{
    console.log(`Digitou ${req.body.cliente}`)
    next()
}