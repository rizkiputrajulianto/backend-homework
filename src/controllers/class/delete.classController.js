const {Classes} = require("../../models");

const service = async function(req, res, next) {
    try {
        const where = {id:req.params.id};
        const requestDB = await Classes.destroy({where});
        if (requestDB == 1) {
            return res.json({msg:"Data Berhasil Di Hapus"});
        } else{
            return res.status(404).json({msg:"Data Gagal Untuk dihapus"});
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
}

module.exports = {service}