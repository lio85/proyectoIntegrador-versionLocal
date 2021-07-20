const {validationResult}= require ('express-validator');

let userController = {
    register: function(req,res){
        return res.render('users/register');
    },
    registerProcess: function(req,res){
        const errors= validationResult(req);
        res.send(errors);
    },
    profile: function(req,res){
        res.render('users/profile'); 
    },

    login: function(req,res){
        res.render('users/login'); 
    }
}

module.exports = userController;