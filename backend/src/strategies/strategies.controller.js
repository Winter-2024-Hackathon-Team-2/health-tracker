const service = require("./strategies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listByStrategyType(req, res, next) {
  const strategyType = req.params.strategyType;
  if (strategyType) {
    const data = await service.listByStrategyType(strategyType);
    res.json({ data });
  }
  return next({status: 404, message: "No coping strategies found that match."})
}

async function search(req, res, next) {
  const strategy = req.query.strategy;
  if (strategy) {
    const data = await service.search(strategy);
    res.json({ data });
  } else if (!strategy){
    return next();
  }
    return next({status: 404, message: "No coping strategies found that match your search."})
}

async function list(req, res) {
  const data = await service.list();
  res.json({ data });
}

module.exports = {
  listByStrategyType: [asyncErrorBoundary(listByStrategyType)],
  search: [asyncErrorBoundary(search), asyncErrorBoundary(list)],
  list
};
