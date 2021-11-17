 const mongoose = require('mongoose')
 const validator = require('validator')
 const bcrypt = require('bcryptjs')


 const loginSchema = mongoose.Schema({
     nome:{type:String, required:true},
     email:{type: String, required:true},
     password:{type: String, required:true}
 })


 const loginModel = mongoose.model('Login', loginSchema)

 class Login {
    constructor(body){
        this.body = body,
        this.errors =[],
        this.user = null
     
    }


    async register(){
       this.valid()
       if(this.errors.length > 0) return

       await this.userExist()

       if(this.errors.length > 0) return

    
        const salt = bcrypt.genSaltSync()
        this.body.password = bcrypt.hashSync(this.body.password, salt)
        this.user = await loginModel.create(this.body)
      
    }

    async login(){
        this.validLogin()
        if(this.errors.length>0) return

        this.user = await loginModel.findOne({email: this.body.email})

        if(!this.user){
           this.errors.push('usuario ou senha não Inválidos')
           return
        }
        if(!bcrypt.compareSync(this.body.password, this.user.password)){
         this.errors.push('usuario ou senha não Inválidos')
         this.user = null
         return
        }

    }

    async userExist(){
       const user= await loginModel.findOne({email: this.body.email})
       if(user) this.errors.push('Usuário ja existe')
    }

    valid(){
     this.cleanUp()
     console.log(this.body)

     if(!validator.isEmail(this.body.email)){
       this.errors.push('Email invalido')
     } 
     if(this.body.password.length < 3 || this.body.password.length >=50){
        this.errors.push('senha Invalida: a senha deve conter entre 3 e 50 caracteres')
     }
     if(this.body.nome.length <3 || this.body.nome.length>20){
      this.errors.push('Nome inválido: o nome deve possuir entre 3  e 20 caracteres')
     }
    }
    validLogin(){
     this.cleanUp()
     console.log(this.body)

     if(!validator.isEmail(this.body.email)){
       this.errors.push('Email invalido')
     } 
     if(this.body.password.length < 3 || this.body.password.length >=50){
        this.errors.push('senha Invalida: a senha deve conter entre 3 e 50 caracteres')
     }
    
    }

    cleanUp(){
      for (const key in this.body){
        if ( typeof this.body[key] !=='string')
        this.body[key] =''
     }
     this.body ={
        nome: this.body.nome,
        email: this.body.email,
        password: this.body.password
      }
    }
    
    
}

module.exports = Login