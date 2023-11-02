"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ProfessoresRepository = void 0;
var tsyringe_1 = require("tsyringe");
var typeorm_1 = require("typeorm");
var Professor_1 = require("../entities/Professor");
var ProfessoresRepository = /** @class */ (function () {
    function ProfessoresRepository(dateProvider) {
        this.dateProvider = dateProvider;
        this.repository = (0, typeorm_1.getRepository)(Professor_1.Professor);
    }
    ProfessoresRepository.prototype.queryBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            var professor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ siape: siape })];
                    case 1:
                        professor = _a.sent();
                        return [2 /*return*/, professor];
                }
            });
        });
    };
    ProfessoresRepository.prototype.createProfessor = function (_a) {
        var siape = _a.siape, nome = _a.nome, data_ingresso = _a.data_ingresso, data_nasc = _a.data_nasc, afastado = _a.afastado, regime = _a.regime, carga_atual = _a.carga_atual, locacao = _a.locacao, cnome = _a.cnome, data_saida = _a.data_saida, data_exoneracao = _a.data_exoneracao, data_aposentadoria = _a.data_aposentadoria, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var professor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        professor = this.repository.create({
                            siape: siape,
                            nome: nome,
                            data_ingresso: data_ingresso,
                            data_nasc: data_nasc,
                            afastado: afastado,
                            regime: regime,
                            carga_atual: carga_atual,
                            locacao: locacao,
                            cnome: cnome,
                            data_saida: data_saida,
                            data_exoneracao: data_exoneracao,
                            data_aposentadoria: data_aposentadoria,
                            status: status,
                        });
                        return [4 /*yield*/, this.repository.save(professor)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, professor];
                }
            });
        });
    };
    ProfessoresRepository.prototype.listAllProfessores = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listProfessores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository
                            .createQueryBuilder("professor")
                            .orderBy("siape", "ASC")
                            .getMany()];
                    case 1:
                        listProfessores = _a.sent();
                        return [2 /*return*/, listProfessores];
                }
            });
        });
    };
    ProfessoresRepository.prototype.deleteBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.delete(siape)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfessoresRepository.prototype.updateBySiape = function (_a) {
        var siape = _a.siape, nome = _a.nome, data_ingresso = _a.data_ingresso, data_nasc = _a.data_nasc, afastado = _a.afastado, regime = _a.regime, carga_atual = _a.carga_atual, locacao = _a.locacao, cnome = _a.cnome, data_saida = _a.data_saida, data_exoneracao = _a.data_exoneracao, data_aposentadoria = _a.data_aposentadoria, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var professorToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ siape: siape })];
                    case 1:
                        professorToUpdate = _b.sent();
                        professorToUpdate.nome = nome || professorToUpdate.nome;
                        professorToUpdate.data_ingresso = data_ingresso
                            ? this.dateProvider.processDateToUTC(data_ingresso)
                            : professorToUpdate.data_ingresso;
                        professorToUpdate.data_nasc = data_nasc
                            ? this.dateProvider.processDateToUTC(data_nasc)
                            : professorToUpdate.data_nasc;
                        professorToUpdate.afastado =
                            afastado === null || afastado === undefined
                                ? professorToUpdate.afastado
                                : afastado;
                        professorToUpdate.regime = regime || professorToUpdate.regime;
                        professorToUpdate.carga_atual =
                            carga_atual || professorToUpdate.carga_atual;
                        professorToUpdate.locacao = locacao || professorToUpdate.locacao;
                        professorToUpdate.cnome = cnome || professorToUpdate.cnome;
                        professorToUpdate.data_saida = data_saida
                            ? this.dateProvider.processDateToUTC(data_saida)
                            : professorToUpdate.data_saida;
                        professorToUpdate.data_exoneracao = data_exoneracao
                            ? this.dateProvider.processDateToUTC(data_exoneracao)
                            : professorToUpdate.data_exoneracao;
                        professorToUpdate.data_aposentadoria = data_aposentadoria
                            ? this.dateProvider.processDateToUTC(data_aposentadoria)
                            : professorToUpdate.data_aposentadoria;
                        professorToUpdate.status = status || professorToUpdate.status;
                        return [4 /*yield*/, this.repository.save(professorToUpdate)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, professorToUpdate];
                }
            });
        });
    };
    ProfessoresRepository = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("DayjsDateProvider")),
        __metadata("design:paramtypes", [Object])
    ], ProfessoresRepository);
    return ProfessoresRepository;
}());
exports.ProfessoresRepository = ProfessoresRepository;
