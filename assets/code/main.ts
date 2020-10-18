// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import { ws } from "./ws"

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    userName: cc.Label = null;

    @property(cc.Node)
    nameLyaer: cc.Node = null

    @property(cc.Node)
    msgContentContain: cc.Node = null

    @property(cc.Prefab)
    msgContentPrefab: cc.Prefab = null;

    ws: WebSocket

    onLoad() {
        this.nameLyaer.active = true
    }

    start() {

    }

    setName(p0: cc.EditBox) {
        this.ws = new WebSocket("ws://127.0.0.1:9001/ws");
        this.ws.onopen = function (event) {
            console.log("已连接.");
            this.nameLyaer.active = false
            let name = p0.string
            this.sendData(name)
            this.userName = "name:" + name
        }.bind(this);
        this.ws.onmessage = function (event) {
            let data = JSON.parse(event.data);
            console.log("收到消息: " + event.data);
            var msg: cc.Node = cc.instantiate(this.msgContentPrefab)
            msg.getComponent(cc.Label).string = data.user + ':' + data.text
            msg.parent = this.msgContentContain

        }.bind(this);
        this.ws.onerror = function (event) {
            this.nameLyaer.active = true
            console.log("发生错误");
        }.bind(this);
        this.ws.onclose = function (event) {
            console.log("已关闭");
            this.nameLyaer.active = true
        }.bind(this);
    }

    sendData(v: string) {
        this.ws.send(JSON.stringify({ "msg": v }))
    }

    sendChatMsg(p0: cc.EditBox) {
        this.sendData(p0.string)
    }

    // update (dt) {}
}
