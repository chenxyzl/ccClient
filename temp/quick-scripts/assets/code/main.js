(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/code/main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f3f70lwc+JIWJ02hubFgiOe', 'main', __filename);
// code/main.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userName = null;
        _this.nameLyaer = null;
        _this.msgContentContain = null;
        _this.msgContentPrefab = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.nameLyaer.active = true;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.setName = function (p0) {
        this.ws = new WebSocket("ws://127.0.0.1:9001/ws");
        this.ws.onopen = function (event) {
            console.log("已连接.");
            this.nameLyaer.active = false;
            var name = p0.string;
            this.sendData(name);
            this.userName = "name:" + name;
        }.bind(this);
        this.ws.onmessage = function (event) {
            var data = JSON.parse(event.data);
            console.log("收到消息: " + event.data);
            var msg = cc.instantiate(this.msgContentPrefab);
            msg.getComponent(cc.Label).string = data.user + ':' + data.text;
            msg.parent = this.msgContentContain;
        }.bind(this);
        this.ws.onerror = function (event) {
            this.nameLyaer.active = true;
            console.log("发生错误");
        }.bind(this);
        this.ws.onclose = function (event) {
            console.log("已关闭");
            this.nameLyaer.active = true;
        }.bind(this);
    };
    NewClass.prototype.sendData = function (v) {
        this.ws.send(JSON.stringify({ "msg": v }));
    };
    NewClass.prototype.sendChatMsg = function (p0) {
        this.sendData(p0.string);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "userName", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nameLyaer", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "msgContentContain", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "msgContentPrefab", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=main.js.map
        