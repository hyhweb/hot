module.exports = app =>{
    class UserController extends app.Controller {
        //获取所有用户
        *getList(){
            const { ctx, service } = this;
            const result = yield service.user.getList();
            if(result){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }

        * getPageList(){
            const {ctx, service} = this;
            const param = ctx.request.body;
            const result = yield service.user.getPageList(param);
            if(result){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }

        //用户登录
        *login(){
            const {ctx, service} = this;
            const row = ctx.request.body;
            const result = yield service.user.login(row);
            if(result){
                ctx.body = app.apiResponse({user_name:result.user_name},true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }

        // 新增用户
        *insert(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.user.insert(row);
            if(result.affectedRows == 1){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }
        *delete(){
            const { ctx, service } = this;
            const id = ctx.request.body.id;
            const result = yield service.user.delete(id);
            if(result){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }
        *update(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.user.update(row);
            if(result.affectedRows == 1){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }
        *select(){
            const { ctx, service } = this;
            const id = ctx.query.id;
            const result = yield service.user.select(id);
            if(result){
                ctx.body = app.apiResponse(result,true);
            }else{
                ctx.body = app.apiResponse(result,false);
            }
        }

    }
    return UserController;
}