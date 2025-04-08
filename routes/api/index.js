const apiRouter= require('express').Router();
const controllers = require('../../controllers');
const artValidator = require('../../validators');

apiRouter.post('/', artValidator,(req, res) => {
    try{
        controllers.add(req.body)
        res.redirect('/');
    }catch(err){
        res.render('error', {error: err.message});
    }
});

apiRouter.post('/edit', artValidator, (req, res) => {
    try{
        controllers.put(req.body)
        res.redirect(`/`);
    }catch(err){
        res.render('error', {error: err.message});
    }
});

apiRouter.get('/delete/:id', (req, res) => {
   try{
        controllers.delete(req.params);
        res.redirect('/');
    }catch(err){
        res.render('error', {error: err.message});
    }
});

module.exports=apiRouter