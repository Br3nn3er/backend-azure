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
exports.CenarioFilaTurmaRepository = void 0;
var typeorm_1 = require("../../../../../shared/infra/typeorm");
var CenarioFilaTurma_1 = require("../entities/CenarioFilaTurma");
var CenarioFilaTurmaRepository = /** @class */ (function () {
    function CenarioFilaTurmaRepository() {
        this.repository = typeorm_1.dataSource.getRepository(CenarioFilaTurma_1.CenarioFilaTurma);
    }
    CenarioFilaTurmaRepository.prototype.create = function (_a) {
        var num_cenario = _a.num_cenario, id_turma = _a.id_turma, id_fila = _a.id_fila, status = _a.status, prioridade = _a.prioridade, posicao = _a.posicao;
        return __awaiter(this, void 0, void 0, function () {
            var cenarioFila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cenarioFila = this.repository.create({
                            num_cenario: num_cenario,
                            id_turma: id_turma,
                            id_fila: id_fila,
                            status: status,
                            prioridade: prioridade,
                            posicao: posicao,
                        });
                        return [4 /*yield*/, this.repository.save(cenarioFila)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, cenarioFila];
                }
            });
        });
    };
    CenarioFilaTurmaRepository.prototype.listCenarios = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.repository
                        .createQueryBuilder("cenario_fila_turma")
                        .orderBy("num_cenario")
                        .getMany()];
            });
        });
    };
    CenarioFilaTurmaRepository.prototype.queryByCenarioETurmaEFila = function (num_cenario, id_turma, id_fila) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.repository.findOne({
                        where: { num_cenario: num_cenario, id_turma: id_turma, id_fila: id_fila },
                    })];
            });
        });
    };
    CenarioFilaTurmaRepository.prototype.updateByCenarioETurmaEFila = function (_a) {
        var num_cenario = _a.num_cenario, id_turma = _a.id_turma, id_fila = _a.id_fila, status = _a.status, prioridade = _a.prioridade, posicao = _a.posicao;
        return __awaiter(this, void 0, void 0, function () {
            var cenarioFilaToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { num_cenario: num_cenario, id_turma: id_turma, id_fila: id_fila },
                        })];
                    case 1:
                        cenarioFilaToUpdate = _b.sent();
                        cenarioFilaToUpdate.status = status || cenarioFilaToUpdate.status;
                        cenarioFilaToUpdate.prioridade =
                            prioridade || cenarioFilaToUpdate.prioridade;
                        cenarioFilaToUpdate.posicao = posicao || cenarioFilaToUpdate.posicao;
                        return [4 /*yield*/, this.repository.save(cenarioFilaToUpdate)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, cenarioFilaToUpdate];
                }
            });
        });
    };
    CenarioFilaTurmaRepository.prototype.deleteByCenarioETurmaEFila = function (num_cenario, id_turma, id_fila) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder()
                            .delete()
                            .from(CenarioFilaTurma_1.CenarioFilaTurma)
                            .where("num_cenario = :num_cenario", { num_cenario: num_cenario })
                            .andWhere("id_turma = :id_turma", { id_turma: id_turma })
                            .andWhere("id_fila = :id_fila", { id_fila: id_fila })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CenarioFilaTurmaRepository;
}());
exports.CenarioFilaTurmaRepository = CenarioFilaTurmaRepository;
