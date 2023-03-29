exports.get404 = (request, response) => {
  const error = { title: "Error 404", message: "Page Not Found" };
  response.render("error", { pageTitle: error.title, path: "*", error });
};
