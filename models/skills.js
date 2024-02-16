const skills = [
  { id: 1, skill: "Frontend Web Development" },
  { id: 2, skill: "Backend Developer" },
  { id: 3, skill: "Full StackmDeveloper" },
  { id: 4, skill: "JavaScript" },
  { id: 5, skill: "HTML" },
  { id: 6, skill: "CSS" },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne,
};

function getOne(id) {
  const skill = skills.find((t) => t.id === parseInt(id));
  return skill;
}

function getAll() {
  return skills;
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the skill object
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

function updateOne(id, updatedSkill) {
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  if (idx !== -1) {
    skills[idx] = updatedSkill;
    return true; // Return true to indicate that the skill was updated successfully
  }
  return false; // Return false if the skill with the given id was not found
}
