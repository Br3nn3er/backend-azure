"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
require("reflect-metadata");
require("dotenv/config");
var typeorm_1 = require("../typeorm");
var PORT = process.env.PORT || 3333;
typeorm_1.dataSource.initialize().then(function () {
    var server = app_1.app.listen(PORT, function () {
        return console.log("Server is Running: ".concat(PORT, " ! \uD83C\uDFC6"));
    });
});
