#define app="SendToBraille"
[setup]
AppVerName=Send To Braille Shortcut 2.0.00
#define setup="lt_setup"
#define fol="pub\\"

[files]


[setup]
AppPublisher=APH
AppPublisherURL=http://tech.aph.org
AppSupportURL=http://tech.aph.org
AppUpdatesURL=http://tech.aph.org
DisableProgramGroupPage=yes
;LicenseFile=license.txt
PrivilegesRequired=none
DirExistsWarning=no
UsePreviousAppDir=yes
appName={#= app}
DefaultDirName={localappdata}\{#= app}
;DefaultGroupName={#= app}
UninstallDisplayName={#= app}
OutputBaseFileName={#= setup}
;WizardImageFile=graphics\lt_wif.bmp
;WizardSmallImageFile=graphics\lt_wsif.bmp
UninstallDisplayIcon={app}\lt.exe
MinVersion = 0,6.0

[Files]
Source: "dist\*.*"; DestDir: "{app}"; Flags: recursesubdirs;
Source: doc\lt_*; DestDir: {app};
;Source: ..\doc\lt_image\*.*; DestDir: {app}\lt_image;

[Icons]
Name: {usersendto}\Braille; Filename: {app}\lt.bat; Flags: runminimized; WorkingDir: .
Name: {usersendto}\Uncontracted Braille; Filename: {app}\lt1.bat; Flags: runminimized; WorkingDir: .
Name: {usersendto}\Back From Braille; Filename: {app}\ltback.bat; Flags: runminimized; WorkingDir: .
