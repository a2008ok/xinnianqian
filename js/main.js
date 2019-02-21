/*获取页面宽度与图片比例*/
var w = document.body.clientWidth;
var x = w / 750 * 1206 ;
/*输入框自适应*/
var a = document.getElementById("inputname");
a.style.top = 0.265340 * x + "px";
a.style.height = 0.0389718 * x + "px";
a.style.padding = 0.006073 * x + "px";
a.style.paddingLeft = 0.07511 * x + "px";
a.style.width = 0.1658375 * x + "px";
a.style.fontSize = 0.0356550 * x + "px";
/*抽签按钮自适应*/
var b = document.getElementById("button1");
b.style.width = 0.4589372 * w + "px";
b.style.height = 0.1216742 * x + "px";
b.style.top = 0.3454947 * x + "px";
b.style.left = 0.2705314 * w + "px";
/*解签页按钮1自适应*/
var c = document.getElementById("button2");
c.style.width = 0.4589372 * w + "px";
c.style.height = 0.1216742 * x + "px";
c.style.top = 0.5903454 * x + "px";
c.style.left = 0.2705314 * w + "px";
/*解签页按钮2自适应*/
var d = document.getElementById("button3");
d.style.width = 0.4589372 * w + "px";
d.style.height = 0.1216742 * x + "px";
d.style.top = 0.7270411 * x + "px";
d.style.left = 0.2705314 * w + "px";
/*解签页姓名自适应*/
var e = document.getElementById("displayname");
e.style.top = 0.01502 * x + "px";
e.style.fontSize = 0.04506 * x + "px";



function start(){
    $("#begin").fadeIn(500);
            /*随机抽选签文*/
        var qianwen = document.getElementById("qianwen");
        var f = Math.floor(Math.random()*13);
        if (f == 0){
            qianwen.src = "./picture/1.png";
        }
        else if (f == 1){
            qianwen.src = "./picture/2.png";
        }
        else if (f == 2){
            qianwen.src = "./picture/3.png";
        }
        else if (f == 3){
            qianwen.src = "./picture/4.png";
        }
        else if (f == 4){
            qianwen.src = "./picture/5.png";
        }
        else if (f == 5){
            qianwen.src = "./picture/6.png";
        }
        else if (f == 6){
            qianwen.src = "./picture/7.png";
        }
        else if (f == 7){
            qianwen.src = "./picture/8.png";
        }
        else if (f == 8){
            qianwen.src = "./picture/9.png";
        }
        else if (f == 9){
            qianwen.src = "./picture/10.png";
        }
        else if (f == 10){
            qianwen.src = "./picture/11.png";
        }
        else if (f == 11){
            qianwen.src = "./picture/12.png";
        }
        else{
            qianwen.src = "./picture/13.png"
        };
};

function abc0(){
    $("#pig").animate({top:0});
    setTimeout('$("#begin").fadeIn(500);', 500);   
        setTimeout('$("#realbegin").fadeOut(500);', 1000); 
};

function abc1(){
    if(a.value.length == 0){ 
        alert("请输入姓名！"); 
    }
    else{
        /*进入抽签页动画过渡*/
        setTimeout('$("#begin").fadeOut(1000);', 100);
        setTimeout('$("#process").fadeIn(1300);', 1100);

        /*获取画布canvas*/
        var canvas = document.getElementById("myCanvas");
        var ctx=canvas.getContext("2d");

        var img1=document.getElementById("savebg");
        img1.crossOrigin = "anonymous";
        var img2=document.getElementById("qianwen");
        img2.crossOrigin = "anonymous";
        /*叠加绘制解签背景及签文*/
        ctx.drawImage(img1,0,0);
        ctx.drawImage(img2,0,0);
        ctx.font = 'bold 54px sans-serif';
        ctx.textAlign = "center";
        ctx.fillStyle = "#f9f5f4";
        ctx.fillText(a.value,375,76,278);
        /*输出图片*/        
        var output = document.getElementById("output");
        output.src = canvas.toDataURL("image/png");

        /*替换解签页姓名*/
        e.innerHTML = a.value;
        /*解签页动画过渡*/
        setTimeout('$("#process").fadeOut(800);', 3300);
        setTimeout('$("#answer").fadeIn(1300);', 4100);

    };
};

function abc2(){
    /*重新加载页面*/
    location.reload();
};

function abc3(){
    $("#answer").fadeOut(500);
    setTimeout('$("#save").fadeIn(500);', 500);
    setTimeout('alert("请长按保存图片！");', 1000);
};

function abc4(){

};
