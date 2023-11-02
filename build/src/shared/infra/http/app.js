"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var typeorm_1 = require("typeorm");
require("express-async-errors");
var swagger_json_1 = __importDefault(require("../../../swagger.json"));
var AppError_1 = require("../../errors/AppError");
var routes_1 = require("./routes");
require("../../container");
(0, typeorm_1.createConnection)();
var app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(routes_1.mainRouter);
app.use(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - ".concat(err.message),
    });
});
