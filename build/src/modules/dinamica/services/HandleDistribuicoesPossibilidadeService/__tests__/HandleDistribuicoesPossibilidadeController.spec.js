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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = require("bcrypt");
var supertest_1 = __importDefault(require("supertest"));
var uuid_1 = require("uuid");
var DayjsDateProvider_1 = require("../../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider");
var app_1 = require("../../../../../shared/infra/http/app");
var typeorm_1 = __importDefault(require("../../../../../shared/infra/typeorm"));
var Curso_1 = require("../../../../estrutura/infra/typeorm/entities/Curso");
var Disciplina_1 = require("../../../../estrutura/infra/typeorm/entities/Disciplina");
var Professor_1 = require("../../../../estrutura/infra/typeorm/entities/Professor");
var Semestre_1 = require("../../../../estrutura/infra/typeorm/entities/Semestre");
var Turma_1 = require("../../../../estrutura/infra/typeorm/entities/Turma");
var Cenario_1 = require("../../../infra/typeorm/entities/Cenario");
var DistribuicoesPossibilidade_1 = require("../../../infra/typeorm/entities/DistribuicoesPossibilidade");
var Possibilidades_1 = require("../../../infra/typeorm/entities/Possibilidades");
var connection;
var dateProvider;
describe("Handle CRUD routes related to distribuicoes_possibilidade", function () {
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var id, password, curso, disciplina, disciplina2, turma1, turma2, professor, professor2, semestre1, semestre2, cenario, cenario2, possibilidades, possibilidades2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dateProvider = new DayjsDateProvider_1.DayjsDateProvider();
                    return [4 /*yield*/, (0, typeorm_1.default)()];
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
                    curso = new Curso_1.Curso();
                    curso.codigo = "BCC";
                    curso.nome = "Ciencia da Computacao";
                    curso.unidade = "UFU";
                    curso.campus = "udi";
                    curso.permitir_choque_periodo = false;
                    curso.permitir_choque_horario = false;
                    return [4 /*yield*/, connection.manager.save(curso)];
                case 5:
                    _a.sent();
                    disciplina = new Disciplina_1.Disciplina();
                    disciplina.codigo = "BCC011";
                    disciplina.nome = "Introdução à Ciencia";
                    disciplina.ch_teorica = 4;
                    disciplina.ch_pratica = 0;
                    disciplina.ch_total = 4;
                    disciplina.curso = "BCC";
                    disciplina.temfila = true;
                    disciplina.periodo = 2;
                    disciplina2 = new Disciplina_1.Disciplina();
                    disciplina2.codigo = "BCC012";
                    disciplina2.nome = "Programacao Procedimental";
                    disciplina2.ch_teorica = 4;
                    disciplina2.ch_pratica = 0;
                    disciplina2.ch_total = 4;
                    disciplina2.curso = "BCC";
                    disciplina2.temfila = true;
                    disciplina2.periodo = 2;
                    return [4 /*yield*/, connection.manager.save(disciplina)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(disciplina2)];
                case 7:
                    _a.sent();
                    turma1 = new Turma_1.Turma();
                    turma1.codigo_disc = "BCC011";
                    turma1.turma = "S";
                    turma1.ano = 2018;
                    turma1.semestre = 1;
                    turma1.ch = 2;
                    turma2 = new Turma_1.Turma();
                    turma2.codigo_disc = "BCC012";
                    turma2.turma = "S";
                    turma2.ano = 2018;
                    turma2.semestre = 2;
                    turma2.ch = 2;
                    return [4 /*yield*/, connection.manager.save(turma1)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(turma2)];
                case 9:
                    _a.sent();
                    professor = new Professor_1.Professor();
                    professor.siape = "1024300";
                    professor.nome = "Oscar Shelton";
                    professor.data_ingresso = dateProvider.processDateToUTC(new Date("2021-01-25"));
                    professor.data_nasc = dateProvider.processDateToUTC(new Date("1998-03-23"));
                    professor.afastado = true;
                    professor.regime = "de";
                    professor.carga_atual = 8;
                    professor.locacao = "udi";
                    professor.cnome = "OShelton";
                    professor.data_aposentadoria = dateProvider.processDateToUTC(new Date("2021-02-05"));
                    professor.status = "ativo";
                    return [4 /*yield*/, connection.manager.save(professor)];
                case 10:
                    _a.sent();
                    professor2 = new Professor_1.Professor();
                    professor2.siape = "00100101";
                    professor2.nome = "Oscar Shelton";
                    professor2.data_ingresso = dateProvider.processDateToUTC(new Date("2021-01-25"));
                    professor2.data_nasc = dateProvider.processDateToUTC(new Date("1998-03-23"));
                    professor2.afastado = true;
                    professor2.regime = "de";
                    professor2.carga_atual = 8;
                    professor2.locacao = "udi";
                    professor2.cnome = "OShelton";
                    professor2.data_aposentadoria = dateProvider.processDateToUTC(new Date("2021-02-05"));
                    professor2.status = "ativo";
                    return [4 /*yield*/, connection.manager.save(professor2)];
                case 11:
                    _a.sent();
                    semestre1 = new Semestre_1.Semestre();
                    semestre1.ano = 2021;
                    semestre1.semestre = 1;
                    semestre1.status = false;
                    semestre2 = new Semestre_1.Semestre();
                    semestre2.ano = 2021;
                    semestre2.semestre = 2;
                    semestre2.status = true;
                    return [4 /*yield*/, connection.manager.save(semestre1)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, connection.manager.save(semestre2)];
                case 13:
                    _a.sent();
                    cenario = new Cenario_1.Cenario();
                    cenario.descricao_cenario = "description_001";
                    cenario.ano = 2021;
                    cenario.semestre = 1;
                    return [4 /*yield*/, connection.manager.save(cenario)];
                case 14:
                    _a.sent();
                    cenario2 = new Cenario_1.Cenario();
                    cenario2.descricao_cenario = "description_002";
                    cenario2.ano = 2021;
                    cenario2.semestre = 2;
                    return [4 /*yield*/, connection.manager.save(cenario2)];
                case 15:
                    _a.sent();
                    possibilidades = new Possibilidades_1.Possibilidades();
                    possibilidades.num_cenario = 1;
                    possibilidades.descricao = "description_001";
                    return [4 /*yield*/, connection.manager.save(possibilidades)];
                case 16:
                    _a.sent();
                    possibilidades2 = new Possibilidades_1.Possibilidades();
                    possibilidades2.num_cenario = 2;
                    possibilidades2.descricao = "description_002";
                    return [4 /*yield*/, connection.manager.save(possibilidades2)];
                case 17:
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
    it("Should be able to create a new distribuicoes_possibilidade record", function () { return __awaiter(void 0, void 0, void 0, function () {
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
                            .post("/distribuicoes_possibilidade")
                            .send({
                            id_possibilidade: 1,
                            siape: "00100101",
                            id_turma: 1,
                        })
                            .set({
                            Authorization: "Bearer ".concat(token),
                        })];
                case 2:
                    response = _a.sent();
                    responseResult = response.body;
                    expect(response.status).toBe(201);
                    expect(responseResult.siape).toBe("00100101");
                    return [2 /*return*/];
            }
        });
    }); });
    it("Should be able to read all distribuicoes_possibilidade records", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, dist, response, responseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    dist = new DistribuicoesPossibilidade_1.DistribuicoesPossibilidade();
                    dist.id_possibilidade = 1;
                    dist.siape = "00100101";
                    dist.id_turma = 2;
                    return [4 /*yield*/, connection.manager.save(dist)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.app)
                            .get("/distribuicoes_possibilidade")
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
    it("Should be able to delete a distribuicoes_possibilidade record", function () { return __awaiter(void 0, void 0, void 0, function () {
        var responseToken, token, dist, response, responseGet, listDist, distDeleted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.app).post("/sessions").send({
                        email: "sodd_tcc@outlook.com",
                        password: "admin",
                    })];
                case 1:
                    responseToken = _a.sent();
                    token = responseToken.body.token;
                    dist = new DistribuicoesPossibilidade_1.DistribuicoesPossibilidade();
                    dist.id_possibilidade = 2;
                    dist.siape = "00100101";
                    dist.id_turma = 2;
                    return [4 /*yield*/, connection.manager.save(dist)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.app)
                            .delete("/distribuicoes_possibilidade")
                            .send({
                            id_possibilidade: 2,
                            siape: "00100101",
                            id_turma: 2,
                        })
                            .set({ Authorization: "Bearer ".concat(token) })];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, (0, supertest_1.default)(app_1.app)
                            .get("/distribuicoes_possibilidade")
                            .send()
                            .set({
                            Authorization: "Bearer ".concat(token),
                        })];
                case 4:
                    responseGet = _a.sent();
                    listDist = responseGet.body;
                    distDeleted = listDist.find(function (dist) {
                        return dist.id_possibilidade === 2 &&
                            dist.siape === "00100101" &&
                            dist.id_turma === 2;
                    });
                    expect(response.status).toBe(201);
                    expect(distDeleted).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
