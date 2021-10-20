const {Users} = require("../../models");
const crypto = require("crypto");
const service = async function(req, res, next) {
    try {
        const payload = req.body;
        const id = await crypto.randomBytes(18).toString('hex');
        payload.id = id;
        const requestDB = await Users.create(payload);
        return res.json({msg:"Data Berhasil Ditambahkan", data:requestDB});
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
};

module.exports = {service}