const historyService = require("./history.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function historyExists(req, res, next) {
  historyService
    .read(req.params.track_activity_id)
    .then((history) => {
      if (history) {
        res.locals.history = history;
        return next();
      }
      next({ status: 404, message: `History cannot be found.` });
    })
    .catch(next);
}

function list(req, res, next) {
  historyService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

async function historyExists2(req, res, next) {
  const history = await historyService.read2(req.params.user_id);
  if (history) {
    res.locals.history = history;
    return next();
  }
  next({ status: 404, message: `History cannot be found.` });
}

function read(req, res) {
  const { history: data } = res.locals;
  res.json({ data });
}
function hasData(req, res, next) {
  const data = req.body;
  if (!data) {
    return next({
      status: 400,
      message: `Request body must have data.`,
    });
  }
  next();
}

async function create(req, res) {
  let data = await historyService.create(req.body.data);
  console.log(data);
  res.status(201).json({ data });
}
module.exports = {
  list,
  read: [asyncErrorBoundary(historyExists), read],
  read2: [asyncErrorBoundary(historyExists2), read],
  create: [hasData, asyncErrorBoundary(create)],
};
