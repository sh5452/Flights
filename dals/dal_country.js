const knex=require('../db/knex')

async function createCountryTableIfNotExist(){
  const tabaleExist=await knex.schema.hasTable('country')
  if(!tabaleExist){
    knex.schema.createTable('country', (table)=>{
        table.increments('id').primary();
        table.varchar('name')
    })
  }  
}