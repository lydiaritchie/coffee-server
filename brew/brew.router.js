/**
 * Defines the router for teapot resources.
 * 
 * @type {Router}
 */

const router = require("express").Router();
const notFound = require("../errors/notFound");
const controller = require("./brew.controller");

router.route("/").post(controller.brew).all(notFound);

module.exports = router;