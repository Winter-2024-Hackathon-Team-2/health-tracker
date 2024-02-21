const knex = require("../db/connection");

function listByStrategyType(strategyType) {
  return knex("strategies")
    .select("*")
    .where({ strategy_coping_type: strategyType });
}

function search(strategy) {
  return knex("strategies").whereRaw(
    "strategy_coping_type like ?",
    `%${strategy}%`
  );
}

function list(){
  return knex("strategies")
  .select("*")
  .orderBy('strategy_coping_type')
}

module.exports = {
  list,
  listByStrategyType,
  search,
};
