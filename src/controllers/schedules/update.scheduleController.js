const {Schedules} = require("../../models");
const service = async function(req, res, next) {
    try {
        const payload = req.body;
    const where = {id: req.params.id};
    const requestDB = await Schedules.update(payload, {where});
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