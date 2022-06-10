(function() {
    if(window.WebSocket){
        ws = new WebSocket('ws://127.0.0.1:8014/');
        ws.onopen = function(e){
            console.log("connect");
            ws.send("Browser");
        }
        ws.onclose = function(e){
            console.log("server closed");
        }
        ws.onerror = function(){
            console.log("failed");
        }
        ws.onmessage = function(e){
            var url = e.data
            console.log(url)
            window.fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
            }).then(response => response.text()).then(data => ws.send(data))
        }
    }
})();