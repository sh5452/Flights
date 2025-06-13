const knex=require('../db/knex')

async function createTicketTableIfNotExist(){
    const tableExist=await knex.schema.createTable('tickets')
    if(!tableExist){
        knex.schema.createTable('tickets',(table)=>{
            table.increments('id'),primary()
            table.integer('flight_id').unsigned().references('flights')
            table.integer('customer_id').unsigned().references('customer')
        })
    }
}