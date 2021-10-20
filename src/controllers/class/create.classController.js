const {Classes} = require("../../models");
const service = async function(req, res, next) {
    try {
        const payload = req.body;
        const requestDB = await Classes.create(payload);
        return res.json({msg:"Data Berhasil Ditambahkan", data:requestDB});
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
};

module.exports = {service}