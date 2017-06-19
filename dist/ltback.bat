@echo off
rem Quick and Dirty Braille
rem Get location of this file
set x=%~dps0
set louis_tablepath=%x%tables\
set louflg="-b"
rem Set the translation table, this one is English UEB contracted
set table=en-ueb-g2.ctb
rem call %x%settable.bat

type %1|%x%lou_translate %louflg% %table%> %1.txt
rem Open editor. Rem the following line to skip this step
rem %x%bz.jar "%~1.brl"
rem if you want, add a line like the one below to copy to a card. Set target to your drive
set target=f:
rem copy "%~1.brl" target
