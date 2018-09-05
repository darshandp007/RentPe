var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/menu', function(req, res, next) {
  res.render('menu');
});
router.get('/photo', function(req, res, next) {
  res.render('photo');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/link', function(req, res, next) {
  res.render('link');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

//Product Photos
router.get('/jewellerys', function(req, res, next) {
  res.render('jewellerys');
});
router.get('/vahicles', function(req, res, next) {
  res.render('vahicles');
});
router.get('/home_appliances', function(req, res, next) {
  res.render('home_appliances');
});
router.get('/electronics', function(req, res, next) {
  res.render('electronics');
});
router.get('/farnitures', function(req, res, next) {
  res.render('farnitures');
});
router.get('/clothes', function(req, res, next) {
  res.render('clothes');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/welcome', function(req, res, next) {
  res.render('welcome');
});
module.exports = router;
