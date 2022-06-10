# Tiktok Web RPC Demo

## Install
```shell
git clone https://github.com/nibnil/tiktok-web-rpc-demo.git
cd tiktok-web-rpc-demo
# python env
python -m venv venv
source venv/bin/activate
pip install pip -U
pip install -r requirements.txt -U
# js env
npm install nodejs-websocket
```

## Start
1. open [tiktok](https://www.tiktok.com) and login
2. get url(without x-Bogus & signature) from [tiktok](https://www.tiktok.com)
3. edit [client.py](client.py) to change **url_**(without x-Bogus & signature)
4. ```shell
   node ws_server.js
   ```
5. open console, copy and input [browser.js](browser.js) content
6. ```shell
   python client.py
   ```

## Idea From
[一套rpc通杀某音，某店，某川](https://mp.weixin.qq.com/s/3sgODvF-v-yGe5IfoyXI8Q)