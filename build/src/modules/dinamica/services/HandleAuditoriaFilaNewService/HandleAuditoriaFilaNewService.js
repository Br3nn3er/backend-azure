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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleAuditoriaFilaNewService = void 0;
var csv_parse_1 = __importDefault(require("csv-parse"));
var fs_1 = __importDefault(require("fs"));
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("../../../../shared/errors/AppError");
var HandleAuditoriaFilaNewService = /** @class */ (function () {
    function HandleAuditoriaFilaNewService(auditoriaFilaNewRepository) {
        this.auditoriaFilaNewRepository = auditoriaFilaNewRepository;
    }
    HandleAuditoriaFilaNewService.prototype.create = function (_a) {
        var id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade_old = _a.prioridade_old, prioridade_new = _a.prioridade_new, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var auditoriaNew;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.auditoriaFilaNewRepository.create({
                            id_turma: id_turma,
                            id_fila: id_fila,
                            prioridade_old: prioridade_old,
                            prioridade_new: prioridade_new,
                            stamp: stamp,
                        })];
                    case 1:
                        auditoriaNew = _b.sent();
                        return [2 /*return*/, auditoriaNew];
                }
            });
        });
    };
    HandleAuditoriaFilaNewService.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriasNew;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auditoriaFilaNewRepository.listAllAuditoriaNew()];
                    case 1:
                        auditoriasNew = _a.sent();
                        return [2 /*return*/, auditoriasNew];
                }
            });
        });
    };
    HandleAuditoriaFilaNewService.prototype.update = function (_a) {
        var id = _a.id, id_turma = _a.id_turma, id_fila = _a.id_fila, prioridade_old = _a.prioridade_old, prioridade_new = _a.prioridade_new, stamp = _a.stamp;
        return __awaiter(this, void 0, void 0, function () {
            var existentAuditoriaNew, auditoriaToUpdate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.auditoriaFilaNewRepository.queryById(id)];
                    case 1:
                        existentAuditoriaNew = _b.sent();
                        if (!existentAuditoriaNew) {
                            throw new AppError_1.AppError("Auditoria não cadastrada!");
                        }
                        return [4 /*yield*/, this.auditoriaFilaNewRepository.updateById({
                                id: id,
                                id_turma: id_turma,
                                id_fila: id_fila,
                                prioridade_old: prioridade_old,
                                prioridade_new: prioridade_new,
                                stamp: stamp,
                            })];
                    case 2:
                        auditoriaToUpdate = _b.sent();
                        return [2 /*return*/, auditoriaToUpdate];
                }
            });
        });
    };
    HandleAuditoriaFilaNewService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auditoriaFilaNewRepository.deleteById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleAuditoriaFilaNewService.prototype.import = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var auditoriasNew;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadAuditorias(file)];
                    case 1:
                        auditoriasNew = _a.sent();
                        auditoriasNew.map(function (auditoriaNewToProcess) { return __awaiter(_this, void 0, void 0, function () {
                            var id_turma, id_fila, prioridade_old, prioridade_new, stamp;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        id_turma = auditoriaNewToProcess.id_turma, id_fila = auditoriaNewToProcess.id_fila, prioridade_old = auditoriaNewToProcess.prioridade_old, prioridade_new = auditoriaNewToProcess.prioridade_new, stamp = auditoriaNewToProcess.stamp;
                                        console.log(auditoriaNewToProcess);
                                        return [4 /*yield*/, this.auditoriaFilaNewRepository.create({
                                                id_turma: id_turma,
                                                id_fila: id_fila,
                                                prioridade_old: prioridade_old,
                                                prioridade_new: prioridade_new,
                                                stamp: stamp,
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleAuditoriaFilaNewService.prototype.loadAuditorias = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var auditorias = [];
            var stream = fs_1.default.createReadStream(file.path);
            var parseFile = (0, csv_parse_1.default)();
            stream.pipe(parseFile);
            parseFile
                .on("data", function (line) { return __awaiter(_this, void 0, void 0, function () {
                var id_turma, id_fila, prioridade_old, prioridade_new, stamp;
                return __generator(this, function (_a) {
                    id_turma = line[0], id_fila = line[1], prioridade_old = line[2], prioridade_new = line[3], stamp = line[4];
                    auditorias.push({
                        id_turma: parseInt(id_turma, 10),
                        id_fila: parseInt(id_fila, 10),
                        prioridade_old: parseInt(prioridade_old, 10),
                        prioridade_new: parseInt(prioridade_new, 10),
                        stamp: stamp,
                    });
                    return [2 /*return*/];
                });
            }); })
                .on("end", function () {
                fs_1.default.promises.unlink(file.path);
                resolve(auditorias);
            })
                .on("error", function (err) {
                reject(err);
            });
        });
    };
    HandleAuditoriaFilaNewService = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("AuditoriaFilaNewRepository")),
        __metadata("design:paramtypes", [Object])
    ], HandleAuditoriaFilaNewService);
    return HandleAuditoriaFilaNewService;
}());
exports.HandleAuditoriaFilaNewService = HandleAuditoriaFilaNewService;
