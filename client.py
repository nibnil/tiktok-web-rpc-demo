import time

from ws4py.client.threadedclient import WebSocketClient

class WsClient(WebSocketClient):

    def opened(self):
        print('connect')
        self.send('Python')

    def closed(self, code, reason=None):
        self.close()
        print(f'Closed, Code({code}), Reason({reason})')

    def received_message(self, message):
        print(f'ReceiveMessage, Message({message})')


def post(ws: WsClient, url: str):
    ws.send(url)


if __name__ == '__main__':
    ws_ = WsClient('ws://127.0.0.1:8014')
    ws_.connect()
    time.sleep(1)
    # change this
    url_ = "https://t.tiktok.com/api/commit/follow/user/?aid=1988&app_language=&app_name=tiktok_web&battery_info=1&browser_language=&browser_name=Mozilla&browser_online=true&browser_platform=&browser_version=&channel=tiktok_web&channel_id=0&cookie_enabled=true&device_id=&device_platform=web_pc&focus_state=true&from=18&fromWeb=1&from_page=user&from_pre=0&history_len=2&is_fullscreen=false&is_page_visible=true&os=&priority_region=US&referer=&region=US&screen_height=1080&screen_width=1920&sec_user_id=&type=1&tz_name=&user_id=&webcast_language="
    post(ws=ws_, url=url_)
    ws_.run_forever()