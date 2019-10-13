const UserModel = require("./../database/models/user_ model");

function loginForm(req, res) {
  res.render("auth/login");

}

function loginVerify(req, res) {

}

function make(req, res) {
  res.render("auth/make");

}

function logout(req, res) {
  req.session.user = "";
  res.redirect("/");


  // req.session.destroy(() => {
  //   res.redirect("/");
  // })

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
  create,
  logout

}