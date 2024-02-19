const service = require("./strategies.service");

async function listByStrategyType(req, res, next) {
  const strategyType = req.params.strategyType;
  if (strategyType){
    const data = await service.list(strategyType);
    res.json({ data });
  }
}

async function list(req, res, next) {
  const data = await service.list(strategyType);
  res.json({ data });
}

async function search(req, res, next) {
    const strategy = req.query.strategy;
  if (strategy) {
    const data = await service.search(strategy);
    res.json({ data });
  }
  return next({ status: 404, message: `No strategies found.` });
}

module.exports = {
  list,
  search
};
