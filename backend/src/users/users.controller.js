const userService = require("./users.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function userExists(req, res, next) {
  const user = await userService.read(req.params.user_id);
  if (user) {
    res.locals.user = user;
    return next();
  }
  next({ status: 404, message: "User cannot be found." });
}

async function update(req, res) {
  const updatedUser = {
    ...res.locals.user,
    ...req.body.data,
    user_id: res.locals.user.user_id,
  };
  const data = await userService.update(updatedUser);

  console.log(data);
  res.json({ data });
}

async function read(req, res) {
  res.json({ data: res.locals.user });
}

async function destroy(req, res) {
  const { user_id } = res.locals.user;
  await userService.destroy(user_id);
  res.sendStatus(204);
}

function list(req, res, next) {
  userService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
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
  let data = await userService.create(req.body.data);
  console.log(data);
  res.status(201).json({ data });
}

async function login(req, res, next) {
  const { user_id, user_password } = req.body;

  try {
    const user = await userService.login(user_id, user_password);

    if (user) {
      res.json({ data: user });
    } else {
      next({ status: 401, message: "Invalid username or password" });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list,
  read: [asyncErrorBoundary(userExists), asyncErrorBoundary(read)],
  update: [asyncErrorBoundary(userExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(userExists), asyncErrorBoundary(destroy)],
  create: [hasData, asyncErrorBoundary(create)],
  login: [hasData, asyncErrorBoundary(login)],
};
