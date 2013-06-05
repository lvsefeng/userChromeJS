// ==UserScript==
// @name           autoLanuchReader.uc.js
// @description    自动启用 小说阅读脚本 或 Evernote Clealy 或 Readability
// @author         ywzhaiqi
// @namespace      ywzhaiqi@gmail.com
// @include        main
// @charset        UTF-8
// @version        0.0.3
// @note           2013/06/04 ver0.003 修复诸多bug
// @note           2013/06/03 ver0.002 改用 Overlay
// @note           2013/06/02 ver0.001 js创建按钮
// ==/UserScript==

if (typeof window.autoReader != "undefined") {
    window.autoReader.unint();
    delete window.autoReader;
}

(function(css) {

    // 按钮鼠标中键点击自定义
    var middleButtonClicked = function(){
        
    };

    // Readability 在线版
    // var READER_TOOL_URL = "javascript:(function(){readStyle='style-newspaper';readSize='size-large';readMargin='margin-wide';_readability_script=document.createElement('SCRIPT');_readability_script.type='text/javascript';_readability_script.src='http://lab.arc90.com/experiments/readability/js/readability.js?x='+(Math.random());document.getElementsByTagName('head')%5B0%5D.appendChild(_readability_script);_readability_css=document.createElement('LINK');_readability_css.rel='stylesheet';_readability_css.href='http://lab.arc90.com/experiments/readability/css/readability.css';_readability_css.type='text/css';_readability_css.media='screen';document.getElementsByTagName('head')%5B0%5D.appendChild(_readability_css);_readability_print_css=document.createElement('LINK');_readability_print_css.rel='stylesheet';_readability_print_css.href='http://lab.arc90.com/experiments/readability/css/readability-print.css';_readability_print_css.media='print';_readability_print_css.type='text/css';document.getElementsByTagName('head')%5B0%5D.appendChild(_readability_print_css);})();";
    // 其他可选
    // Instapaper 在线版
    // javascript:function%20iprl5(){var%20d=document,z=d.createElement('scr'+'ipt'),b=d.body,l=d.location;try{if(!b)throw(0);d.title='(Saving...)%20'+d.title;z.setAttribute('src',l.protocol+'//www.instapaper.com/j/H88Ks3SLLP21?u='+encodeURIComponent(l.href)+'&t='+(new%20Date().getTime()));b.appendChild(z);}catch(e){alert('Please%20wait%20until%20the%20page%20has%20loaded.');}}iprl5();void(0)"}
    // Readable 在线版
    // "javascript:(function(){if(document.getElementsByTagName('html').length>0);else{return;}if(document.getElementsByTagName('body').length>0);else{return;}if(window.$readable);else{window.$readable={};window.$readable.path='http://readable-app.appspot.com/';}window.$readable.options={};window.$readable.options.base='better_readability';window.$readable.options.font_family='lucida';window.$readable.options.font_size='16';window.$readable.options.text_line_height='1_625';window.$readable.options.text_align='normal';window.$readable.options.text_image_align='center';window.$readable.options.text_box_width='30_em';window.$readable.options.text_box_align='center';window.$readable.options.text_box_outer_margin='1';window.$readable.options.text_box_inner_margin='2';window.$readable.options.color_theme='off_yellow_off_black';window.$readable.options.background_transparency='90';window.$readable.options.background_transparency_color='from_theme';window.$readable.options.video='strip';if(window.$readable.callScript){window.$readable.callScript();return;}if(document.getElementsByTagName('head').length>0);else{document.getElementsByTagName('html')[0].insertBefore(document.createElement('head'),document.getElementsByTagName('body')[0]);}document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src',window.$readable.path+'target.js?rand='+encodeURIComponent(Math.random()));})()"

    // var reader_tools = [
    //     { name: "小说阅读脚本", wrapped_command: "readx" },
    //     { name: "Evernote Clealy", command: function(){ window.__readable_by_evernote.readable_by_evernote__button__call();} },
    //     { name: "Readability 脚本版", wrapped_command: "X_readability" },
    //     // 在线版
    //     { name: "Readability 在线版", url: "javascript:(function(){readStyle='style-newspaper';readSize='size-large';readMargin='margin-wide';_readability_script=document.createElement('SCRIPT');_readability_script.type='text/javascript';_readability_script.src='http://lab.arc90.com/experiments/readability/js/readability.js?x='+(Math.random());document.getElementsByTagName('head')%5B0%5D.appendChild(_readability_script);_readability_css=document.createElement('LINK');_readability_css.rel='stylesheet';_readability_css.href='http://lab.arc90.com/experiments/readability/css/readability.css';_readability_css.type='text/css';_readability_css.media='screen';document.getElementsByTagName('head')%5B0%5D.appendChild(_readability_css);_readability_print_css=document.createElement('LINK');_readability_print_css.rel='stylesheet';_readability_print_css.href='http://lab.arc90.com/experiments/readability/css/readability-print.css';_readability_print_css.media='print';_readability_print_css.type='text/css';document.getElementsByTagName('head')%5B0%5D.appendChild(_readability_print_css);})();"},
    //     { name: "Instapaper 在线版", url: "javascript:function%20iprl5(){var%20d=document,z=d.createElement('scr'+'ipt'),b=d.body,l=d.location;try{if(!b)throw(0);d.title='(Saving...)%20'+d.title;z.setAttribute('src',l.protocol+'//www.instapaper.com/j/H88Ks3SLLP21?u='+encodeURIComponent(l.href)+'&t='+(new%20Date().getTime()));b.appendChild(z);}catch(e){alert('Please%20wait%20until%20the%20page%20has%20loaded.');}}iprl5();void(0)"},
    //     { name: "Readable 在线版", url: "javascript:(function(){if(document.getElementsByTagName('html').length>0);else{return;}if(document.getElementsByTagName('body').length>0);else{return;}if(window.$readable);else{window.$readable={};window.$readable.path='http://readable-app.appspot.com/';}window.$readable.options={};window.$readable.options.base='better_readability';window.$readable.options.font_family='lucida';window.$readable.options.font_size='16';window.$readable.options.text_line_height='1_625';window.$readable.options.text_align='normal';window.$readable.options.text_image_align='center';window.$readable.options.text_box_width='30_em';window.$readable.options.text_box_align='center';window.$readable.options.text_box_outer_margin='1';window.$readable.options.text_box_inner_margin='2';window.$readable.options.color_theme='off_yellow_off_black';window.$readable.options.background_transparency='90';window.$readable.options.background_transparency_color='from_theme';window.$readable.options.video='strip';if(window.$readable.callScript){window.$readable.callScript();return;}if(document.getElementsByTagName('head').length>0);else{document.getElementsByTagName('html')[0].insertBefore(document.createElement('head'),document.getElementsByTagName('body')[0]);}document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).setAttribute('src',window.$readable.path+'target.js?rand='+encodeURIComponent(Math.random()));})()"},
    // ];

    //var EXAMPLE_AUTO_SITE_TEXT = function () {/*
    //    http://www.cnbeta.com/articles/*.htm
    //    http://www.zhuzhudao.com/txt/*
    //*/}.toString().replace("function () {/*", "").replace("*/}", "").trim();

    var AUTO_SITE_TEXT = "";
    var AUTO_START = true;
    var BUTTON_ID = "autoReaderButton";

    let { classes: Cc, interfaces: Ci, utils: Cu, results: Cr } = Components;
    if (!window.Services) Cu.import("resource://gre/modules/Services.jsm");

    var ns = window.autoReader = {
        auto_sites_reg: [],
        currentMatch_siteText: "",

        get prefs() {
            delete ns.prefs;
            return ns.prefs = Services.prefs.getBranch("autoReader.");
        },
        get AUTO_START() AUTO_START,
        set AUTO_START(bool) {
            updateIcon();
            return AUTO_START = !! bool;
        },
        get AUTO_SITE_TEXT() AUTO_SITE_TEXT,
        set AUTO_SITE_TEXT(text) {
            ns.handleAutoSiteText(text);
            AUTO_SITE_TEXT = text;
        },

        init: function() {
            ns.style = addStyle(css);

            // addon-bar, urlbar-icons, nav-bar, PersonalToolbar
            ns.makeIcon("addon-bar");

            ns.loadSetting();

            ns.handleAutoSiteText();

            // addEventListener
            gBrowser.mPanelContainer.addEventListener('DOMContentLoaded', this, true);
            window.addEventListener('unload', this, false);
        },
        uninit: function() {
            gBrowser.mPanelContainer.removeEventListener('DOMContentLoaded', this, true);
            window.removeEventListener('unload', this, false);

            ["AUTO_START"].forEach(function(name) {
                try {
                    ns.prefs.setBoolPref(name, ns[name]);
                } catch (e) {}
            }, ns);

            ["AUTO_SITE_TEXT"].forEach(function(name) {
                try {
                    ns.prefs.setCharPref(name, ns[name]);
                } catch (e) {}
            }, ns);
        },
        handleEvent: function(event) {
            switch (event.type) {
                case "DOMContentLoaded":
                    if (this.AUTO_START) {
                        this.autoLaunch(event.target.defaultView);
                    }
                    break;
                case "unload":
                    this.uninit(event);
                    break;
            }
        },

        makeIcon: function(_toolbarId) {
            var _toolbar = $(_toolbarId);
            if(!_toolbar){
                throw("autoLaunchReader.uc.js 没有工具栏ID");
            }

            ns.icon = _toolbar.appendChild($C("toolbarbutton", {
                id: BUTTON_ID,
                class: "toolbarbutton-1",
                type: "context",
                removable: "true",
                state: ns.AUTO_START ? "on" : "off",
                label: "autoReader",
                onclick: "if (event.button != 2) autoReader.iconClick(event);",
                context: "autoReader-menupopup",
                tooltiptext: "左键调用阅读工具，右键弹出菜单",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVQ4jZ2TsUrDUBSGvxvzAg7qJA5BdBARI1ishYJ26uZLOBQtUpEMjhUr6KAgqC/gC7ipIKSCoiKOQTI4dnQ1N7kOkpomuZb6w4Fz7v3/w38O9wqlFAAV56UKbABzwBj56ACvQPO6Zd8DCKUUK9uP+4CjEeng3B4uHohyvV0FrgYUA4RAwYyCoPYPMcAQ0DAjKe30jXu+mmGX1m8yZwqKRijlaCglyYhhWRaWZXWbpnmRlONG9JP0RBIjy8fdvHNXy3DNKAi0Q/q+3+MGIM3/00EsijFstzLcviPMr1123eRx+zZI1p9vu7k76KB/upmZU7VnRFI+p7vOVC5+l5ZTJ+JJTJdPl4A2IHQuNPgCZoVSiqnSyQ6wB5gDiOueu3km4u88WThaALaAIjChEX4ALtB8f2h4AN/8SQfIa3maJAAAAABJRU5ErkJggg=="
            }));

            setTimeout(function(icon){
                icon.removeAttribute("image");
            }, 100, ns.icon);

            var xml = '\
                <menupopup id="autoReader-menupopup" onpopupshowing="autoReader.onPopupShowing();">\
                    <menuitem label="启用自动阅读器"\
                              id="autoReader-AUTOSTART"\
                              type="checkbox"\
                              autoCheck="true"\
                              checked="' + AUTO_START + '"\
                              oncommand="autoReader.toggle(event);"/>\
                    <hbox hidden="true">\
                        <textbox id="autoReader-autosite-textbox" cols="50"/>\
                        <toolbarbutton id="autoReader-autosite-button"\
                                class="toolbarbutton-1" tooltiptext="设置是否自动启用"\
                                oncommand="autoReader.onAutoSiteButtonCommand();"\
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJdSURBVDjLpZP7S1NhGMf9W7YfogSJboSEUVCY8zJ31trcps6zTI9bLGJpjp1hmkGNxVz4Q6ildtXKXzJNbJRaRmrXoeWx8tJOTWptnrNryre5YCYuI3rh+8vL+/m8PA/PkwIg5X+y5mJWrxfOUBXm91QZM6UluUmthntHqplxUml2lciF6wrmdHriI0Wx3xw2hAediLwZRWRkCPzdDswaSvGqkGCfq8VEUsEyPF1O8Qu3O7A09RbRvjuIttsRbT6HHzebsDjcB4/JgFFlNv9MnkmsEszodIIY7Oaut2OJcSF68Qx8dgv8tmqEL1gQaaARtp5A+N4NzB0lMXxon/uxbI8gIYjB9HytGYuusfiPIQcN71kjgnW6VeFOkgh3XcHLvAwMSDPohOADdYQJdF1FtLMZPmslvhZJk2ahkgRvq4HHUoWHRDqTEDDl2mDkfheiDgt8pw340/EocuClCuFvboQzb0cwIZgki4KhzlaE6w0InipbVzBfqoK/qRH94i0rgokSFeO11iBkp8EdV8cfJo0yD75aE2ZNRvSJ0lZKcBXLaUYmQrCzDT6tDN5SyRqYlWeDLZAg0H4JQ+Jt6M3atNLE10VSwQsN4Z6r0CBwqzXesHmV+BeoyAUri8EyMfi2FowXS5dhd7doo2DVII0V5BAjigP89GEVAtda8b2ehodU4rNaAW+dGfzlFkyo89GTlcrHYCLpKD+V7yeeHNzLjkp24Uu1Ed6G8/F8qjqGRzlbl2H2dzjpMg1KdwsHxOlmJ7GTeZC/nesXbeZ6c9OYnuxUc3fmBuFft/Ff8xMd0s65SXIb/gAAAABJRU5ErkJggg=="\
                                />\
                    </hbox>\
                    <menuitem id="autoReader-menuitem-preferences" label="设置自动启用的站点"\
                            oncommand="autoReader.showSettingDialog();" />\
                </menupopup>\
            ';

            var range = document.createRange();
            range.selectNodeContents($('mainPopupSet'));
            range.collapse(false);
            range.insertNode(range.createContextualFragment(xml.replace(/\n|\t/g, '')));
            range.detach();
        },
        loadSetting: function(){
            ["AUTO_START"].forEach(function(name) {
                try{
                    ns[name] = ns.prefs.getBoolPref(name);
                }catch(e) {}

            }, ns);

            ["AUTO_SITE_TEXT"].forEach(function(name) {
                try{
                    ns[name] = ns.prefs.getCharPref(name);
                }catch(e) {}
            }, ns);
        },
        handleAutoSiteText: function(text) {
            ns.auto_sites_reg = [];

            var auto_sites = (text || ns.AUTO_SITE_TEXT).split("\n");

            auto_sites.forEach(function(line) {
                line = line.trim();
                if (line) {
                    ns.auto_sites_reg.push(wildcardToRegExpStr(line));
                }
            });
        },
        autoLaunch: function(win) {
            var locationHref = win.location.href;

            var sites = this.auto_sites_reg;
            this.currentMatch_siteText = "";

            for (var i = 0; i < sites.length; i++) {
                if (new RegExp(sites[i]).test(locationHref)) {
                    this.currentMatch_siteText = sites[i];
                    this.launch(win);
                    break;
                }
            }
        },
        launch: function(win, timer) {
            win = win || getFocusedWindow();

            win.setTimeout(function() {

                var wrappedJS = win.wrappedJSObject;

                var other_launch = function(){

                    if (window.__readable_by_evernote) {
                        window.__readable_by_evernote.readable_by_evernote__button__call();
                    } else if (wrappedJS.X_readability) {
                        wrappedJS.X_readability();
                    } else {
                        // gBrowser.loadURI(READER_TOOL_URL);
                    }
                };

                if (wrappedJS.readx) {  // 小说阅读脚本
                    wrappedJS.readx();
                    // 如果小说阅读脚本没调用成功，则调用
                    setTimeout(function(){
                        var bodyName = win.document.body.getAttribute("name");
                        if(!bodyName || bodyName != "MyNovelReader"){
                            other_launch();
                        }
                    }, 500);
                    return;
                }

                other_launch();

                // for (var i = 0; i < reader_tools.length; i++) {
                //     let cmd = reader_tools[i].wrapped_command;
                //     if(cmd && wrappedJS[cmd]){
                //         wrappedJS[cmd]();
                //         return;
                //     }

                //     cmd = reader_tools[i].command;
                //     if(cmd){
                //         try{
                //             cmd();
                //         }catch(e){
                //             continue;
                //         }
                //         return;
                //     }

                //     if(reader_tools[i].url){
                //         window.loadURI(reader_tools[i].url);
                //         return;
                //     }
                // }

            }, timer || 0);
        },
        iconClick: function(event){
            // if(event.target.id != BUTTON_ID) return;
            if (!event || !event.button) {
                autoReader.launch();
                // ns.toggle();
            } else if (event.button == 1) {
                middleButtonClicked();
            }
        },
        toggle: function() {
            if (this.AUTO_START) {
                this.AUTO_START = false;
                updateIcon();
            } else {
                this.AUTO_START = true;
                updateIcon();
            }
        },
        onPopupShowing: function(event) {
            var tabWindow;

            if (tabWindow = window.gBrowser.selectedTab.linkedBrowser.contentWindow) {
                var value = this.currentMatch_siteText;
                if(!value){
                    value = tabWindow.location.href;
                }
                return $('autoReader-autosite-textbox').value = value;
            }
        },
        showSettingDialog: function(xulBase64) {
            if (!xulBase64) {
                xulBase64 = "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjw/eG1sLXN0eWxlc2hlZXQgaHJlZj0iY2hyb21lOi8vZ2xvYmFsL3NraW4vIiB0eXBlPSJ0ZXh0L2NzcyI/Pg0KPHdpbmRvdyB4bWxucz0iaHR0cDovL3d3dy5tb3ppbGxhLm9yZy9rZXltYXN0ZXIvZ2F0ZWtlZXBlci90aGVyZS5pcy5vbmx5Lnh1bCIgDQogICAgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiICB0aXRsZT0i6K6+572u6Ieq5Yqo5ZCv55So55qE56uZ54K5Ij4NCiAgICA8aGJveCBhbGlnbj0iY2VudGVyIiB0b29sdGlwdGV4dD0i5LiA6KGM5LiA5Liq572R5Z2A77yM5Zue6L2m6ZSu6L6T5YWl57uT5p6c77yM56S65L6L77yaaHR0cDovL3d3dy5jbmJldGEuY29tL2FydGljbGVzLyouaHRtIj4NCiAgICAgICAgPGxhYmVsIHZhbHVlPSLlvZPliY3nvZHlnYAiPjwvbGFiZWw+DQogICAgICAgIDx0ZXh0Ym94IGZsZXg9IjEiLz4NCiAgICAgICAgPGJ1dHRvbiBpZD0iYnRuX2VudGVyIiBsYWJlbD0i56Gu5a6aIiBvbmNvbW1hbmQ9ImJ0bl9lbnRlcl9jbGlja2VkKCk7Ii8+DQogICAgICAgIDxidXR0b24gaWQ9ImJ0bl9vcmlnaW5hbF91cmwiIGxhYmVsPSLljp/lp4vlnLDlnYAiLz4NCiAgICA8L2hib3g+DQogICAgPHRleHRib3ggaWQ9InVybHMiIG11bHRpbGluZT0idHJ1ZSIgZmxleD0iMSIvPg0KICAgIDxoYm94IGRpcj0icmV2ZXJzZSI+DQogICAgICAgIDxidXR0b24gaWQ9InNhdmUiIGxhYmVsPSLkv53lrZgiLz4NCiAgICA8L2hib3g+DQogICAgPHNjcmlwdD4NCiAgICAgICAgPCFbQ0RBVEFbDQoNCiAgICAgICAgdmFyIHVybF90ZXh0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigidGV4dGJveCIpOw0KICAgICAgICB2YXIgdXJsc190ZXh0Ym94ID0gJCgidXJscyIpOw0KICAgICAgICB2YXIgYnRuX2VudGVyID0gJCgiYnRuX2VudGVyIik7DQogICAgICAgIHZhciBidG5fb3JpZ2luYWxfdXJsID0gJCgiYnRuX29yaWdpbmFsX3VybCIpOw0KDQogICAgICAgIHZhciBsb2NhdGlvbkhyZWYgPSBvcGVuZXIuY29udGVudC5sb2NhdGlvbi5ocmVmOw0KDQogICAgICAgIC8vIOWvueWcsOWdgOi/m+ihjOeugOWNleWkhOeQhg0KICAgICAgICB2YXIgdmFsdWUgPSBsb2NhdGlvbkhyZWYucmVwbGFjZSgvI1teXC9dKiQvLCAiIik7DQogICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXC9bXlwvXSooXC5zP2h0bWw/fFwuYXNweCkkLywgIi8qJDEiKTsNCiAgICAgICAgdXJsX3RleHRib3gudmFsdWUgPSB2YWx1ZTsNCg0KICAgICAgICB1cmxfdGV4dGJveC5hZGRFdmVudExpc3RlbmVyKCJrZXl1cCIsIGZ1bmN0aW9uKGV2ZW50KXsNCiAgICAgICAgICAgIGlmKGV2ZW50LndoaWNoID09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT0gMTMpew0KICAgICAgICAgICAgICAgIGJ0bl9lbnRlcl9jbGlja2VkKCk7DQogICAgICAgICAgICB9DQogICAgICAgIH0sIGZhbHNlKTsNCg0KICAgICAgICB1cmxzX3RleHRib3gudmFsdWUgPSBvcGVuZXIuYXV0b1JlYWRlci5BVVRPX1NJVEVfVEVYVA0KDQogICAgICAgIGJ0bl9vcmlnaW5hbF91cmwuc2V0QXR0cmlidXRlKCJ0b29sdGlwdGV4dCIsIGxvY2F0aW9uSHJlZik7DQogICAgICAgIGJ0bl9vcmlnaW5hbF91cmwuYWRkRXZlbnRMaXN0ZW5lcigiY29tbWFuZCIsIGZ1bmN0aW9uKCl7DQogICAgICAgICAgICB1cmxfdGV4dGJveC52YWx1ZSA9IGxvY2F0aW9uSHJlZjsNCiAgICAgICAgfSwgZmFsc2UpOw0KDQogICAgICAgICQoInNhdmUiKS5hZGRFdmVudExpc3RlbmVyKCJjb21tYW5kIiwgZnVuY3Rpb24oKXsNCiAgICAgICAgICAgIG9wZW5lci5hdXRvUmVhZGVyLkFVVE9fU0lURV9URVhUID0gdXJsc190ZXh0Ym94LnZhbHVlOw0KICAgICAgICAgICAgb3BlbmVyLmF1dG9SZWFkZXIuaGFuZGxlQXV0b1NpdGVUZXh0KCk7DQogICAgICAgICAgICBjbG9zZSgpOw0KICAgICAgICB9LCBmYWxzZSk7DQoNCiAgICAgICAgZnVuY3Rpb24gYnRuX2VudGVyX2NsaWNrZWQoKXsNCiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVybF90ZXh0Ym94LnZhbHVlLnRyaW0oKTsNCiAgICAgICAgICAgIGlmKHZhbHVlKXsNCiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB1cmxzX3RleHRib3gudmFsdWU7DQogICAgICAgICAgICAgICAgaWYobmV3VmFsdWUpew0KICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSAiXG4iOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICB1cmxzX3RleHRib3gudmFsdWUgPSBuZXdWYWx1ZSArIHVybF90ZXh0Ym94LnZhbHVlOw0KICAgICAgICAgICAgICAgIHVybF90ZXh0Ym94LnZhbHVlID0gIiI7DQogICAgICAgICAgICB9DQogICAgICAgIH0NCg0KICAgICAgICBmdW5jdGlvbiAkKGlkKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7DQoNCiAgICAgICAgXV0+DQogICAgPC9zY3JpcHQ+DQo8L3dpbmRvdz4=";
            }
            window.openDialog("data:application/vnd.mozilla.xul+xml;charset=UTF-8;base64," + xulBase64,
                "name", "top=" + (window.screenY + 100) + ",left=" + (window.screenX + 50));
        },
        onAutoSiteButtonCommand: function(event) {
            // var blackList, tabWindow;

            // blackList = getPref('black_list');
            // if (blackList.length > 0) {
            //   blackList += ', ';
            // }
            // blackList += blacklistTextbox.value;
            // setPref('black_list', blackList);
            // menupopup.hidePopup();

            return event.stopPropagation();
        }
    };

    ns.init();

    function updateIcon() {
        var newState = "";
        var checkautomenu = $("autoReader-AUTOSTART");

        if (ns.AUTO_START == false) {
            newState = "off";
            checkautomenu.setAttribute("checked", false);
        } else {
            newState = "on";
            checkautomenu.setAttribute("checked", true);
        }

        ns.icon.setAttribute("state", newState);
    }

    function debug() {
        Application.console.log(Array.slice(arguments));
    };

    function $(id) document.getElementById(id);

    function $C(name, attr) {
        var el = document.createElement(name);
        if (attr) Object.keys(attr).forEach(function(n) el.setAttribute(n, attr[n]));
        return el;
    }

    function addStyle(css) {
        var pi = document.createProcessingInstruction(
            'xml-stylesheet',
            'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
        );
        return document.insertBefore(pi, document.documentElement);
    }

    function getFocusedWindow() {
        var win = document.commandDispatcher.focusedWindow;
        return (!win || win == window) ? content : win;
    }

    function wildcardToRegExpStr(urlstr) {
        if (urlstr.source) return urlstr.source;
        let reg = urlstr.replace(/[()\[\]{}|+.,^$?\\]/g, "\\$&").replace(/\*+/g, function(str) {
            return str === "*" ? ".*" : "[^/]*";
        });
        return "^" + reg + "$";
    }

})('\
#autoReaderButton[state="on"]{\
    list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVQ4jZ2TsUrDUBSGvxvzAg7qJA5BdBARI1ishYJ26uZLOBQtUpEMjhUr6KAgqC/gC7ipIKSCoiKOQTI4dnQ1N7kOkpomuZb6w4Fz7v3/w38O9wqlFAAV56UKbABzwBj56ACvQPO6Zd8DCKUUK9uP+4CjEeng3B4uHohyvV0FrgYUA4RAwYyCoPYPMcAQ0DAjKe30jXu+mmGX1m8yZwqKRijlaCglyYhhWRaWZXWbpnmRlONG9JP0RBIjy8fdvHNXy3DNKAi0Q/q+3+MGIM3/00EsijFstzLcviPMr1123eRx+zZI1p9vu7k76KB/upmZU7VnRFI+p7vOVC5+l5ZTJ+JJTJdPl4A2IHQuNPgCZoVSiqnSyQ6wB5gDiOueu3km4u88WThaALaAIjChEX4ALtB8f2h4AN/8SQfIa3maJAAAAABJRU5ErkJggg==);\
}\
#autoReaderButton[state="off"]{\
    list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVQ4jZ2TTU7DMBSEv2dyBlghFt4jJFggegROAklp07RSDlAJoSYNJRQuwg342YDEOossWPYKFcjdNLSJEwqMNJKfPfPm2ZLFGAPAKIpPgTZwAOxQjxnwDgwH/eAZQIwxjKLxJRA2mBpgwkE/uJJl8sPfzAB8AccOiPsPM8AWEDjAYfWkH/iWOoqTuiYthcg2IpS4hNYarfWqaVUnsqs2zXnmtr/X99PUOncEsTYL5HlemgagqlcIWKyYCpx7F5ZW2e5yQpzcrE1ja9XP9nJ9dzuxtApk9vsWVHSSKYS3qn98na7uX1Ov8VXiJD0BnmqiNmEO7Kte13sRCAU+696jgXOBTq/rZVJ852QyPQJ8oAXsNaR+AI/A0O+4GcAC/tBIHXgDrRwAAAAASUVORK5CYII=);\
}\
');

