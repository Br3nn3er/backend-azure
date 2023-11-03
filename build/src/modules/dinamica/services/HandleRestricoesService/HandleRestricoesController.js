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
exports.HandleRestricoesController = void 0;
var tsyringe_1 = require("tsyringe");
var HandleRestricoesService_1 = require("./HandleRestricoesService");
var HandleRestricoesController = /** @class */ (function () {
    function HandleRestricoesController() {
    }
    HandleRestricoesController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, user, handleRestricoesService, createdRestricoes, dia, letra;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = request.body, user = request.user;
                        handleRestricoesService = tsyringe_1.container.resolve(HandleRestricoesService_1.HandleRestricoesService);
                        if (!Array.isArray(body)) return [3 /*break*/, 2];
                        return [4 /*yield*/, handleRestricoesService.createMany(body.map(function (_a) {
                                var dia = _a.dia, letra = _a.letra;
                                return ({
                                    siape: user.siape,
                                    dia: dia,
                                    letra: letra,
                                });
                            }))];
                    case 1:
                        createdRestricoes = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        dia = body.dia, letra = body.letra;
                        return [4 /*yield*/, handleRestricoesService.create({
                                siape: user.siape,
                                dia: dia,
                                letra: letra,
                            })];
                    case 3:
                        createdRestricoes = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, response.status(201).json(createdRestricoes)];
                }
            });
        });
    };
    HandleRestricoesController.prototype.read = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, isAdmin, siape, handleRestricoesService, listRestricoes, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = request.user, isAdmin = _a.isAdmin, siape = _a.siape;
                        handleRestricoesService = tsyringe_1.container.resolve(HandleRestricoesService_1.HandleRestricoesService);
                        if (!isAdmin) return [3 /*break*/, 2];
                        return [4 /*yield*/, handleRestricoesService.read()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, handleRestricoesService.readBySiape(siape)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        listRestricoes = _b;
                        return [2 /*return*/, response.status(201).json(listRestricoes)];
                }
            });
        });
    };
    HandleRestricoesController.prototype.readBySiape = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var siape, handleRestricoesService, listRestricoes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siape = request.params.siape;
                        handleRestricoesService = tsyringe_1.container.resolve(HandleRestricoesService_1.HandleRestricoesService);
                        return [4 /*yield*/, handleRestricoesService.readBySiape(siape)];
                    case 1:
                        listRestricoes = _a.sent();
                        return [2 /*return*/, response.status(201).json(listRestricoes)];
                }
            });
        });
    };
    HandleRestricoesController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var siape, handleRestricoesService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siape = request.user.siape;
                        handleRestricoesService = tsyringe_1.container.resolve(HandleRestricoesService_1.HandleRestricoesService);
                        return [4 /*yield*/, handleRestricoesService.deleteBySiape(siape)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).json("Registro deletado com sucesso!")];
                }
            });
        });
    };
    HandleRestricoesController.prototype.import = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var file, handleRestricoesService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = request.file;
                        handleRestricoesService = tsyringe_1.container.resolve(HandleRestricoesService_1.HandleRestricoesService);
                        return [4 /*yield*/, handleRestricoesService.import(file)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(201).json("Importação realizada com sucesso!")];
                }
            });
        });
    };
    return HandleRestricoesController;
}());
exports.HandleRestricoesController = HandleRestricoesController;
