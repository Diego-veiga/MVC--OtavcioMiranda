 const mongoose = require('mongoose')

 const produtoSchema = mongoose.Schema({
     nome:{type:String, required:true},
     preco:{type:Number, required:true},
     quantidadeEstoque:{type:Number, required:true}
 })

 const produtoModel = mongoose.model('produto', produtoSchema)

 class Produto{
     constructor(body){
         this.body = body,
         this.erros=[]
         this.produto= null
     }

      async register(){
          this.valida()
          if(this.erros.length>0) return
          await this.produtoExist()
          if(this.erros.length>0) return

        return  this.produto= await produtoModel.create(this.body)
      }
     static async searchProduct(id){
         const produto = await  produtoModel.findById(id)
        return produto 
      }


      async edit(id){
          this.valida()
          console.log('cheguei')
          if(this.erros.length>0) return
          
          this.produto = await produtoModel.findOneAndUpdate(id, this.body, {new:true})
      }
      
       async produtoExist(){
            this.cleanUp()
            this.produto= await produtoModel.findOne({nome:this.body.nome})
            if(this.produto){
              this.erros.push('produto ja cadastrado')
            }
        }

        static async todosProdutos(){
          const produtos= await produtoModel.find().sort({nome: -1})
           return produtos
        }

     valida(){
         this.cleanUp()
         if(this.body.nome.length <1 || this.body.nome.length >25){
             this.erros.push(' o produto deve ter um nome entre 1 e 25 caracteres')
         }
         if(this.body.preco <=0){
             this.erros.push('O produto necessita ter um preço acima de 0')
         }

         
        
     }

     cleanUp(){
          this.body={
              nome: this.body.nome,
              preco: Number(this.body.preco),
              quantidadeEstoque: Number(this.body.quantidadeEstoque),
          }
     }
 }

 module.exports = Produto