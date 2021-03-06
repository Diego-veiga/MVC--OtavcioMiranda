exports.middleware = (req, resp, next)=>{
   
    next()
}
exports.checkCsrfError = (err, req, resp, next)=>{
    if(err && err.code === 'EBADCSRFTOKEN'){
        return resp.render('404')
    }
}


exports.csrfMiddleware = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken()
    next()
}