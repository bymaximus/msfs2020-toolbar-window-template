var IngamePanelCustomPanelLoaded = false;
document.addEventListener('beforeunload', function () {
    IngamePanelCustomPanelLoaded = false;
    /*var iframe = document.querySelector("#CustomPanelIframe");
    if (iframe) {
        iframe.src = "";
    }
    var CustomPanelWrap = document.querySelector("#CustomPanelWrap");
    if (CustomPanelWrap) {
        CustomPanelWrap.innerHTML += "unload"+(new Date()).toString();
    }*/
}, false);
class IngamePanelCustomPanel extends HTMLElement {
    constructor() {
        super();
        console.log('IngamePanelCustomPanel2');
        var iframe = document.querySelector("#CustomPanelIframe");
        if (iframe) {
            iframe.src = "https://skyvector.com/";
        }
    }
    isDebugEnabled() {
        var self = this;
        if (typeof g_modDebugMgr != "undefined") {
            g_modDebugMgr.AddConsole(null);
            g_modDebugMgr.AddDebugButton("ButtonCustomID1", function() {
                console.log('ButtonCustomID1');
                console.log(self.instrumentIdentifier);
            });
            g_modDebugMgr.AddDebugButton("ButtonCustomTemplateID1", function() {
                console.log('ButtonCustomTemplateID1');
                console.log(self.templateID);
            });
            g_modDebugMgr.AddDebugButton("ButtonCustomSource1", function() {
                console.log('ButtonCustomSource1');
                console.log(window.document.documentElement.outerHTML);
            });
        } else {
            Include.addScript("/JS/debug.js", function () {
                if (typeof g_modDebugMgr != "undefined") {
                    g_modDebugMgr.AddConsole(null);
                    g_modDebugMgr.AddDebugButton("ButtonCustomID2", function() {
                        console.log('ButtonCustomID2');
                        console.log(self.instrumentIdentifier);
                    });
                    g_modDebugMgr.AddDebugButton("ButtonCustomTemplateID2", function() {
                        console.log('ButtonCustomTemplateID2');
                        console.log(self.templateID);
                    });
                    g_modDebugMgr.AddDebugButton("ButtonCustomSource2", function() {
                        console.log('ButtonCustomSource2');
                        console.log(window.document.documentElement.outerHTML);
                    });
                } else {
                    /*setTimeout(() => {
                        self.isDebugEnabled();
                    }, 2000);*/
                }
            });
        }
    }
    connectedCallback() {
        var self = this;
        /*setTimeout(() => {
            self.isDebugEnabled();
        }, 1000);*/
        console.log('IngamePanelCustomPanel1');

        this.m_MainDisplay = document.querySelector("#MainDisplay");
        this.m_MainDisplay.classList.add("hidden");

        this.m_Footer = document.querySelector("#Footer");
        this.m_Footer.classList.add("hidden");

        /*this.m_CustomPanelWrap = document.querySelector("#CustomPanelWrap");
        this.m_CustomPanelWrap.innerHTML += "asdas"+(new Date()).toString();*/

        var iframe = document.querySelector("#CustomPanelIframe");
        if (iframe) {
            iframe.src = "https://skyvector.com/";
        }
        /*this.m_ButtonElement = document.querySelector("#DeviceType");
        this.m_ImageElement = document.getElementById("DeviceImage");
        this.m_ButtonElement.addEventListener("OnValidate", (e) => {
            this.updateImage();
        });*/
    }
    updateImage() {
    }
}
window.customElements.define("ingamepanel-custom", IngamePanelCustomPanel);
checkAutoload();