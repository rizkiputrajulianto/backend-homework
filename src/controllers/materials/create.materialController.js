const {Schedules, Materials} = require("../../models");
const crypto = require('crypto');

const service = async function(req, res, next) {
    try {
        const payload = req.body;
        const requestDBrel = await Schedules.findAll();
        for (let i = 0; i < requestDBrel.length; i++) {
            if (payload.scheduleId == requestDBrel[i].code) {
                payload.scheduleId = requestDBrel[i].id
            }
        };
        const id = await crypto.randomBytes(18).toString('hex');
        payload.id = id;
        const requestDB = await Materials.create(payload);
        return res.json({msg:"Data Berhasil Di Tambahkan", data: requestDB});
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service}