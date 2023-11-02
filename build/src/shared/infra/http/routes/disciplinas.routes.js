"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disciplinasRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var HandleDisciplinaController_1 = require("../../../../modules/estrutura/services/HandleDisciplinaService/HandleDisciplinaController");
var ensureAdmin_1 = require("../middlewares/ensureAdmin");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var disciplinasRoutes = (0, express_1.Router)();
exports.disciplinasRoutes = disciplinasRoutes;
var upload = (0, multer_1.default)({ dest: "./tmp" });
var handleDisciplinaController = new HandleDisciplinaController_1.HandleDisciplinaController();
disciplinasRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleDisciplinaController.create);
disciplinasRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, handleDisciplinaController.read);
disciplinasRoutes.get("/:codigo", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleDisciplinaController.readByCodigo);
// disciplinasRoutes.get(
//   "/professor/:siape/ano/:ano/semestre/:semestre",
//   ensureAuthenticated,
//   handleDisciplinaController.readBySiapeEAnoESemestre
// );
disciplinasRoutes.patch("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleDisciplinaController.update);
disciplinasRoutes.delete("/:codigo", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleDisciplinaController.delete);
disciplinasRoutes.post("/import", upload.single("file"), ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, handleDisciplinaController.import);
