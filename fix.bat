@echo off
.\adb.exe kill-server
.\adb.exe start-server
.\adb.exe wait-for-device
echo Done!