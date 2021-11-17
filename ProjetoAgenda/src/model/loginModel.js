const mongoose = require('mongoose')
const validator =  require('validator')
const bcript = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
  email:{ type:String, required: true  },
  password:{type:String, required: true }
})

const loginModel = mongoose.model('login', LoginSchema)

class Login{
    constructor(body){
        this.body= body,
        this.erros =[],
        this.user = null
        
    }
    

    async login(){
        this.valida()
        if(this.erros.length>0)return

        this.user = await loginModel.findOne({email:this.body.email})
        if(!this.user){
            this.erros.push('usuario ou senha inválidos')
            return
        }
       
       
        if(!bcript.compareSync(this.body.password, this.user.password)){
            console.log('entrei aqui')
            this.erros.push('usuario ou senha inválidos')
            this.user = null
            return 
        }
    }
     async register(){
         this.valida()
         if(this.erros.length >0) return
           await this.userExiste()
         if(this.erros.length >0) return
                 
        const salt = bcript.genSaltSync()
        this.body.password = bcript.hashSync(this.body.password,salt)
        this.user = await loginModel.create(this.body)
         
     }

     async userExiste(){
         const user =  await loginModel.findOne({email:this.body.email})
         if(user){
             this.erros.push('Usuario ja existe')
         }
     }

    valida(){
        this.CleanUp()
        if(!validator.isEmail(this.body.email)){
            this.erros.push('Email invalido')
          
        }
        if(this.body.password.length < 3 || this.body.password.length >=50){
            this.erros.push('Senha Inválida')
           
        }


    }
    
    CleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key]=''
            }
        }
        this.body ={
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login