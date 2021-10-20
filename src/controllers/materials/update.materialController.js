const {Materials} = require("../../models");
const {Schedules} = require("../../models");
const service = async function(req, res, next) {
    try {
        const payload = req.body;
        const where = {id: req.params.id};
        const requestDBrel = await Schedules.findAll();
        for (let i = 0; i < requestDBrel.length; i++) {
            if (payload.scheduleId == requestDBrel[i].code) {
                payload.scheduleId = requestDBrel[i].id
            }
        };
        const requestDB = await Materials.update(payload, {where});
    if (requestDB[0]) {
        return res.json({msg:"Data Berhasil di Update", data: payload});
    } else {
        return res.status(404).json({msg:"Data Gagal di Update"});
    }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
    
}

module.exports = {service}