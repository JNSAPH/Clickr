import pyautogui, asyncio
from websocket import create_connection


def main():
    ws = create_connection("wss://clicker.jnsaph.com/ws")
    while True:
        greeting = ws.recv()
        if greeting == "next":
        # Next
            print("[CMD] Next Slide")
            pyautogui.press("right")
        elif greeting == "back": 
        # Previous
            print("[CMD] Previous Slide")
            pyautogui.press("left")
        else:
            print(greeting)

if __name__ == "__main__":
    # execute only if run as a script
    main()