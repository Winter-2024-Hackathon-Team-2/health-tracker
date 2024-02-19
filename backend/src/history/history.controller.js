const historyService = require("./history.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");

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

function inputIsValid(req, res, next) {
  const { data = {} } = req.body;
  console.log(data)
  for (let input of Object.keys(data)) {
    if (input !== "track_physical_activity") {
      if (data.input < 1 || data.input > 10) {
        next({
          status: 400,
          message: `Invalid input. Input must be between 1 and 10.`,
        });
      }
    }
  };
  return next();
}

function physicalActivityIsValid(req, res, next) {
  const { data = {} } = req.body;
  const physicalActivity = data.track_physical_activity;
  if (physicalActivity > 90 || physicalActivity < 1){
    next({status:400, message:`Invalid input. Input must be between 1 and 90.`})
  }
  return next();
}

async function historyExists2(req, res, next) {
  const history = await historyService.read2(req.params.user_id);
  if (history) {
    res.locals.history = history;
    return next();
  }
  next({ status: 404, message: `History cannot be found.` });
}

function hasData(req, res, next) {
  const {data = {} } = req.body;
  if (!data) {
    return next({
      status: 400,
      message: `Request body must have data.`,
    });
  }
  next();
}

function list(req, res, next) {
  historyService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function read(req, res) {
  const { history: data } = res.locals;
  res.json({ data });
}

async function create(req, res) {
  let newHistory = {
    ...req.body.data, user_id: req.params.user_id
  }
  let data = await historyService.create(newHistory);
  res.status(201).json({ data });
}

const properties = [
  "track_physical_activity",
  "track_sleep_duration",
  "track_sleep_quality",
  "track_stress_level",
];

const hasRequiredProperties = hasProperties(properties);

module.exports = {
  list,
  read: [asyncErrorBoundary(historyExists), read],
  read2: [asyncErrorBoundary(historyExists2), read],
  create: [
    hasData,
    hasRequiredProperties,
    inputIsValid,
    physicalActivityIsValid,
    asyncErrorBoundary(create),
  ],
};
