let nav = document.querySelector(".nav");
let but = document.querySelector(".but");

window.onscroll = function() {
    if (window.scrollY >= 1000) {
        but.style.display = "block";
    }
    else {
        but.style.display = "none";
    }

    if(window.scrollY < 625){
        nav.style.position=" relative";
    }
    else{
        nav.style.position ="fixed";
        nav.top =0;
    }
};

but.onclick = function () {
    window.scrollTo({
    top: 0,
  });
};



let texts = document.querySelector("#text"); 
var i=0 ,text="back end Developer With Php laravel";

    function aa () {
        if (i <= text.length) {
            texts.innerHTML += text.charAt(i);
            i++;
            setTimeout(aa ,150)
        }
    };
    
    let dd =document.querySelectorAll(".dd");
    function ee () {
        dd.forEach((div)=>{
        div.style.width =div.dataset.width;
        });
        
    };

    window.onload = function(){
        aa();
        ee();
    }



let landing = document.querySelector(".landing"); 

let img=["ff.jpg","bb.jpg","nn.jpg","ww.jpg","ss.jpg","landing.jpg","zz.jpg"];
setInterval(()=>{
let ff = Math.floor(Math.random()*img.length);
landing.style.backgroundImage = 'url("img/'+img[ff]+'")'
}, 4000);


