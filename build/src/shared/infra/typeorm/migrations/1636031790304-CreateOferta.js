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
exports.CreateOferta1636031790304 = void 0;
var typeorm_1 = require("typeorm");
var CreateOferta1636031790304 = /** @class */ (function () {
    function CreateOferta1636031790304() {
    }
    CreateOferta1636031790304.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var ofertaUniqueConstraint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: "oferta",
                            columns: [
                                {
                                    name: "id",
                                    type: "integer",
                                    isNullable: false,
                                    isGenerated: true,
                                    generationStrategy: "increment",
                                },
                                {
                                    name: "dia",
                                    type: "char",
                                    length: "1",
                                    isNullable: false,
                                },
                                {
                                    name: "letra",
                                    type: "char",
                                    length: "1",
                                    isNullable: false,
                                },
                                {
                                    name: "id_turma",
                                    type: "integer",
                                    isNullable: false,
                                },
                                {
                                    name: "created_at",
                                    type: "timestamp",
                                    default: "now()",
                                },
                            ],
                        }))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createPrimaryKey("oferta", ["id"])];
                    case 2:
                        _a.sent();
                        ofertaUniqueConstraint = new typeorm_1.TableUnique({
                            columnNames: ["dia", "letra", "id_turma"],
                        });
                        return [4 /*yield*/, queryRunner.createUniqueConstraint("oferta", ofertaUniqueConstraint)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("oferta", new typeorm_1.TableForeignKey({
                                name: "oferta_dia_fkey",
                                columnNames: ["dia"],
                                referencedColumnNames: ["dia"],
                                referencedTableName: "semana",
                                onUpdate: "NO ACTION",
                                onDelete: "NO ACTION",
                            }))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("oferta", new typeorm_1.TableForeignKey({
                                name: "oferta_letra_fkey",
                                columnNames: ["letra"],
                                referencedColumnNames: ["letra"],
                                referencedTableName: "horario",
                                onUpdate: "NO ACTION",
                                onDelete: "NO ACTION",
                            }))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey("oferta", new typeorm_1.TableForeignKey({
                                name: "oferta_turma_fkey",
                                columnNames: ["id_turma"],
                                referencedColumnNames: ["id"],
                                referencedTableName: "turma",
                                onUpdate: "CASCADE",
                                onDelete: "CASCADE",
                            }))];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateOferta1636031790304.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropForeignKey("oferta", "oferta_turma_fkey")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropForeignKey("oferta", "oferta_letra_fkey")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropForeignKey("oferta", "oferta_dia_fkey")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropPrimaryKey("oferta")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable("oferta")];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateOferta1636031790304;
}());
exports.CreateOferta1636031790304 = CreateOferta1636031790304;
