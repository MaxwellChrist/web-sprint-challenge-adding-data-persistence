const projects = [
  {
    "project_name": "bar","project_completed": false
  },
  {
    "project_name": "Do a hobby", "project_description": "steps to go fishing", "project_completed": false
  },
  {
    "project_name": "watch some hockey properly", "project_description": "NHL playoffs are on and I gotta watch the games in maximum comfort", "project_completed": false
  },
];

const resources = [
  {
    "resource_name": "foo"
  },
  {
    "resource_name": "zoo", "resource_description": "I go to zoo"
  },
  {
    "resource_name": "moo", "resource_description": "I moo at cow"
  },
  {
    "resource_name": "fuel"
  },
  {
    "resource_name": "worms", "resource_description": "I get worms at store"
  },
  {
    "resource_name": "fishing pole", "resource_description": "I get fishing pole at store"
  },
  {
    "resource_name": "chips"
  },
  {
    "resource_name": "beer", "resource_description": "heineken or corona"
  },
  {
    "resource_name": "jersey", "resource_description": "wear NHL jersey of team I'm rooting for"
  },
];

const tasks = [
  {
    "task_description": "baz", "task_completed": false, "project_id": 1
  },
  {
    "task_description": "taz", "task_description": "I find tazmanian devil", "task_completed": false, "project_id": 1
  },
  {
    "task_description": "pizazz", "task_description": "I possess pizzazz", "task_notes": "watch zoolander", "task_completed": false, "project_id": 1
  },
  {
    "task_description": "get to store", "task_notes": "walmart will do", "task_completed": false, "project_id": 2
  },
  {
    "task_description": "buy stuff", "task_description": "buy worms and fishing pole to go fishing", "task_completed": false, "project_id": 2
  },
  {
    "task_description": "fishing", "task_notes": "get the XLFES 9000", "task_notes": "This is not a real finshing pole", "task_completed": false, "project_id": 2
  },
  {
    "task_description": "get to store", "task_description": "buy chips and beer", "task_notes": "BBQ chips all the way", "task_completed": false, "project_id": 3
  },
  {
    "task_description": "put on jersey", "task_notes": "Landeskoog jersey when watching Colorado & Aho jersey when watching Carolina", "task_completed": false, "project_id": 3
  },
  {
    "task_description": "watch some hockey", "task_notes": "Rooting for Colorado or Carolina", "task_completed": false, "project_id": 3
  },
];

const project_resources = [
  {
    "project_id": 1,"resource_id": 1
  },
  {
    "project_id": 1,"resource_id": 2
  },
  {
    "project_id": 1,"resource_id": 3
  },
  {
    "project_id": 2,"resource_id": 1
  },
  {
    "project_id": 2,"resource_id": 2
  },
  {
    "project_id": 2,"resource_id": 3
  },
  {
    "project_id": 3,"resource_id": 1
  },
  {
    "project_id": 3,"resource_id": 2
  },
  {
    "project_id": 3,"resource_id": 3
  },
];

exports.seed = async function(knex) {
  await knex("projects").insert(projects)
  await knex("resources").insert(resources)
  await knex("tasks").insert(tasks)
  await knex("project_resources").insert(project_resources)
};