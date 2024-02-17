function list(copingType){
    return knex("strategies")
    .select("*")
    .where({"strategy_coping_type":copingType})
};

function search(copingType){
    return knex("strategies")
    .whereRaw()
}

module.exports = {
    list,
    search
}