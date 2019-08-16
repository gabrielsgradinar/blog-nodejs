if(process.env.NODE_ENV == "production"){
    module.exports = {
        mongoURI: "mongodb+srv://root:root@cluster0-swyzt.mongodb.net/omnistack8?retryWrites=true&w=majority"
    }
}else{
    module.exports = {
        mongoURI: "mongodb://localhost/blogapp"
    }
}