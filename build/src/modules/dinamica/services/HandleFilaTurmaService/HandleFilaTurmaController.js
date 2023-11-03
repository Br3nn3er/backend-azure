"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleFilaTurmaController = void 0;
var tsyringe_1 = require("tsyringe");
var HandleFilaTurmaService_1 = require("./HandleFilaTurmaService");
var HandleFilaTurmaController = /** @class */ (function () {
    function HandleFilaTurmaController() {
    }
    HandleFilaTurmaController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siape, id_turma, codigo_disc, turma, pos, prioridade, qte_ministrada, qte_maximo, status, ch, id, periodo_preferencial, handleFilaTurmaRepository, fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, siape = _a.siape, id_turma = _a.id_turma, codigo_disc = _a.codigo_disc, turma = _a.turma, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, status = _a.status, ch = _a.ch, id = _a.id, periodo_preferencial = _a.periodo_preferencial;
                        handleFilaTurmaRepository = tsyringe_1.container.resolve(HandleFilaTurmaService_1.HandleFilaTurmaService);
                        return [4 /*yield*/, handleFilaTurmaRepository.create({
                                siape: siape,
                                id_turma: id_turma,
                                codigo_disc: codigo_disc,
                                turma: turma,
                                pos: pos,
                                prioridade: prioridade,
                                qte_ministrada: qte_ministrada,
                                qte_maximo: qte_maximo,
                                status: status,
                                ch: ch,
                                id: id,
                                periodo_preferencial: periodo_preferencial,
                            })];
                    case 1:
                        fila = _b.sent();
                        return [2 /*return*/, response.status(201).json(fila)];
                }
            });
        });
    };
    HandleFilaTurmaController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var handleFilaTurmaRepository, filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handleFilaTurmaRepository = tsyringe_1.container.resolve(HandleFilaTurmaService_1.HandleFilaTurmaService);
                        return [4 /*yield*/, handleFilaTurmaRepository.read()];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, response.status(201).json(filas)];
                }
            });
        });
    };
    HandleFilaTurmaController.prototype.readByProfessor = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var siape, handleFilaTurmaRepository, filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siape = request.params.siape;
                        handleFilaTurmaRepository = tsyringe_1.container.resolve(HandleFilaTurmaService_1.HandleFilaTurmaService);
                        return [4 /*yield*/, handleFilaTurmaRepository.readByProfessor(siape)];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, response.status(200).json(filas)];
                }
            });
        });
    };
    HandleFilaTurmaController.prototype.readByTurma = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id_turma, handleFilaTurmaRepository, filas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_turma = request.params.id_turma;
                        handleFilaTurmaRepository = tsyringe_1.container.resolve(HandleFilaTurmaService_1.HandleFilaTurmaService);
                        return [4 /*yield*/, handleFilaTurmaRepository.readByTurma(parseInt(id_turma))];
                    case 1:
                        filas = _a.sent();
                        return [2 /*return*/, response.status(200).json(filas)];
                }
            });
        });
    };
    HandleFilaTurmaController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siape, id_turma, codigo_disc, turma, pos, prioridade, qte_ministrada, qte_maximo, status, ch, id, periodo_preferencial, handleFilaTurmaRepository, fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, siape = _a.siape, id_turma = _a.id_turma, codigo_disc = _a.codigo_disc, turma = _a.turma, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, status = _a.status, ch = _a.ch, id = _a.id, periodo_preferencial = _a.periodo_preferencial;
                        handleFilaTurmaRepository = tsyringe_1.container.resolve(HandleFilaTurmaService_1.HandleFilaTurmaService);
                        return [4 /*yield*/, handleFilaTurmaRepository.update({
                                siape: siape,
                                id_turma: id_turma,
                                codigo_disc: codigo_disc,
                                turma: turma,
                                pos: pos,
                                prioridade: prioridade,
                                qte_ministrada: qte_ministrada,
                                qte_maximo: qte_maximo,
                                status: status,
                                ch: ch,
                                id: id,
                                periodo_preferencial: periodo_preferencial,
                            })];
                    case 1:
                        fila = _b.sent();
                        return [2 /*return*/, response.status(201).json(fila)];
                }
            });
        });
    };
    HandleFilaTurmaController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, handleFilaTurmaRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.body.id;
                        handleFilaTurmaRepository = tsyringe_1.container.resolve(HandleFilaTurmaService_1.HandleFilaTurmaService);
                        return [4 /*yield*/, handleFilaTurmaRepository.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).json("Registro deletado com sucesso!")];
                }
            });
        });
    };
    return HandleFilaTurmaController;
}());
exports.HandleFilaTurmaController = HandleFilaTurmaController;
