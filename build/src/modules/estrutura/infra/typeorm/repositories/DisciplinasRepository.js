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
exports.DisciplinasRepository = void 0;
var typeorm_1 = require("typeorm");
var Disciplina_1 = require("../entities/Disciplina");
var Turma_1 = require("../entities/Turma");
var FilaTurmaNew_1 = require("../../../../dinamica/infra/typeorm/entities/FilaTurmaNew");
var Fila_1 = require("../../../../dinamica/infra/typeorm/entities/Fila");
var DisciplinasRepository = /** @class */ (function () {
    function DisciplinasRepository() {
        this.repository = (0, typeorm_1.getRepository)(Disciplina_1.Disciplina);
    }
    DisciplinasRepository.prototype.createDisciplina = function (_a) {
        var codigo = _a.codigo, nome = _a.nome, ch_teorica = _a.ch_teorica, ch_pratica = _a.ch_pratica, ch_total = _a.ch_total, curso = _a.curso, temfila = _a.temfila, periodo = _a.periodo, cod_antigo = _a.cod_antigo;
        return __awaiter(this, void 0, void 0, function () {
            var disciplina;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.create({
                            codigo: codigo,
                            nome: nome,
                            ch_teorica: ch_teorica,
                            ch_pratica: ch_pratica,
                            ch_total: ch_total,
                            curso: curso,
                            temfila: temfila,
                            periodo: periodo,
                            cod_antigo: cod_antigo,
                        })];
                    case 1:
                        disciplina = _b.sent();
                        return [4 /*yield*/, this.repository.save(disciplina)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, disciplina];
                }
            });
        });
    };
    DisciplinasRepository.prototype.listAllDisciplinas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var disciplinas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder("disciplina")
                            .orderBy("codigo", "ASC")
                            .getMany()];
                    case 1:
                        disciplinas = _a.sent();
                        return [2 /*return*/, disciplinas];
                }
            });
        });
    };
    DisciplinasRepository.prototype.queryByCodigo = function (codigo) {
        return __awaiter(this, void 0, void 0, function () {
            var disciplina;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ codigo: codigo })];
                    case 1:
                        disciplina = _a.sent();
                        return [2 /*return*/, disciplina];
                }
            });
        });
    };
    DisciplinasRepository.prototype.queryBySiapeEAnoESemestre = function (siape, ano, semestre) {
        return __awaiter(this, void 0, void 0, function () {
            var disciplinas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Disciplina_1.Disciplina)
                            .createQueryBuilder("dp")
                            .select(['dp.codigo AS codigo_disciplina',
                            'dp.nome AS nome_disciplina',
                            'tm.turma AS turma',
                            'dp.curso AS codigo_curso',
                            'fl.siape AS siape',
                            'ftn.prioridade AS prioridade',
                            'fl.pos AS posicao',
                            'fl.qte_ministrada AS qte_ministrada',
                            'ftn.id_turma AS id_turma'])
                            .leftJoin(Turma_1.Turma, "tm", "dp.codigo = tm.codigo_disc")
                            .leftJoin(FilaTurmaNew_1.FilaTurmaNew, "ftn", "tm.id = ftn.id_turma")
                            .leftJoin(Fila_1.Fila, "fl", "fl.id = ftn.id_fila")
                            .where("fl.siape = :siape", { siape: siape })
                            .andWhere("tm.ano = :ano", { ano: ano })
                            .andWhere("tm.semestre = :semestre", { semestre: semestre })
                            .orderBy("codigo", "ASC")
                            .getRawMany()];
                    case 1:
                        disciplinas = _a.sent();
                        return [2 /*return*/, disciplinas];
                }
            });
        });
    };
    DisciplinasRepository.prototype.updateByCodigo = function (_a) {
        var codigo = _a.codigo, nome = _a.nome, ch_teorica = _a.ch_teorica, ch_pratica = _a.ch_pratica, ch_total = _a.ch_total, curso = _a.curso, temfila = _a.temfila, periodo = _a.periodo;
        return __awaiter(this, void 0, void 0, function () {
            var disciplinaToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ codigo: codigo })];
                    case 1:
                        disciplinaToUpdate = _b.sent();
                        disciplinaToUpdate.nome = nome || disciplinaToUpdate.nome;
                        disciplinaToUpdate.ch_teorica = ch_teorica || disciplinaToUpdate.ch_teorica;
                        disciplinaToUpdate.ch_pratica = ch_pratica || disciplinaToUpdate.ch_pratica;
                        disciplinaToUpdate.ch_total = ch_total || disciplinaToUpdate.ch_total;
                        disciplinaToUpdate.curso = curso || disciplinaToUpdate.curso;
                        disciplinaToUpdate.temfila =
                            temfila === undefined || temfila === null
                                ? disciplinaToUpdate.temfila
                                : temfila;
                        disciplinaToUpdate.periodo = periodo || disciplinaToUpdate.periodo;
                        return [4 /*yield*/, this.repository.save(disciplinaToUpdate)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, disciplinaToUpdate];
                }
            });
        });
    };
    DisciplinasRepository.prototype.deleteByCodigo = function (codigo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.delete(codigo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return DisciplinasRepository;
}());
exports.DisciplinasRepository = DisciplinasRepository;
