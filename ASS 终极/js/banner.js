//轮播区       
var slide = document.getElementById('slide');
//图片区
var pic = document.getElementById('pic').getElementsByTagName('div');
//控制区
var lis = document.getElementById('control').getElementsByTagName('li');
//箭头控制区
var arrows = document.getElementById('arrow');
var arrs = arrows.getElementsByClassName('arrow');
//自动轮播
var timer = setInterval(move, 3000);
//定义初始化索引
var index = 0;
//自动轮播
function move() {
    //清除当前索引样式
    pic[index].className = '';
    //清除当前控制区样式
    lis[index].className = '';
    index++;
    if (index == pic.length) {
        index = 0;
    }
    pic[index].className = 'current';
    lis[index].className = 'current';
}
//控制区控制轮播
for (var i = 0; i < lis.length; i++) {
    //保存当前索引
    lis[i]._index = i;
    lis[i].onclick = function () {
        //去除当前样式
        lis[index].className = '';
        //隐藏当前内容区
        pic[index].className = '';
        //修改当前样式
        this.className = 'current';
        //修改当前图片
        pic[this._index].className = 'current';
        //修改当前索引
        index = this._index;
    }
}
//箭头控制轮播
//上一张
arrs[0].onclick = function () {
    movePre();
}
//下一张
arrs[1].onclick = function () {
    move();
}
//鼠标经过轮播区停止轮播
slide.onmouseover = function () {
    clearInterval(timer);
    arrows.style.display = 'block';
}
//鼠标离开继续轮播
slide.onmouseout = function () {
    timer = setInterval(move, 3000);
    arrows.style.display = 'none';
}

function movePre() {
    //清除当前样式
    pic[index].className = '';
    lis[index].className = '';
    index--;
    if (index == -1) {
        index = pic.length - 1;
    }
    pic[index].className = 'current';
    lis[index].className = 'current';
}