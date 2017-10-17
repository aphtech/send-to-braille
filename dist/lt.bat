@echo off
rem Quick and Dirty Braille
rem Get location of this file
set x=%~dps0
set louis_tablepath=%x%tables\
set louflg=""
rem Set the translation table, this one is English UEB contracted
set table=en-ueb-g2.ctb
call %x%settable.bat

rem pandoc to text then LouTran to braille with .brl appended to original file name
%x%pandoc -t plain --wrap=preserve %1 2> %temp%\pandoc.log|%x%lou_translate %table%> %1.brl 2> %temp%\lou_translate.log
rem Open editor. Rem the following line to skip this step
rem %x%bz.jar "%~1.brl"
rem if you want, add a line like the one below to copy to a card. Set target to your drive
set target=f:
rem copy "%~1.brl" target
