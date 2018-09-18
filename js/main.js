
function writeCode(prefix,code,fn){
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  let n = 0
  let id = setInterval (() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
    styleTag.innerHTML = prefix + code.substring(0,n)
    domCode.scrollTop = domCode.scrollHeight
    if(n >= code.length){
      window.clearInterval(id)
      fn.call()
    }
  },50)
}
function writeMarkdown(markdown,fn){
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval (() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0,n)
    domPaper.scrollTop = domPaper.scrollHeight
    if(n >= markdown.length){
      window.clearInterval(id)
      fn.call()
    }
  },50)
}
  

var result1 = `/*
* Hello,我是毛绒球
* 很高兴认识你
* 我们交个朋友吧
* 下面我为你表演
* 翻滚吧，我的代码
*/
*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size: 16px;
}
#code{
  border: 1px solid #aaa;
  padding: 20px;
}
/* 我需要一点高亮 */
.token.selector{
  color: #2aa198;
}
.token.property{
  color: #268bd2;
}
.token.function{
  color: #b58900;
}
/* 呼吸一下 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 我要自我介绍啦 */
/* 首先，我需要一张白纸 */

#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}
#paper > .content{
  display: block;
}
/* 请看右边 */
`
var result2 = `
/* 接下来把Markdown变成HTML marked.js*／
`
var md = `
## 自我介绍
我叫毛绒球
年龄：18

## 技能
HTML
CSS
JS

## 项目
- MAC键盘
- 轮播
- 哆啦A梦

## 联系方式
手机：1234567890

Email：12345@qq.com

## 自我介绍
我叫毛绒球
年龄：18

## 技能
HTML
CSS
JS

## 项目
- MAC键盘
- 轮播
- 哆啦A梦

## 联系方式
手机：1234567890

Email：12345@qq.com

## 自我介绍
我叫毛绒球
年龄：18

## 技能
HTML
CSS
JS

## 项目
- MAC键盘
- 轮播
- 哆啦A梦

## 联系方式
手机：1234567890

Email：12345@qq.com

`
let result3 = `
/* 谢谢观看 */

`

writeCode('',result1,()=>{
  createPaper(()=>{
    writeMarkdown(md,()=>{
      writeCode(result1,result2,()=>{
        markdownToHtml(()=>{
          writeCode(result1 + result2,result3,()=>{
            console.log('over')
          })
        })
      })
    })
  })
})

function createPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}

function markdownToHtml(fn){
  var div = document.createElement('div')
  div.className = 'html content'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn.call()
}

