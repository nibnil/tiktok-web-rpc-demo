var ws = require("nodejs-websocket")
console.log("Connect")

var cached = {}

var server = ws.createServer(function(conn){
    conn.on("text", function (msg) {
        if (!msg) return;
        console.log("msg", msg);
        var key = conn.key;
        if ((msg === "Browser") || (msg === "Python")){
            // browser or python first connection
            cached[msg] = key;
            console.log("cached", cached);
            return;
        }
        console.log('cached', cached);
        console.log('key', key)
        if (Object.values(cached).includes(key)){
            console.log('server',server.connections.forEach(conn=>conn.key));
            var targetConn = server.connections.filter(function(conn){
                return conn.key !== key;
            })
            console.log('targetConn',targetConn.key);
            targetConn.forEach(conn=>{
                conn.send(msg);
            })
        }
    })
    conn.on("close", function (code, reason) {
        console.log("close connection")
    });
    conn.on("error", function (code, reason) {
        console.log("error")
    });
}).listen(8014)
console.log("done")