const model = require("../../models");


module.exports = {
  create(req, res) {
    console.log('creando portafolio project')
    model.PortfolioProject.create({
      name: req.body.name,
      projectType: req.body.projectType,
      linkSee: req.body.linkSee,
      linkCode: req.body.linkCode,
      userId: req.user.id,
      description: req.body.description,
      image: req.body.image
    })
      .then(() => {
        res.status(200);
      })
      .catch(err => console.log(err));
  },
  show(req, res) {
    console.log('mostrando item')
    model.PortfolioProject.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => res.status(400).json("Error: " + err));
  },
  myList(req, res) {
    model.PortfolioProject.findAll({
      where: {
        userId:req.user.id
      }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => res.status(400).json("Error: " + err));
  },
  list(req, res) {
    model.PortfolioProject.findAll({
      where: {
        userId:req.params.id
      }
    })
      .then(data => {
        if(data) res.send(data);
      })
      .catch(err => res.status(400).json("Error: " + err));
  },
  update(req, res) {   
    console.log('updateando proyecto')
    model.PortfolioProject.update({
      name: req.body.name,
      projectType: req.body.projectType,
      linkSee: req.body.linkSee,
      linkCode: req.body.linkCode,
      description: req.body.description,
      image: req.body.image
    }, {
      where: { id: req.params.id }
    })
      .then(() => {
        res.send({success:true})
      })
      .catch(err => res.status(400).json("Error: " + err));
  },
  delete(req, res) {
    model.PortfolioProject.destroy({
      where: { id: req.params.id }
    })
      .then(() => res.send({success:true}))
      .catch(err => res.status(400).json("Error: " + err));
  }
};
