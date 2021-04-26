import pyautogui, websockets, asyncio

async def hello():
    async with websockets.connect('ws://51.89.52.49:1213') as websocket:
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
