@echo off
set x=%userprofile%\appdata\local\
set lt=%x%LouTran
if not exist %lt% md %lt%
md "%lt\tables"
copy *.* "%lt%"
copy tables\*.* "%lt%\tables"
copy Braille.lnk "%userProfile%\appdata\Roaming\Microsoft\Windows\SendTo"
echo You should now have a SendTo shortcut for braille
echo To use it, point to a file in File Explorer, thes select Braille from the Send To context menu.
pause
