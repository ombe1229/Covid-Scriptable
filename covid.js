const url = 'https://api.corona-19.kr/korea/?serviceKey=API키'
const req = new Request(url)
const resp = await req.loadJSON()

if (config.runsInWidget) {
    if (resp.resultCode != "0") {
        let widget = ErrorWidget()
        Script.setWidget(widget)
        Script.complete()
    }

    let widget = createWidget(`총 확진자 : ${resp.TotalCase}명`, `완치자 : ${resp.TotalRecovered}명`, `격리자 : ${resp.NowCase}명`,`사망자 : ${resp.TotalDeath}명`, "#53D769")
    Script.setWidget(widget)
    Script.complete()
}

function createWidget(text1, text2, text3, text4, color) {
    let widget = new ListWidget()
    let t1 = widget.addText(text1)
    let t2 = widget.addText(text2)
    let t3 = widget.addText(text3)
    let t4 = widget.addText(text4)

    t1.textColor = Color.white()
    t1.font = Font.systemFont(30)
    widget.addSpacer(5)
    t2.textColor = Color.white()
    t2.font = Font.systemFont(20)
    widget.addSpacer(5)
    t3.textColor = Color.white()
    t3.font = Font.systemFont(20)
    widget.addSpacer(5)
    t4.textColor = Color.white()
    t4.font = Font.systemFont(20)
    widget.backgroundColor = new Color(color)

    return widget
}

function ErrorWidget() {
    let widget = new ListWidget()
    let title = widget.addText("오류 발생")
    
    title.textColor = Color.white()
    title.font = Font.systemFont(50)
    widget.backgroundColor = new Color("#FF0000")

    return widget
}