import pyautogui, websockets, asyncio

async def hello():
    async with websockets.connect('wss://clicker.jnsaph.com/ws') as websocket:
        while True:
            greeting = await websocket.recv()
            if greeting == "next":
                # Next
                print("next")
                pyautogui.press("right")
            elif greeting == "back": 
                # Previous
                print("back")
                pyautogui.press("left")
            else:
                print(greeting)

asyncio.get_event_loop().run_until_complete(hello())