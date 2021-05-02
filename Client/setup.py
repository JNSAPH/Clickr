# Build using python .\setup.py build
from cx_Freeze import setup, Executable

executables = [Executable("script.py")]

setup(
    name="CLICKR",
    version="1.0",
    description="CLICKR Client",
    executables=executables,
)
