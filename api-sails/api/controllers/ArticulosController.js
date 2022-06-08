/**
 * ArticulosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getAllArticles: async function(req,res){
        var misArticulos = await Articulos.find();
        res.ok(misArticulos);
    },
    post: async function(req,res){
        var params = req.allParams();
        if(!params.nombre)
          return req.badRequest('El nombre es necesario');
        var resArticle = await Articulos.create(params).fetch();
        return res.ok(resArticle);
      },
     
      put: async function(req,res){
        var params = req.allParams();
        var id = params.id;
        delete params.id;   
        var resArticle = await Users.update({id: id}, params).fetch();
        return res.ok(resArticle);
      },
     
      delete: async function(req,res){
        var id = req.param('id');
        var resArticle = await Users.destroy({id:id}).fetch();
        return res.ok(resArticle);
      }
     
};

