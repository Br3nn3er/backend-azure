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
exports.CargaDocente = void 0;
var typeorm_1 = require("typeorm");
var Professor_1 = require("./Professor");
var CargaDocente = /** @class */ (function () {
    function CargaDocente() {
    }
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Professor_1.Professor; }),
        (0, typeorm_1.JoinColumn)({ name: "siape" }),
        __metadata("design:type", Professor_1.Professor)
    ], CargaDocente.prototype, "professor", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], CargaDocente.prototype, "siape", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], CargaDocente.prototype, "carga_atual", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], CargaDocente.prototype, "ano", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], CargaDocente.prototype, "semestre", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], CargaDocente.prototype, "created_at", void 0);
    CargaDocente = __decorate([
        (0, typeorm_1.Entity)("carga_docente")
    ], CargaDocente);
    return CargaDocente;
}());
exports.CargaDocente = CargaDocente;
