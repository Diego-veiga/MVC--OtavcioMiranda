exports.middleware = (req, resp, next)=>{
   
    next()
}

exports.middlewareGlobal = (req, resp, next)=>{
    resp.locals.erros = req.flash('erros')
    resp.locals.sucess = req.flash('sucess')
    resp.locals.user = req.session.user
   
    next()
}
exports.checkCsrfError = (err, req, resp, next)=>{
    if(err){
        return resp.render('404')
    }
    next()
}


exports.csrfMiddleware = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken()
    next()
}

exports.loginRequired = (req, res, next)=>{
   
     if(!req.session.user){
         req.flash('erros', 'Você precisa fazer login')
         req.session.save(() => res.redirect('/'))
         return
     }
     next()
}