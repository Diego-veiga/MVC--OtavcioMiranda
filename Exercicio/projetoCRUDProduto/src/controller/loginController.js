const  Login = require('../model/loginModel')
  exports.index =(req, resp)=>{
    if(req.session.user) return resp.render('Logado')
    resp.render('login')

}
exports.register = async (req, resp)=>{
   
    try {
       const login = new Login(req.body)
       await login.register()
       console.log(login.errors)
       if(login.errors.length > 0){
           req.flash('erros', login.errors)
           req.session.save(function(){
               resp.redirect('index')
              
           })
            return
       }

       req.flash('success', 'usuario cadastrado com sucesso')
       req.session.save(function(){
           resp.redirect('index')
       }) 
        
    } catch (error) {
        console.log(error)
        resp.render('404')
    }
}


exports.login = async (req, res, next)=>{
    try{
        const login = new Login(req.body)
        await login.login()
        
        if(login.errors.length>0){
            req.flash('erros', login.errors)
            req.session.save(function(){
                res.redirect('index')
            })
            return
        }
        req.session.user = login.user
        req.flash('success', 'Usuario logado com sucesso')
        req.session.save(function(){
            return res.redirect('index')
         })
    }catch(err){
        console.log(err)
        res.redirect('404')
    }
}

exports.logout = async (req, res, next)=>{

    req.session.destroy()
    res.redirect('index')
}