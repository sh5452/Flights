const knex=require('../db/knex')

async function createCustomerTabaleIfNotExist(){
    const tableExist=await knex.schema.createTable('customers');
    if(!tableExist){
        knex.schema.createTable('customers', (table)=>{
        table.increments('id'),primary();
         table.varchar('first_name')
         table.varchar('last_name')
         table.varchar('address')
         table.varchar('phone_no')
         table.varchar('credit_card_no')
         table.integer('user_id').unsigned().referenced('id').inTable('users')

        })
    }
}