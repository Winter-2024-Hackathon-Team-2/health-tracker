function list(strategyType) {
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

module.exports = {
  list,
  search,
};
