/* const result = yield app.mysql.insert('posts', { title: 'Hello World' });
            const insertSuccess = result.affectedRows === 1;*/


module.exports = app =>{
    class User extends app.Service {
        //获取所有用户
        *getList(){
            const list = yield app.mysql.select('user');
            return list;
        }
        // 新增用户
        *insert(param){
            const row = {
                user_name:param.user_name,
                user_password:param.user_password
            }
            const result = yield app.mysql.insert('user',row);
            return result;
        }
        //用户登录
        *login(param){
            const row = {
                user_name:param.user_name,
                user_password:param.user_password
            }
            const result = yield app.mysql.get('user',row);
            return result;
        }
        //分页列表
        *getPageList(param){
            const row = {
                ...param,
                page:param.page,
                pageSize:param.pageSize
            }
            const results = yield app.mysql.select('user',{
                // where: { status: 'draft' },
                orders: [['create_time','desc']],
                limit: param.pageSize|| 10,
                offset: param.page || 0
            });
            return results;
        }
        //新增
        *insert(param){
            const row ={
                ...param
            }
            const results = yield app.mysql.insert('user',row);
            return results;
        }
        //删除
        *delete(param){
            const results = yield app.mysql.delete('user',{
                user_id:param.user_id
            })
            return results;
        }
        //更新
        *update(param){
            const row = {
                ...param
            }
            const results = yield app.mysql.update('user',row);
            return results;
        }
        //查询
        *select(id){
            const row = {
                user_id:id
            }
            const results = yield app.mysql.get('user',row);
            return results;
        }
    }
    return User;
}