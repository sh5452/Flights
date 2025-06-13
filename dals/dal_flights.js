const knex=require('../db/knex')

async function createFlightsTableIfNotExist(){
    const tabaleExist=await knex.schema.hasTable('flights');
    if(!tabaleExist){
        await knex.schema.createTable('flights', (table)=>{
            table.increments('id').primary();
            table.integer('airline_id').unsigned().references('id').inTable('airlines');
            table.integer('origin_country_id').unsigned().references('id').inTable('countries');
            table.integer('destination_country_id').unsigned().references('id').inTable('countries');
            table.timestamp('departure_time')
            table.timestamp('landing_time')
            table.integer('remaining_tickets')


        })
        console.log('טבלת flights נוצרה בהצלחה');
        
    }
}