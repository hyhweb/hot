module.exports = app =>{
    app.get('/user/list','user.getList');
   // app.post('/user/insert','user.insert');
    app.post('/user/login','user.login');
    app.post('/user/pageList','user.getPageList');
    app.post('/user/insert','user.insert');
    app.post('/user/delete','user.delete');
    app.post('/user/update','user.update');
    app.get('/user/select','user.select');
}