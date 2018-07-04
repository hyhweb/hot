module.exports = {
    apiResponse(data,status,message){
        let result = {};
            result.code = status?"1":"0";
            result.success = status;
            result.data = data;
            if(message==undefined){
                result.message =status?"操作成功":"操作失败";
            }else{
                result.message =message;
            }
        return result;
    }
}