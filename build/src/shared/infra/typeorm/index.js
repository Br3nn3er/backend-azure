"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
var typeorm_1 = require("typeorm");
var AtribuicaoManual_1 = require("../../../modules/dinamica/infra/typeorm/entities/AtribuicaoManual");
var AuditoriaFila_1 = require("../../../modules/dinamica/infra/typeorm/entities/AuditoriaFila");
var AuditoriaFilaNew_1 = require("../../../modules/dinamica/infra/typeorm/entities/AuditoriaFilaNew");
var AuditoriaPrioridade_1 = require("../../../modules/dinamica/infra/typeorm/entities/AuditoriaPrioridade");
var Cenario_1 = require("../../../modules/dinamica/infra/typeorm/entities/Cenario");
var CenarioFilaTurma_1 = require("../../../modules/dinamica/infra/typeorm/entities/CenarioFilaTurma");
var DistribuicaoCarga_1 = require("../../../modules/dinamica/infra/typeorm/entities/DistribuicaoCarga");
var DistribuicoesPossibilidade_1 = require("../../../modules/dinamica/infra/typeorm/entities/DistribuicoesPossibilidade");
var Etapa_1 = require("../../../modules/dinamica/infra/typeorm/entities/Etapa");
var Fila_1 = require("../../../modules/dinamica/infra/typeorm/entities/Fila");
var FilaTurma_1 = require("../../../modules/dinamica/infra/typeorm/entities/FilaTurma");
var FilaTurmaNew_1 = require("../../../modules/dinamica/infra/typeorm/entities/FilaTurmaNew");
var Oferta_1 = require("../../../modules/dinamica/infra/typeorm/entities/Oferta");
var Possibilidades_1 = require("../../../modules/dinamica/infra/typeorm/entities/Possibilidades");
var Prioridades_1 = require("../../../modules/dinamica/infra/typeorm/entities/Prioridades");
var Restricoes_1 = require("../../../modules/dinamica/infra/typeorm/entities/Restricoes");
var StatusDistribuicao_1 = require("../../../modules/dinamica/infra/typeorm/entities/StatusDistribuicao");
var StatusPossibilidades_1 = require("../../../modules/dinamica/infra/typeorm/entities/StatusPossibilidades");
var CargaDocente_1 = require("../../../modules/estrutura/infra/typeorm/entities/CargaDocente");
var Curso_1 = require("../../../modules/estrutura/infra/typeorm/entities/Curso");
var Disciplina_1 = require("../../../modules/estrutura/infra/typeorm/entities/Disciplina");
var Horario_1 = require("../../../modules/estrutura/infra/typeorm/entities/Horario");
var Ministra_1 = require("../../../modules/estrutura/infra/typeorm/entities/Ministra");
var Professor_1 = require("../../../modules/estrutura/infra/typeorm/entities/Professor");
var Semana_1 = require("../../../modules/estrutura/infra/typeorm/entities/Semana");
var Semestre_1 = require("../../../modules/estrutura/infra/typeorm/entities/Semestre");
var Turma_1 = require("../../../modules/estrutura/infra/typeorm/entities/Turma");
var User_1 = require("../../../modules/gerenciamento/infra/typeorm/entities/User");
var UserTokens_1 = require("../../../modules/gerenciamento/infra/typeorm/entities/UserTokens");
var _1630774059682_CreateUser_1 = require("./migrations/1630774059682-CreateUser");
var _1630774328927_CreateProfessor_1 = require("./migrations/1630774328927-CreateProfessor");
var _1630776063267_CreateCargaDocente_1 = require("./migrations/1630776063267-CreateCargaDocente");
var _1630778469728_CreateCurso_1 = require("./migrations/1630778469728-CreateCurso");
var _1630779661185_CreateDisciplina_1 = require("./migrations/1630779661185-CreateDisciplina");
var _1630780868165_CreateHorario_1 = require("./migrations/1630780868165-CreateHorario");
var _1630782202028_CreateSemana_1 = require("./migrations/1630782202028-CreateSemana");
var _1630782695141_CreateSemestres_1 = require("./migrations/1630782695141-CreateSemestres");
var _1630794708544_CreateTurma_1 = require("./migrations/1630794708544-CreateTurma");
var _1630797006420_CreateMinistra_1 = require("./migrations/1630797006420-CreateMinistra");
var _1630845113046_CreateUsersToken_1 = require("./migrations/1630845113046-CreateUsersToken");
var _1631207525145_AlterTableCargaDocenteChangePrimaryKey_1 = require("./migrations/1631207525145-AlterTableCargaDocenteChangePrimaryKey");
var _1631281746815_AlterTableMinistraChangePrimaryKey_1 = require("./migrations/1631281746815-AlterTableMinistraChangePrimaryKey");
var _1635634417497_CreateAuditoriaFila_1 = require("./migrations/1635634417497-CreateAuditoriaFila");
var _1635691339744_CreateAuditoriaFilaNew_1 = require("./migrations/1635691339744-CreateAuditoriaFilaNew");
var _1635723667625_CreateAuditoriaPrioridade_1 = require("./migrations/1635723667625-CreateAuditoriaPrioridade");
var _1635785698510_CreateEtapa_1 = require("./migrations/1635785698510-CreateEtapa");
var _1635798864757_CreatePrioridades_1 = require("./migrations/1635798864757-CreatePrioridades");
var _1635867934993_CreateStatusDistribuicao_1 = require("./migrations/1635867934993-CreateStatusDistribuicao");
var _1635887937042_CreateCenario_1 = require("./migrations/1635887937042-CreateCenario");
var _1635944928644_CreatePossibilidades_1 = require("./migrations/1635944928644-CreatePossibilidades");
var _1635968706085_CreateAtribuicaoManual_1 = require("./migrations/1635968706085-CreateAtribuicaoManual");
var _1636031790304_CreateOferta_1 = require("./migrations/1636031790304-CreateOferta");
var _1636053364363_CreateRestricoes_1 = require("./migrations/1636053364363-CreateRestricoes");
var _1636063238625_CreateDistribuicaoCarga_1 = require("./migrations/1636063238625-CreateDistribuicaoCarga");
var _1636076744582_CreateDistribuicoesPossibilidade_1 = require("./migrations/1636076744582-CreateDistribuicoesPossibilidade");
var _1636122729594_CreateFila_1 = require("./migrations/1636122729594-CreateFila");
var _1636146045640_CreateFilaTurmaNew_1 = require("./migrations/1636146045640-CreateFilaTurmaNew");
var _1636196509376_CreateCenarioFilaTurma_1 = require("./migrations/1636196509376-CreateCenarioFilaTurma");
var _1636221018524_AlterTableIsUniqueStatusDistribuicao_1 = require("./migrations/1636221018524-AlterTableIsUniqueStatusDistribuicao");
var _1636221364682_CreateStatusPossibilidades_1 = require("./migrations/1636221364682-CreateStatusPossibilidades");
var _1659541099710_LigarUsuarioComProfessor_1 = require("./migrations/1659541099710-LigarUsuarioComProfessor");
require("dotenv").config();
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL ||
        "postgres://postgres:a1s2d3@localhost:5432/disciplinas",
    host: process.env.TYPEORM_HOST || "localhost",
    port: 5432,
    username: process.env.TYPEORM_USERNAME || "postgres",
    password: process.env.TYPEORM_PASSWORD || "a1s2d3",
    database: process.env.TYPEORM_DATABASE || "disciplinas",
    logging: true,
    migrations: [
        _1630774059682_CreateUser_1.CreateUser1628620725509,
        _1630774328927_CreateProfessor_1.CreateProfessor1628703770650,
        _1630776063267_CreateCargaDocente_1.CreateCargaDocente1630151928753,
        _1630778469728_CreateCurso_1.CreateCurso1629829824555,
        _1630779661185_CreateDisciplina_1.CreateDisciplina1629842575630,
        _1630780868165_CreateHorario_1.CreateHorario1630070405044,
        _1630782202028_CreateSemana_1.CreateSemana1630029377547,
        _1630782695141_CreateSemestres_1.CreateSemestre1629978581031,
        _1630794708544_CreateTurma_1.CreateTurma1629995830489,
        _1630797006420_CreateMinistra_1.CreateMinistra1630258332236,
        _1630845113046_CreateUsersToken_1.CreateUsersToken1630845113046,
        _1631207525145_AlterTableCargaDocenteChangePrimaryKey_1.AlterTableCargaDocenteChangePrimaryKey1631207525145,
        _1631281746815_AlterTableMinistraChangePrimaryKey_1.AlterTableMinistraChangePrimaryKey1631281746815,
        _1635634417497_CreateAuditoriaFila_1.CreateAuditoriaFila1635634417497,
        _1635691339744_CreateAuditoriaFilaNew_1.CreateAuditoriaFilaNew1635691339744,
        _1635723667625_CreateAuditoriaPrioridade_1.CreateAuditoriaPrioridade1635723667625,
        _1635785698510_CreateEtapa_1.CreateEtapa1635785698510,
        _1635798864757_CreatePrioridades_1.CreatePrioridades1635798864757,
        _1635867934993_CreateStatusDistribuicao_1.CreateStatusDistribuicao1635867934993,
        _1635887937042_CreateCenario_1.CreateCenario1635887937042,
        _1635944928644_CreatePossibilidades_1.CreatePossibilidades1635944928644,
        _1635968706085_CreateAtribuicaoManual_1.CreateAtribuicaoManual1635968706085,
        _1636031790304_CreateOferta_1.CreateOferta1636031790304,
        _1636053364363_CreateRestricoes_1.CreateRestricoes1636053364363,
        _1636063238625_CreateDistribuicaoCarga_1.CreateDistribuicaoCarga1636063238625,
        _1636076744582_CreateDistribuicoesPossibilidade_1.CreateDistribuicoesPossibilidade1636076744582,
        _1636122729594_CreateFila_1.CreateFila1636122729594,
        _1636146045640_CreateFilaTurmaNew_1.CreateFilaTurmaNew1636146045640,
        _1636196509376_CreateCenarioFilaTurma_1.CreateCenarioFilaTurma1636196509376,
        _1636221018524_AlterTableIsUniqueStatusDistribuicao_1.AlterTableIsUniqueStatusDistribuicao1636221018524,
        _1636221364682_CreateStatusPossibilidades_1.CreateStatusPossibilidades1636221364682,
        _1659541099710_LigarUsuarioComProfessor_1.LigarUsuarioComProfessor1659541099710,
    ],
    entities: [
        User_1.User,
        UserTokens_1.UserTokens,
        CargaDocente_1.CargaDocente,
        Curso_1.Curso,
        Disciplina_1.Disciplina,
        Horario_1.Horario,
        Ministra_1.Ministra,
        Professor_1.Professor,
        Semana_1.Semana,
        Semestre_1.Semestre,
        Turma_1.Turma,
        AtribuicaoManual_1.AtribuicaoManual,
        AuditoriaFila_1.AuditoriaFila,
        AuditoriaFilaNew_1.AuditoriaFilaNew,
        AuditoriaPrioridade_1.AuditoriaPrioridade,
        Cenario_1.Cenario,
        CenarioFilaTurma_1.CenarioFilaTurma,
        DistribuicaoCarga_1.DistribuicaoCarga,
        DistribuicoesPossibilidade_1.DistribuicoesPossibilidade,
        Etapa_1.Etapa,
        Fila_1.Fila,
        FilaTurma_1.FilaTurma,
        FilaTurmaNew_1.FilaTurmaNew,
        Oferta_1.Oferta,
        Possibilidades_1.Possibilidades,
        Prioridades_1.Prioridades,
        Restricoes_1.Restricoes,
        StatusDistribuicao_1.StatusDistribuicao,
        StatusPossibilidades_1.StatusPossibilidades,
    ],
});
// export default async (host = config.host): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();
//
//   return createConnection(
//     Object.assign(config, {
//       host,
//       database:
//         process.env.NODE_ENV === "test"
//           ? "disciplinas_test"
//           : defaultOptions.database,
//     })
//   );
// };
