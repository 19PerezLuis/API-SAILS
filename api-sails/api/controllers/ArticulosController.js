/**
 * ArticulosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getAllArticles: async function(req,res){
        var misArticulos = await Users.find();
        res.ok(misArticulos);
    }

};

