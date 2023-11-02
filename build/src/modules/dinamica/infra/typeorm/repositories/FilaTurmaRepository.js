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
        while (_) try {
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
exports.FilaTurmaRepository = void 0;
var typeorm_1 = require("typeorm");
var Curso_1 = require("../../../../estrutura/infra/typeorm/entities/Curso");
var Disciplina_1 = require("../../../../estrutura/infra/typeorm/entities/Disciplina");
var Professor_1 = require("../../../../estrutura/infra/typeorm/entities/Professor");
var FilaTurma_1 = require("../entities/FilaTurma");
var FilaTurmaRepository = /** @class */ (function () {
    function FilaTurmaRepository() {
        this.repository = (0, typeorm_1.getRepository)(FilaTurma_1.FilaTurma);
    }
    FilaTurmaRepository.prototype.create = function (_a) {
        var siape = _a.siape, id_turma = _a.id_turma, codigo_disc = _a.codigo_disc, turma = _a.turma, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, status = _a.status, ch = _a.ch, id = _a.id, periodo_preferencial = _a.periodo_preferencial;
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fila = this.repository.create({
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
                        });
                        return [4 /*yield*/, this.repository.save(fila)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, fila];
                }
            });
        });
    };
    FilaTurmaRepository.prototype.listFilas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filasTurma;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder("fila_turma")
                            .orderBy("id", "ASC")
                            .getMany()];
                    case 1:
                        filasTurma = _a.sent();
                        return [2 /*return*/, filasTurma];
                }
            });
        });
    };
    FilaTurmaRepository.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFinded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        filaFinded = _a.sent();
                        return [2 /*return*/, filaFinded];
                }
            });
        });
    };
    FilaTurmaRepository.prototype.queryByTurma = function (id_turma) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFinded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(FilaTurma_1.FilaTurma)
                            .createQueryBuilder("ft")
                            .select("nome")
                            .addSelect("ft.pos", "possicao")
                            .addSelect("ft.prioridade", "prioridade")
                            .addSelect("ft.qte_ministrada", "qte_ministrada")
                            .addSelect("ft.qte_maximo", "qte_maximo")
                            .leftJoin(Professor_1.Professor, "pf", "pf.siape = ft.siape")
                            .where("ft.id_turma = :id_turma", { id_turma: id_turma })
                            .orderBy("ft.prioridade", "DESC")
                            .getRawMany()];
                    case 1:
                        filaFinded = _a.sent();
                        return [2 /*return*/, filaFinded];
                }
            });
        });
    };
    FilaTurmaRepository.prototype.queryBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFinded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(FilaTurma_1.FilaTurma)
                            .createQueryBuilder("ft")
                            .select("dp.nome", "nome_diciplina")
                            .addSelect("ft.turma", "turma")
                            .addSelect("cs.nome", "nome_curso")
                            .addSelect("ft.pos", "possicao")
                            .addSelect("ft.prioridade", "prioridade")
                            .addSelect("ft.qte_ministrada", "qte_ministrada")
                            .addSelect("ft.qte_maximo", "qte_maximo")
                            .leftJoin(Disciplina_1.Disciplina, "dp", "dp.codigo = ft.codigo_disc")
                            .leftJoin(Curso_1.Curso, "cs", "cs.codigo = dp.curso")
                            .where("ft.siape = :siape", { siape: siape })
                            .getRawMany()];
                    case 1:
                        filaFinded = _a.sent();
                        return [2 /*return*/, filaFinded];
                }
            });
        });
    };
    FilaTurmaRepository.prototype.updateById = function (_a) {
        var siape = _a.siape, id_turma = _a.id_turma, codigo_disc = _a.codigo_disc, turma = _a.turma, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, qte_maximo = _a.qte_maximo, status = _a.status, ch = _a.ch, id = _a.id, periodo_preferencial = _a.periodo_preferencial;
        return __awaiter(this, void 0, void 0, function () {
            var filaTurma;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(id)];
                    case 1:
                        filaTurma = _b.sent();
                        filaTurma.id_turma = id_turma || filaTurma.id_turma;
                        filaTurma.turma = turma || filaTurma.turma;
                        filaTurma.siape = siape || filaTurma.siape;
                        filaTurma.pos = pos || filaTurma.pos;
                        filaTurma.prioridade = prioridade || filaTurma.prioridade;
                        filaTurma.qte_ministrada = qte_ministrada || filaTurma.qte_ministrada;
                        filaTurma.qte_maximo = qte_maximo || filaTurma.qte_maximo;
                        filaTurma.ch = ch || filaTurma.ch;
                        filaTurma.qte_ministrada = qte_ministrada || filaTurma.qte_ministrada;
                        filaTurma.periodo_preferencial =
                            periodo_preferencial === null || periodo_preferencial === undefined
                                ? filaTurma.periodo_preferencial
                                : periodo_preferencial;
                        filaTurma.codigo_disc = codigo_disc || filaTurma.codigo_disc;
                        return [4 /*yield*/, this.repository.save(filaTurma)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, filaTurma];
                }
            });
        });
    };
    FilaTurmaRepository.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FilaTurmaRepository;
}());
exports.FilaTurmaRepository = FilaTurmaRepository;
