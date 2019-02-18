/*获取页面宽度与图片比例*/
var w = document.body.clientWidth;
var x = w / 750 * 1206 ;
/*输入框自适应*/
var a = document.getElementById("inputname");
a.style.top = 0.79961 * x + "px";
a.style.height = 0.03862 * x + "px";
a.style.padding = 0.006073 * x + "px";
a.style.paddingLeft = 0.07511 * x + "px";
a.style.width = 0.17876 * x + "px";
a.style.fontSize = 0.03541 * x + "px";
/*抽签按钮自适应*/
var b = document.getElementById("button");
b.style.width = 0.26812 * w + "px";
b.style.height = 0.1 * x + "px";
b.style.top = 0.66395 * x + "px";
b.style.left = 0.61836 * w + "px";
/*签筒自适应*/
var c = document.getElementById("qiantong");
c.style.width = 0.86 * w + "px";
c.style.top = 0.13266 * x + "px";

var d = document.getElementById("instruction");
d.style.top = 0.88 * x + "px";
d.style.fontSize = 0.04506 * x + "px";
/*解签页姓名自适应*/
var e = document.getElementById("displayname");
e.style.top = 0.01502 * x + "px";
e.style.fontSize = 0.04506 * x + "px";



function abc1(){
    if(a.value.length == 0){ 
        alert("请输入姓名！"); 
    }
    else{
        /*进入抽签页动画过渡*/
        setTimeout('$("#begin").fadeOut(1000);', 100);
        setTimeout('$("#process").fadeIn(1300);', 1100);
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
        var canvas = document.getElementById("myCanvas");
        var ctx=canvas.getContext("2d");

        var img1=document.getElementById("answerimg");
        img1.crossOrigin = "anonymous";
        var img2=document.getElementById("qianwen");
        img2.crossOrigin = "anonymous";

        ctx.drawImage(img1,0,0);
        ctx.drawImage(img2,0,0);
        ctx.font = 'bold 54px sans-serif';
        ctx.textAlign = "center";
        ctx.fillStyle = "#f9f5f4";
        ctx.fillText(a.value,375,76,278);
        
        var output = document.getElementById("test");
        output.src = canvas.toDataURL("image/png");
    };
};

function abc2(){
    /*签筒抽签动画特效*/
    $("#qiantong").animate({top:0.1*x+"px"});
    $("#qiantong").animate({top:0.2*x+"px"});
    $("#qiantong").animate({top:0.06*x+"px"});
    $("#qiantong").animate({top:0.2*x+"px"});
    $("#qiantong").animate({top:0.06*x+"px"});
    $("#qiantong").animate({top:0.13266*x+"px"});
    /*进入解签页动画过渡*/
    setTimeout('$("#process").fadeOut(800);', 3300);
    setTimeout('$("#save").fadeIn(1300);', 4100);
    /*替换解签页姓名*/
    e.innerHTML = a.value;
};

