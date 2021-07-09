class user {
    user(){
        this.name = '';
    }
    getInfo(){
        return { name:this.name};
    }
}
module.exports =user;