module.exports = (app)=>{
     app.post('/product/list','product.getList');
     app.post('/product/pageList','product.getPageList');
     app.post('/product/insert','product.insert');
     app.post('/product/delete','product.delete');
     app.post('/product/update','product.update');
     app.get('/product/select','product.select');
}