window.__require=function t(e,n,o){function r(s,a){if(!n[s]){if(!e[s]){var c=s.split("/");if(c=c[c.length-1],!e[c]){var u="function"==typeof __require&&__require;if(!a&&u)return u(c,!0);if(i)return i(c,!0);throw new Error("Cannot find module '"+s+"'")}}var p=n[s]={exports:{}};e[s][0].call(p.exports,function(t){return r(e[s][1][t]||t)},p,p.exports,t,e,n,o)}return n[s].exports}for(var i="function"==typeof __require&&__require,s=0;s<o.length;s++)r(o[s]);return r}({main:[function(t,e,n){"use strict";cc._RF.push(e,"f3f70lwc+JIWJ02hubFgiOe","main"),Object.defineProperty(n,"__esModule",{value:!0});var o=cc._decorator,r=o.ccclass,i=o.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.userName=null,e.nameLyaer=null,e.msgContentContain=null,e.msgContentPrefab=null,e}return __extends(e,t),e.prototype.onLoad=function(){this.nameLyaer.active=!0},e.prototype.start=function(){},e.prototype.setName=function(t){this.ws=new WebSocket("ws://127.0.0.1:9001/ws"),this.ws.onopen=function(e){console.log("\u5df2\u8fde\u63a5."),this.nameLyaer.active=!1;var n=t.string;this.sendData(n),this.userName="name:"+n}.bind(this),this.ws.onmessage=function(t){var e=JSON.parse(t.data);console.log("\u6536\u5230\u6d88\u606f: "+t.data);var n=cc.instantiate(this.msgContentPrefab);n.getComponent(cc.Label).string=e.user+":"+e.text,n.parent=this.msgContentContain}.bind(this),this.ws.onerror=function(t){this.nameLyaer.active=!0,console.log("\u53d1\u751f\u9519\u8bef")}.bind(this),this.ws.onclose=function(t){console.log("\u5df2\u5173\u95ed"),this.nameLyaer.active=!0}.bind(this)},e.prototype.sendData=function(t){this.ws.send(JSON.stringify({msg:t}))},e.prototype.sendChatMsg=function(t){this.sendData(t.string)},__decorate([i(cc.Label)],e.prototype,"userName",void 0),__decorate([i(cc.Node)],e.prototype,"nameLyaer",void 0),__decorate([i(cc.Node)],e.prototype,"msgContentContain",void 0),__decorate([i(cc.Prefab)],e.prototype,"msgContentPrefab",void 0),e=__decorate([r],e)}(cc.Component);n.default=s,cc._RF.pop()},{}]},{},["main"]);