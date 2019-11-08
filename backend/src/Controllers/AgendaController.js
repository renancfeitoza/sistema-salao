const Agenda = require("../Model/Agenda");

module.exports = {
    async store(req, res) {

        const {
            cliente_id,
            funcionario_id,
            servico_id,
            produto_id,
            data_agendada,
            tempo_atendimento } = req.body

        const agenda = await Agenda.create({
            cliente_id,
            funcionario_id,
            servico_id,
            produto_id,
            data_agendada,
            tempo_atendimento
        })

        return res.json(agenda);
    },
    async index(req, res) {

        const { data_agenda } = req.query;
        const agendas_dia = await Agenda.find({ data_agendada: data_agenda })
        return res.json(agendas_dia);

    },
    async update(req, res) {
        const {
            cliente_id,
            funcionario_id,
            servico_id,
            produto_id,
            data_agendada,
            tempo_atendimento } = req.body

        const { agendaId } = req.headers;
        const query = { _id: agendaId }

        Agenda.update(query,
            {
                set: {
                    cliente_id,
                    funcionario_id,
                    servico_id,
                    produto_id,
                    data_agendada,
                    tempo_atendimento
                }
            })
        //fazer a logica
    }
}