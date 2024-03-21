"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_routers_1 = require("./routes/user-routers");
var app = express();
app.use(express.json());
app.use('/users', user_routers_1.default);
app.use('/', user_routers_1.default);
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Servidor en funcionamiento en el puerto ".concat(PORT));
});
