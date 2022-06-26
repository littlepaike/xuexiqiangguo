/*
 * @Author: AidPaike
 * @Date: 2022-06-26 09:01:55
 * @LastEditors: AidPaike
 * @LastEditTime: 2022-06-26 09:11:50
 * @FilePath: \flask-electron\main.js
 * @Description: 
 */

// 导入模块
const { app, BrowserWindow } = require("electron")

// 创建窗口
function createWindow() {
    let win = new BrowserWindow({
        // 设置一个宽为800, 高为600的窗口
        width: 800,
        height: 600
    })
    // 加载本地的 index.html
    win.loadFile("templates/flask_welcome.html")
}

const {PythonShell} = require("python-shell")

PythonShell.run(
    "engine.py",null,function(err,results){
        if (err) throw err
        console.log('engine.py finished')
        console.log('results',results)
    }
)
// 启动
app.on("ready", createWindow)

