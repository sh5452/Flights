const knex=require('../db/knex')

async function createUserTabaleIfNotExist(){
    const tableExist=await knex.schema.hasTable('users')
    if(!tableExist){
        knex.schema.createTable('users',(table)=>{
           table.increments('id').primary()
           table.varchar('username')
           table.varchar('password')
           table.varchar('email')


           
        } )
    }
}