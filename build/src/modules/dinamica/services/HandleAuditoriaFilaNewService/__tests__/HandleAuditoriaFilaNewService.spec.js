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
var AppError_1 = require("../../../../../shared/errors/AppError");
var AuditoriaFilaNewRepositoryTestMock_1 = require("../../../infra/typeorm/repositories/mocks/AuditoriaFilaNewRepositoryTestMock");
var HandleAuditoriaFilaNewService_1 = require("../HandleAuditoriaFilaNewService");
describe("Handle CRUD operations related to auditoria_fila_turma_new", function () {
    var auditoriaFilaNewRepositoryTest;
    var handleAuditoriaFilaNewService;
    beforeEach(function () {
        auditoriaFilaNewRepositoryTest = new AuditoriaFilaNewRepositoryTestMock_1.AuditoriaFilaNewRepositoryTestMock();
        handleAuditoriaFilaNewService = new HandleAuditoriaFilaNewService_1.HandleAuditoriaFilaNewService(auditoriaFilaNewRepositoryTest);
    });
    it("Should be able to create a new auditoria_fila_turma_new record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var auditoriaNew;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleAuditoriaFilaNewService.create({
                        id_turma: 1,
                        id_fila: 52,
                        prioridade_old: 2,
                        prioridade_new: 3,
                        stamp: new Date(),
                    })];
                case 1:
                    auditoriaNew = _a.sent();
                    expect(auditoriaNew.id_turma).toBe(1);
                    expect(auditoriaNew.prioridade_new).toBe(3);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all auditoria_fila_turma_new records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var auditorias;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleAuditoriaFilaNewService.create({
                        id_turma: 1,
                        id_fila: 52,
                        prioridade_old: 2,
                        prioridade_new: 3,
                        stamp: new Date(),
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleAuditoriaFilaNewService.create({
                            id_turma: 2,
                            id_fila: 55,
                            prioridade_old: 1,
                            prioridade_new: 2,
                            stamp: new Date(),
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, handleAuditoriaFilaNewService.create({
                            id_turma: 3,
                            id_fila: 53,
                            prioridade_old: 6,
                            prioridade_new: 3,
                            stamp: new Date(),
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, handleAuditoriaFilaNewService.read()];
                case 4:
                    auditorias = _a.sent();
                    expect(auditorias).toHaveLength(3);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to update an existing auditoria_fila_turma_new record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var auditoriaToUpdate, auditoriaResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleAuditoriaFilaNewService.create({
                        id_turma: 1,
                        id_fila: 52,
                        prioridade_old: 2,
                        prioridade_new: 3,
                        stamp: new Date(),
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, auditoriaFilaNewRepositoryTest.queryByIdTurmaIdFila(1, 52)];
                case 2:
                    auditoriaToUpdate = _a.sent();
                    return [4 /*yield*/, handleAuditoriaFilaNewService.update({
                            id: auditoriaToUpdate.id,
                            id_fila: 55,
                            prioridade_new: 1,
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, auditoriaFilaNewRepositoryTest.queryById(auditoriaToUpdate.id)];
                case 4:
                    auditoriaResult = _a.sent();
                    expect(auditoriaResult.id_fila).toBe(55);
                    expect(auditoriaResult.prioridade_new).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should not be able to update an unexisting auditoria_fila_turma_new record", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleAuditoriaFilaNewService.update({
                                        id: "39",
                                        id_fila: 55,
                                        prioridade_new: 1,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }).rejects.toBeInstanceOf(AppError_1.AppError)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete a auditoria_fila_turma_new record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var auditoriaToDelete, auditoriaResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleAuditoriaFilaNewService.create({
                        id_turma: 1,
                        id_fila: 52,
                        prioridade_old: 2,
                        prioridade_new: 3,
                        stamp: new Date(),
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, auditoriaFilaNewRepositoryTest.queryByIdTurmaIdFila(1, 52)];
                case 2:
                    auditoriaToDelete = _a.sent();
                    return [4 /*yield*/, handleAuditoriaFilaNewService.delete(auditoriaToDelete.id)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, auditoriaFilaNewRepositoryTest.queryById(auditoriaToDelete.id)];
                case 4:
                    auditoriaResult = _a.sent();
                    expect(auditoriaResult).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
