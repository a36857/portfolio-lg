const ctrProject = require('../../app/controllers/ProjectController');
const ctrHome    = require('../../app/controllers/HomeController');

const express = require('express');

const router = express.Router();


router.route('/projects')
  .get(ctrProject.list)
  .post(ctrProject.create);
router.route('/projects/:id').get(ctrProject.show);


router.get('/',ctrHome.get)


module.exports = router;
