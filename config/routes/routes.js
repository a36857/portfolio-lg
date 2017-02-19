const ctrProject = require('../../app/controllers/ProjectController');
const ctrLog     = require('../../app/controllers/LogController');
const ctrHome    = require('../../app/controllers/HomeController');
const ctrDown    = require('../../app/controllers/DownloadController');

const express = require('express');

const router = express.Router();


router.route('/projects')
  .get(ctrProject.list)
  .post(ctrProject.create);
router.route('/projects/:id').get(ctrProject.show);

router.get('/logs',ctrLog.list)

router.get('/',ctrHome.get);

router.get('/download',ctrDown.get);

module.exports = router;
