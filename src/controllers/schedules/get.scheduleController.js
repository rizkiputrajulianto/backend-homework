const {Schedules, Classes} = require("../../models");

const service = async function(req, res, next) {
    try {
        const where = {};
        if (req.params.id) {
            where.id = req.params.id
        };
        const requestDB = await Schedules.findAll({where, include:{model:Classes, as:"classes"}});
        // const requestDBrel = await Classes.findAll();
        // for (let i = 0; i < requestDB.length; i++) {
        //     for (let j = 0; j < requestDBrel.length; j++) {
        //         if (requestDB[i].classesId == requestDBrel[j].id) {
        //             requestDB[i].classesId = requestDBrel[j]
        //         }
                
        //     }
            
        // }

        if (!req.params.id) {
        return res.json(requestDB);
        } else{
            if (requestDB.length<1) {
                return res.status(404).json({msg:"Data Tidak Dapat Ditemukan"});
            } else {
                return res.json(requestDB[0]);
            }
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString()});
    }
};

module.exports = {service}