::: {style="float:left"}
![APH logo](https://tech.aph.org/lt/lt_image/aph_72.png)
:::

::: {style="float:right"}
![APH logo](https://tech.aph.org/lt/lt_image/aph_72.png)
:::

[]{#Send-to-Braille}

Send to Braille[¶](#Send-to-Braille){.wiki-anchor}
==================================================

Send To Braille is a tool to create quick and dirty braille files. It
adds a shortcut to your Send To folder, so you can select one or more
files, right click and pick Send To, then pick Braille. It creates a
braille version of the file with minimal formatting in the same folder
with .brl appended to the end of the original file\'s name. It keeps the
original extension to help you see the original file\'s source, so if
you translate test.doc, you end up with test.doc.brl.\
Send To Braille Shortcut produces \"Quick and dirty\" braille. It is a
translation only, much like you get from screen reader output. It is not
formatted in any way except to try to preserve paragraphs. Headings and
list items are generally on their own lines, but exact results depend on
the original file. [Pandoc](https://www.pandoc.org){.external} converts
the file into plain text before sending it to the
[Liblouis](https://www.liblouis.org){.external} translator.\
Correct braille transcription depends on a human to make several
decisions and provide additional value to titles that are not generally
accessible in some way. Some documents, however, may have enough
information without the additional attention to justify a quick and
dirty translation. And, this is where the Send To Braille shortcut comes
in.

What\'s new in version 2.0.0
----------------------------

<div>

[What\'s New](lt_new.htm) []{#Installation}

Installation[¶](#Installation){.wiki-anchor}
--------------------------------------------

To install the shortcut, run the [lt\_setup.exe
file](https://tech.aph.org/lt_setup.exe){.external}. Once installed, you
have three new items in the Send To folder.

  Shortcut               Description
  ---------------------- ---------------------------------------------------
  Braille                Converts selected file(s) to braille
  Back from braille      Converts selected file(s) to ascii text
  Uncontracted braille   Converts selected file(s) to uncontracted braille

[]{#How-to-Use}

How to Use[¶](#How-to-Use){.wiki-anchor}
----------------------------------------

To translate a file, do the following:

1.  Open File Explorer (On newer versions of Windows, use Windows + E.)
2.  Highlight the file(s) to translate.
3.  Right click or press the Applications key. Windows responds with a
    context menu.
4.  Select Send To from the context menu. Windows responds with a list
    of places to which you may send the file.
5.  Select Braille or Un contracted from the Send To list.

If you want to reverse translate a document back from braille, select
Back from Braille from the same context menu. []{#How-it-Works}

How it Works[¶](#How-it-Works){.wiki-anchor}
--------------------------------------------

The Send To Braille Shortcut employs the services of two excellent
libraries to do its job.\
[Pandoc](https://pandoc.org){.external} is a file conversion tool.\
[Liblouis](https://liblouis.org){.external} is an international braille
code translator.\
Send To Braille is a shortcut that combines these two tools and gives
you an interface to use them conveniently.

[]{#Customization}

Customization[¶](#Customization){.wiki-anchor}
----------------------------------------------

[]{#Tables}

### Tables[¶](#Tables){.wiki-anchor}

Send To Braille comes set up with Unified English Braille (UEB)
translation, but you may easily change it to translate any supported
braille code in any supported language.\
To change the table Send To Braille passes to Liblouis, the translator,
do the following:

1.  Open the SendToBraille folder by activating the Run command and
    typing userprofile\\appdata\\local\\SendToBraille into the edit box
    that appears, then press Enter.
2.  Find the file called lt.bat and open it with a plain text editor.
3.  Find the line that says, \"set table=en-ueb-g2.ctb\" and change the
    \"en-ueb-g2.ctb\" to the Liblouis translation table file you wish to
    use. Consult the [Liblouis
    documentation](https://liblouis.org/documentation/liblouis.html#Overview){.external}
    for which tables to use for the language and code of interest.

[]{#Additional-Tasks}

### Additional Tasks[¶](#Additional-Tasks){.wiki-anchor}

You can edit the lt.bat file to either open an editor after the
translation or copy the file straight to an SD card or another device.

[]{#Other-Platforms}

### Other Platforms[¶](#Other-Platforms){.wiki-anchor}

This shortcut runs on Windows. We encourage others to create similar
shortcuts for OSX or Linux. With help from the community we will be
willing to host other versions, test, and sign them for all to use.

### build your own version

### 

1.  Download latest Inno Setup 6.2 is recommended
2.  unzip pandoc into dist folder.
3.  remove pandoc.zip
4.  Select lt.iss to open inno setup
5.  Press F9 when Inno setup is up
6.  In the send-to-braille\\output folder a lt\_setup.exe will be
    generated
7.  Enjoy

</div>
