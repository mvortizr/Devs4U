const model = require("../../models");

const getPayloadFromRequest = req => {
  const payload = {};
  const strings = [
    "name",
    "projectType",
    "linkCode",
    "linkSee",
    "description",
    "image"
  ];
  const numbers = ["userId"];

  strings.forEach(field => {
    payload[field] = req[field] || "";
  });

  numbers.forEach(field => {
    payload[field] = req[field] || 0;
  });

  return payload;
};

module.exports = {
  create(req, res) {
    model.PortfolioProject.create(getPayloadFromRequest(req))
      .then(() => {
        res.status(200);
      })
      .catch(err => res.status(400).json("Error: " + err));
  },
  show(req, res) {
    model.PortofolioProject.findAll({
      where: {
        id: req.project.id
      }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => res.status(400).json("Error: " + err));
  },
  update(req, res) {
    const { project } = req;

    model.PortfolioProject.update(getPayloadFromRequest(req), {
      where: { id: project.id }
    })
      .then(() => {
        res.status(200);
      })
      .catch(err => res.status(400).json("Error: " + err));
  },
  delete(req, res) {
    const { project } = req;

    model.PortfolioProject.destroy({
      where: { id: project.id }
    })
      .then(() => res.status(200))
      .catch(err => res.status(400).json("Error: " + err));
  }
};
