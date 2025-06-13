const knex=require('../db/knex')

async function createAirlineTableIfNotExist(){
    const tableExist=knex.schema.createTable('airline')
    if(!tableExist){
        knex.schema.createTable('airline', (table)=>{
            table.increment('id').primary()
            table.varchar('name')
            table.integer('countey_id').unsigned().references('countries')
            table.integer('user_id').unsigned().references('users')

        })
    }
}