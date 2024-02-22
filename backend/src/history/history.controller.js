const historyService = require("./history.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const today = new Date().toJSON().slice(0, 10);

function historyExists(req, res, next) {
  console.log("history fires");
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
  for (let [key, value] of Object.entries(data)) {
    if (key !== "track_physical_activity") {
      if (value < 1 || value > 10) {
        next({
          status: 400,
          message: `Invalid input. Input must be between 1 and 10.`,
        });
      }
    }
  }
  return next();
}

function physicalActivityIsValid(req, res, next) {
  const { data = {} } = req.body;
  const physicalActivity = data.track_physical_activity;
  if (physicalActivity > 90 || physicalActivity < 1) {
    next({
      status: 400,
      message: `Invalid input. Input must be between 1 and 90.`,
    });
  }
  return next();
}

async function historyExists2(req, res, next) {
  const history = await historyService.read2(req.params.user_id);
  console.log("history2 fires");
  if (history) {
    res.locals.history = history;
    return next();
  }
  next({ status: 404, message: `History cannot be found.` });
}

function hasData(req, res, next) {
  const { data = {} } = req.body;
  if (!data) {
    return next({
      status: 400,
      message: `Request body must have data.`,
    });
  }
  next();
}

function list(req, res, next) {
  console.log("list is firing");
  historyService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function read(req, res) {
  console.log("wrong read is firing");
  const { history: data } = res.locals;
  res.json({ data });
}

async function read2(req, res) {
  let newHistory = {
    user_id: req.params.user_id,
  };
  console.log("this is working", newHistory.user_id);
  let data = await historyService.read3(newHistory.user_id);
  console.log("data2 field: ", data);
  res.json({ data });
}

async function create(req, res) {
  let newHistory = {
    ...req.body.data,
    user_id: req.params.user_id,
    track_date: today,
  };
  let data = await historyService.create(newHistory);
  res.status(201).json({ data });
}

const properties = [
  "track_physical_activity",
  "track_sleep_duration",
  "track_sleep_quality",
  "track_stress_level",
];
async function update(req, res) {
  const { user_id } = req.params;
  const { track_activity_id } = res.locals.history;
  const updatedHistory = {
    ...req.body.data,
    track_activity_id: track_activity_id,
    user_id: user_id,
  };
  const data = await historyService.update(updatedHistory);
  res.json({ data });
}
const hasRequiredProperties = hasProperties(properties);

async function historyExists3(req, res, next) {
  const { user_id } = req.params;
  const history = await historyService.read2(user_id);

  if (history) {
    res.locals.history = history;
    return next();
  }
  next({
    status: 404,
    message: `History not found '${user_id}'.`,
  });
}
module.exports = {
  list,
  read: [asyncErrorBoundary(historyExists), read],
  read2: [asyncErrorBoundary(historyExists2), read2],
  update: [
    asyncErrorBoundary(historyExists3),
    hasRequiredProperties,
    asyncErrorBoundary(update),
  ],
  create: [
    hasData,
    hasRequiredProperties,
    inputIsValid,
    physicalActivityIsValid,
    asyncErrorBoundary(create),
  ],
};
