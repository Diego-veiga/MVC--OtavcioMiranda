exports.middleware = (req, resp, next)=>{
   
    next()
}

exports.cadProduto =(req, res, next)=>{
    if(!req.session.user){
        req.session.save(()=>{
            res.redirect('/login/index')
        
        })
        return
    }
    next()
}
exports.middlewareGlobal = (req, resp, next)=>{
    resp.locals.erros = req.flash('erros')
    resp.locals.success = req.flash('success')
    resp.locals.user = req.session.user

    next()
}
exports.checkCsrfError = (err, req, resp, next)=>{

    console.log(err)
    if(err){
        return resp.render('404')
    }
    next()
}


exports.csrfMiddleware = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken()
    next()
}