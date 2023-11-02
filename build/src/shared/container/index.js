"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
require("./providers");
var AtribuicaoManualRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/AtribuicaoManualRepository");
var AuditoriaFilaNewRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/AuditoriaFilaNewRepository");
var AuditoriaFilaRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/AuditoriaFilaRepository");
var AuditoriaPrioridadeRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/AuditoriaPrioridadeRepository");
var CenarioFilaTurmaRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/CenarioFilaTurmaRepository");
var CenarioRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/CenarioRepository");
var DistribuicaoCargaRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/DistribuicaoCargaRepository");
var DistribuicoesPossibilidadeRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/DistribuicoesPossibilidadeRepository");
var EtapaRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/EtapaRepository");
var FilaRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/FilaRepository");
var FilaTurmaNewRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/FilaTurmaNewRepository");
var OfertaRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/OfertaRepository");
var PossibilidadesRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/PossibilidadesRepository");
var PrioridadesRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/PrioridadesRepository");
var RestricoesRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/RestricoesRepository");
var StatusDistribuicaoRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/StatusDistribuicaoRepository");
var StatusPossibilidadesRepository_1 = require("../../modules/dinamica/infra/typeorm/repositories/StatusPossibilidadesRepository");
var CargaDocentesRepository_1 = require("../../modules/estrutura/infra/typeorm/repositories/CargaDocentesRepository");
var CursosRepository_1 = require("../../modules/estrutura/infra/typeorm/repositories/CursosRepository");
var DisciplinasRepository_1 = require("../../modules/estrutura/infra/typeorm/repositories/DisciplinasRepository");
var HorariosRepository_1 = require("../../modules/estrutura/infra/typeorm/repositories/HorariosRepository");
var MinistraRepository_1 = require("../../modules/estrutura/infra/typeorm/repositories/MinistraRepository");
var ProfessoresRepository_1 = require("../../modules/estrutura/infra/typeorm/repositories/ProfessoresRepository");
var SemanasRepository_1 = require("../../modules/estrutura/infra/typeorm/repositories/SemanasRepository");
var SemestresRepository_1 = require("../../modules/estrutura/infra/typeorm/repositories/SemestresRepository");
var TurmasRepository_1 = require("../../modules/estrutura/infra/typeorm/repositories/TurmasRepository");
var UsersRepository_1 = require("../../modules/gerenciamento/infra/typeorm/repositories/UsersRepository");
var UsersTokensRepository_1 = require("../../modules/gerenciamento/infra/typeorm/repositories/UsersTokensRepository");
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton("ProfessoresRepository", ProfessoresRepository_1.ProfessoresRepository);
tsyringe_1.container.registerSingleton("CursosRepository", CursosRepository_1.CursosRepository);
tsyringe_1.container.registerSingleton("DisciplinasRepository", DisciplinasRepository_1.DisciplinasRepository);
tsyringe_1.container.registerSingleton("SemestresRepository", SemestresRepository_1.SemestresRepository);
tsyringe_1.container.registerSingleton("TurmasRepository", TurmasRepository_1.TurmasRepository);
tsyringe_1.container.registerSingleton("SemanasRepository", SemanasRepository_1.SemanasRepository);
tsyringe_1.container.registerSingleton("HorariosRepository", HorariosRepository_1.HorariosRepository);
tsyringe_1.container.registerSingleton("CargaDocentesRepository", CargaDocentesRepository_1.CargaDocentesRepository);
tsyringe_1.container.registerSingleton("MinistraRepository", MinistraRepository_1.MinistraRepository);
tsyringe_1.container.registerSingleton("UsersTokensRepository", UsersTokensRepository_1.UsersTokensRepository);
tsyringe_1.container.registerSingleton("AuditoriaFilaRepository", AuditoriaFilaRepository_1.AuditoriaFilaRepository);
tsyringe_1.container.registerSingleton("AuditoriaFilaNewRepository", AuditoriaFilaNewRepository_1.AuditoriaFilaNewRepository);
tsyringe_1.container.registerSingleton("AuditoriaPrioridadeRepository", AuditoriaPrioridadeRepository_1.AuditoriaPrioridadeRepository);
tsyringe_1.container.registerSingleton("EtapaRepository", EtapaRepository_1.EtapaRepository);
tsyringe_1.container.registerSingleton("PrioridadesRepository", PrioridadesRepository_1.PrioridadesRepository);
tsyringe_1.container.registerSingleton("StatusDistribuicaoRepository", StatusDistribuicaoRepository_1.StatusDistribuicaoRepository);
tsyringe_1.container.registerSingleton("CenarioRepository", CenarioRepository_1.CenarioRepository);
tsyringe_1.container.registerSingleton("PossibilidadesRepository", PossibilidadesRepository_1.PossibilidadesRepository);
tsyringe_1.container.registerSingleton("AtribuicaoManualRepository", AtribuicaoManualRepository_1.AtribuicaoManualRepository);
tsyringe_1.container.registerSingleton("OfertaRepository", OfertaRepository_1.OfertaRepository);
tsyringe_1.container.registerSingleton("RestricoesRepository", RestricoesRepository_1.RestricoesRepository);
tsyringe_1.container.registerSingleton("DistribuicaoCargaRepository", DistribuicaoCargaRepository_1.DistribuicaoCargaRepository);
tsyringe_1.container.registerSingleton("DistribuicoesPossibilidadeRepository", DistribuicoesPossibilidadeRepository_1.DistribuicoesPossibilidadeRepository);
tsyringe_1.container.registerSingleton("FilaRepository", FilaRepository_1.FilaRepository);
tsyringe_1.container.registerSingleton("FilaTurmaNewRepository", FilaTurmaNewRepository_1.FilaTurmaNewRepository);
tsyringe_1.container.registerSingleton("CenarioFilaTurmaRepository", CenarioFilaTurmaRepository_1.CenarioFilaTurmaRepository);
tsyringe_1.container.registerSingleton("StatusPossibilidadesRepository", StatusPossibilidadesRepository_1.StatusPossibilidadesRepository);
