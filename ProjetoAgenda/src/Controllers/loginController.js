const Login = require('../model/loginModel')

exports.index= (req, resp) =>{
    if(req.session.user) return resp.render('login-logado')

     return resp.render('login')

}

exports.register = async (req, resp)=>{

   try {
    const login = new Login(req.body)
    await login.register()
    if(login.erros.length >0){
        console.log('entrei no if')
        req.flash('erros', login.erros)
        req.session.save(function(){
            return resp.redirect('index')
        })
        return
    }

    req.flash('sucess', 'Seu usuario foi criado com sucesso ')
    req.session.save(function(){
        console.log('entrei no session')
       return resp.redirect('index')
    })
   } catch (error) {
       console.log(error)
       return resp.render('404')
   }
       
}

exports.login = async (req, resp)=>{

   try {
    const login = new Login(req.body)
    await login.login()
    if(login.erros.length >0){
        req.flash('erros', login.erros)
        req.session.save(function(){
            return resp.redirect('index')
        })
        return
    }

    req.flash('sucess', 'usuario Logado com sucesso ')
    req.session.user = login.user
    req.session.save(function(){
       return resp.redirect('index')
    })
   } catch (error) {
       console.log(error)
       return resp.render('404')
   }
       
}

exports.logout = function(req, res){
    req.session.destroy()
    res.redirect('/')

}


