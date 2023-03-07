let c = console.log
let port = 3000
let host = "172.23.3.96"
let app = require("express")()

app.get("/", function(req,res){
    res.send("<h1>jdshgfhsdf</h1>")
})

app.listen(port, host, function(err){
    if(err){
        c(err)
    }else{ 
        c("Сервер запущен !")
        c(`http://localhost:3000/`)
    }
}) 