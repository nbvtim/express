let c = console.log
let port = 3000
let host = "localhost"
let app = require("express")()
let colors = require("colors")

app.get("/", function(req,res){
    res.send("<h1>Сережа не молодец !!</h1>")
})

app.listen(port, host, function(err){
    if(err){
        c(err)
    }else{ 
        c("Сервер запущен !".gray)
        c(`http://${host}:${port}/`.gray)
    }
}) 