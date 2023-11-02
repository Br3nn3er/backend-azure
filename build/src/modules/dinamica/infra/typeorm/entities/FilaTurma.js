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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilaTurma = void 0;
var typeorm_1 = require("typeorm");
var StatusDistribuicao_1 = require("./StatusDistribuicao");
var FilaTurma = /** @class */ (function () {
    function FilaTurma() {
    }
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], FilaTurma.prototype, "siape", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], FilaTurma.prototype, "id_turma", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], FilaTurma.prototype, "codigo_disc", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], FilaTurma.prototype, "turma", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], FilaTurma.prototype, "pos", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], FilaTurma.prototype, "prioridade", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], FilaTurma.prototype, "qte_ministrada", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], FilaTurma.prototype, "qte_maximo", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], FilaTurma.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return StatusDistribuicao_1.StatusDistribuicao; }),
        (0, typeorm_1.JoinColumn)({ name: "status" }),
        __metadata("design:type", StatusDistribuicao_1.StatusDistribuicao)
    ], FilaTurma.prototype, "status_distribuicao", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], FilaTurma.prototype, "ch", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", Number)
    ], FilaTurma.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], FilaTurma.prototype, "periodo_preferencial", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], FilaTurma.prototype, "created_at", void 0);
    FilaTurma = __decorate([
        (0, typeorm_1.Entity)("fila_turma")
    ], FilaTurma);
    return FilaTurma;
}());
exports.FilaTurma = FilaTurma;
