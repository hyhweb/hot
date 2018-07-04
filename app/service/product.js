module.exports = app =>{
    class Product extends app.Service {
        //所有产品
        *getList(){
            const results = yield app.mysql.select('product');
            return results;
        }
        //分页列表
        *getPageList(param){
            const row =param;
            row.page=param.page;
            row.pageSize=param.pageSize;
            const results = yield app.mysql.select('product',{
               // where: { status: 'draft' },
                orders: [['create_time','desc'], ['product_id','desc']],
                limit: param.pageSize|| 10,
                offset: param.page || 0
            });
            return results;
        }
        //新增
        *insert(param){
            const row =param;
            const results = yield app.mysql.insert('product',row);
            return results;
        }
        //删除
        *delete(param){
            const results = yield app.mysql.delete('product',{
                product_id:param.product_id
            })
            return results;
        }
        //更新
        *update(param){
            const row = param;
            const results = yield app.mysql.update('product',row);
            return results;
        }
        //查询
        *select(id){
            const row = {
                product_id:id
            }
            const results = yield app.mysql.get('product',row);
            return results;
        }
    }
    return Product;
}