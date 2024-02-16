const Skill = require("../models/skills");

function index(req, res) {
  const skills = Skill.getAll();
  console.log(skills);
  res.render("skills/index.ejs", { skills: skills, title: "New Skill" });
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render("skills/show.ejs", { skill, title: "New Skill" });
}

function newSkill(req, res) {
  res.render("skills/new.ejs", { title: "New Skill" });
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function update(req, res) {
  const { id } = req.params;
  const updatedData = req.body;

  Skill.updateOne(id, updatedData)
    .then(() => {
      res.redirect("/skills");
    })
    .catch((error) => {
      console.error("Error updating skill:", error);
      res.status(500).send("Error updating skill");
    });
}

function edit(req, res) {
  // Extract the skill ID from the request parameters
  const skillId = req.params.id;

  // Fetch the skill data based on the ID
  const skill = Skill.getOne(skillId);

  // Check if the skill exists
  if (!skill) {
    // If the skill is not found, render an error page or redirect to a different route
    return res.status(404).render("error", { message: "Skill not found" });
  }

  // Render the edit form template and pass the skill data to it
  res.render("skills/edit", { skill: skill });
}


module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  update,
  edit
};
