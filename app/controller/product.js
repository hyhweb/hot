module.exports = app =>{
    class ProductController extends app.Controller {
        * getList(){
            const { ctx, service } = this;
            const result = yield service.product.getList();
            if(result){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }
        * getPageList(){
            const {ctx, service} = this;
            const param = ctx.request.body;
            const result = yield service.product.getPageList(param);
            if(result){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }
        // 新增用户
        *insert(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.product.insert(row);
            if(result.affectedRows == 1){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }
        *delete(){
            const { ctx, service } = this;
            const id = ctx.request.body.id;
            const result = yield service.product.delete(id);
            if(result){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }
        *update(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.product.update(row);
            if(result.affectedRows == 1){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }
        *select(){
            const { ctx, service } = this;
            const id = ctx.query.id;
            const result = yield service.product.select(id);
            if(result){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }
    }
    return ProductController;
}