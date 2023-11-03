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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = require("bcrypt");
var supertest_1 = __importDefault(require("supertest"));
var uuid_1 = require("uuid");
var app_1 = require("../../../../../shared/infra/http/app");
var typeorm_1 = require("../../../../../shared/infra/typeorm");
var Curso_1 = require("../../../../estrutura/infra/typeorm/entities/Curso");
var Disciplina_1 = require("../../../../estrutura/infra/typeorm/entities/Disciplina");
var Horario_1 = require("../../../../estrutura/infra/typeorm/entities/Horario");
var Semana_1 = require("../../../../estrutura/infra/typeorm/entities/Semana");
var Turma_1 = require("../../../../estrutura/infra/typeorm/entities/Turma");
var Oferta_1 = require("../../../infra/typeorm/entities/Oferta");
var connection;
describe("Handle CRUD routes related to oferta", function () {
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, password, semana, semana2, horario, horario2, curso, curso2, disciplina, disciplina2, turma, turma2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.dataSource.initialize()];
                case 1:
                    connection = _a.sent();
                    return [4 /*yield*/, connection.runMigrations()];
                case 2:
                    _a.sent();
                    id = (0, uuid_1.v4)();
                    return [4 /*yield*/, (0, bcrypt_1.hash)("admin", 8)];
                case 3:
                    password = _a.sent();
                    return [4 /*yield*/, connection.query("INSERT INTO usuarios(id, name, email, password, \"isAdmin\", created_at)\n      values('".concat(id, "', 'admin', 'sodd_tcc@outlook.com', '").concat(password, "', 'true', 'now()')"))];
                case 4:
                    _a.sent();
                    semana = new Semana_1.Semana();
                    semana.dia = "1";
                    semana.descricao = "Segunda-feira";
                    semana2 = new Semana_1.Semana();
                    semana2.dia = "2";
                    semana2.descricao = "Terça-feira";
                    return [4 /*yield*/, connection.manager.save(semana)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(semana2)];
                case 6:
                    _a.sent();
                    horario = new Horario_1.Horario();
                    horario.letra = "a";
                    horario.hora_inicio = "08:50:00";
                    horario.hora_fim = "10:40:00";
                    horario.turno = "MANHÃ";
                    horario2 = new Horario_1.Horario();
                    horario2.letra = "b";
                    horario2.hora_inicio = "10:40:00";
                    horario2.hora_fim = "12:20:00";
                    horario2.turno = "MANHÃ";
                    return [4 /*yield*/, connection.manager.save(horario)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(horario2)];
                case 8:
                    _a.sent();
                    curso = new Curso_1.Curso();
                    curso.codigo = "BCC";
                    curso.nome = "Ciencia da Computacao";
                    curso.unidade = "UFU";
                    curso.campus = "udi";
                    curso.permitir_choque_periodo = false;
                    curso.permitir_choque_horario = false;
                    curso2 = new Curso_1.Curso();
                    curso2.codigo = "BSI";
                    curso2.nome = "Sistemas de Informacao";
                    curso2.unidade = "UFU";
                    curso2.campus = "udi";
                    curso2.permitir_choque_periodo = false;
                    curso2.permitir_choque_horario = false;
                    return [4 /*yield*/, connection.manager.save(curso)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(curso2)];
                case 10:
                    _a.sent();
                    disciplina = new Disciplina_1.Disciplina();
                    disciplina.codigo = "GSI011";
                    disciplina.nome = "Profissões";
                    disciplina.ch_teorica = 4;
                    disciplina.ch_pratica = 0;
                    disciplina.ch_total = 4;
                    disciplina.curso = "BSI";
                    disciplina.temfila = true;
                    disciplina.periodo = 2;
                    disciplina2 = new Disciplina_1.Disciplina();
                    disciplina2.codigo = "BCC011";
                    disciplina2.nome = "Profissões";
                    disciplina2.ch_teorica = 4;
                    disciplina2.ch_pratica = 0;
                    disciplina2.ch_total = 4;
                    disciplina2.curso = "BCC";
                    disciplina2.temfila = true;
                    disciplina2.periodo = 2;
                    return [4 /*yield*/, connection.manager.save(disciplina)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(disciplina2)];
                case 12:
                    _a.sent();
                    turma = new Turma_1.Turma();
                    turma.codigo_disc = "BCC011";
                    turma.turma = "Z";
                    turma.ch = 4;
                    turma.ano = 2021;
                    turma.semestre = 2;
                    return [4 /*yield*/, connection.manager.save(turma)];
                case 13:
                    _a.sent();
                    turma2 = new Turma_1.Turma();
                    turma2.codigo_disc = "GSI011";
                    turma2.turma = "Z";
                    turma2.ch = 4;
                    turma2.ano = 2021;
                    turma2.semestre = 2;
                    return [4 /*yield*/, connection.manager.save(turma)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(turma2)];
                case 15:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.dropDatabase()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connection.close()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to create a new oferta record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.app)
                            .post("/oferta")
                            .send({
                            dia: "1",
                            letra: "a",
                            id_turma: 1,
                        })
                            .set({
                            Authorization: "Bearer ".concat(token),
                        })];
                case 2:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult.letra).toBe("a");
                    expect(responseResult.id_turma).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all oferta records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, oferta, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    oferta = new Oferta_1.Oferta();
                    oferta.dia = "2";
                    oferta.letra = "b";
                    oferta.id_turma = 1;
                    return [4 /*yield*/, connection.manager.save(oferta)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.app)
                            .get("/oferta")
                            .send()
                            .set({
                            Authorization: "Bearer ".concat(token),
                        })];
                case 3:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult).toHaveLength(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to delete a oferta record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, oferta, response, responseGet, ofertas, ofertaDeleted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    oferta = new Oferta_1.Oferta();
                    oferta.dia = "2";
                    oferta.letra = "a";
                    oferta.id_turma = 2;
                    return [4 /*yield*/, connection.manager.save(oferta)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.app)
                            .delete("/oferta/3")
                            .send()
                            .set({
                            Authorization: "Bearer ".concat(token),
                        })];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.app)
                            .get("/oferta")
                            .send()
                            .set({
                            Authorization: "Bearer ".concat(token),
                        })];
                case 4:
                    responseGet = _a.sent();
                    ofertas = responseGet.body;
                    ofertaDeleted = ofertas.find(function (oferta) { return oferta.id === "3"; });
                    expect(response.status).toBe(201);
                    expect(ofertaDeleted).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
