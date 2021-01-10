# msfs2020-toolbar-window-template
Microsoft FlightSimulator 2020 Toolbar Extra Window Template, this example loads UI window with ipify.org website SINCE SKYVECTOR is now blocking their website being loaded from iframe “X-Frame-Options“ = “SAMEORIGIN“.


To build the SPB if you have changed UI panel template definition run `build.bat` or manually

`SDK\Tools\bin\fspackagetool.exe maximus-ingamepanels-custom\Build\maximus-ingamepanels-custom.xml -nomirroring`

It will generate the SPB at `maximus-ingamepanels-custom\Build\Packages\maximus-ingamepanels-custom\Build` copy the SPB to `maximus-ingamepanels-custom\InGamePanels`.

Copy the package to community folder BUT DO NOT COPY the `maximus-ingamepanels-custom\Build` directory.

## screenshots

![example](example.png)
![example2](example2.png)
![example3](example3.png)