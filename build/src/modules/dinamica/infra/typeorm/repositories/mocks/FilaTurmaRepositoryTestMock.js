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
exports.FilaTurmaRepositoryTestMock = void 0;
var FilaTurma_1 = require("../../entities/FilaTurma");
var FilaTurmaRepositoryTestMock = /** @class */ (function () {
    function FilaTurmaRepositoryTestMock() {
        this.listFilasTurma = [];
    }
    FilaTurmaRepositoryTestMock.prototype.create = function (_a) {
        var siape = _a.siape, id_turma = _a.id_turma, codigo_disc = _a.codigo_disc, turma = _a.turma, pos = _a.pos, prioridade = _a.prioridade, qte_ministrada = _a.qte_ministrada, status = _a.status, ch = _a.ch, id = _a.id, periodo_preferencial = _a.periodo_preferencial;
        return __awaiter(this, void 0, void 0, function () {
            var fila;
            return __generator(this, function (_b) {
                fila = new FilaTurma_1.FilaTurma();
                Object.assign(fila, {
                    siape: siape,
                    id_turma: id_turma,
                    codigo_disc: codigo_disc,
                    turma: turma,
                    pos: pos,
                    prioridade: prioridade,
                    qte_ministrada: qte_ministrada,
                    status: status,
                    ch: ch,
                    id: id,
                    periodo_preferencial: periodo_preferencial,
                });
                this.listFilasTurma.push(fila);
                return [2 /*return*/, fila];
            });
        });
    };
    FilaTurmaRepositoryTestMock.prototype.listFilas = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.listFilasTurma];
            });
        });
    };
    FilaTurmaRepositoryTestMock.prototype.queryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var filaFounded;
            return __generator(this, function (_a) {
                filaFounded = this.listFilasTurma.find(function (fila) { return fila.id === id; });
                return [2 /*return*/, filaFounded];
            });
        });
    };
    FilaTurmaRepositoryTestMock.prototype.queryBySiape = function (siape) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.listFilasTurma.filter(function (fila) { return fila.siape === siape; })];
            });
        });
    };
    FilaTurmaRepositoryTestMock.prototype.queryByTurma = function (id_turma) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.listFilasTurma.filter(function (fila) { return fila.id_turma === id_turma; })];
            });
        });
    };
    // async updateByTurmaEFila({
    //   siape,
    //   codigo_disc,
    //   pos,
    //   prioridade,
    //   qte_ministrada,
    //   qte_maxima,
    //   ano,
    //   semestre,
    //   status,
    //   periodo_preferencial,
    // }: IPatchFilaTurmaDTO): Promise<FilaTurma> {
    //   const filaFounded = this.listFilasTurma.find(
    //     (fila) => fila.id_turma === id_turma && fila.id_fila === id_fila
    //   );
    //
    //   Object.assign(filaFounded, {
    //     prioridade: prioridade || filaFounded.prioridade,
    //   });
    //
    //   this.listFilasTurma.push(filaFounded);
    //
    //   return filaFounded;
    // }
    //
    // async deleteByTurmaEFila(id_turma: number, id_fila: number): Promise<void> {
    //   const filaIndex = this.listFilasTurma.findIndex(
    //     (fila) => fila.id_turma === id_turma && fila.id_fila === id_fila
    //   );
    //
    //   if (filaIndex > -1) {
    //     this.listFilasTurma.splice(filaIndex, 1);
    //   }
    // }
    FilaTurmaRepositoryTestMock.prototype.deleteById = function (id) {
        return Promise.resolve(undefined);
    };
    FilaTurmaRepositoryTestMock.prototype.updateById = function (data) {
        return Promise.resolve(undefined);
    };
    return FilaTurmaRepositoryTestMock;
}());
exports.FilaTurmaRepositoryTestMock = FilaTurmaRepositoryTestMock;
