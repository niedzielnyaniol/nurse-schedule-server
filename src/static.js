const router = require('express').Router();
const path = require('path');
const express = require('express');

router.get('/', (req, res) => {
  res.sendFile(path.join(path.join(__dirname, '/../layouts/app.html')));
});

router.use(express.static(path.join(__dirname, '/../assets')));
router.use(express.static(path.join(__dirname, '/../templates')));
router.use(express.static(path.join(__dirname, '/../directives-templates')));

module.exports = router;
