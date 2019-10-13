const UserModel = require("./../database/models/user_ model");

function loginForm(req, res) {

}

function loginVerify(req, res) {

}

function make(req, res) {
  res.render("auth/make");

}

async function create(req, res) {
  //res.send(req.body);
  const user = await UserModel.create(req.body);

  console.log("user", user);
  req.session.user = user;
  res.redirect("/dashboard");
}


module.exports = {
  loginForm,
  loginVerify,
  make,
  create

}