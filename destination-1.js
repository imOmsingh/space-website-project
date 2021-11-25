let flag=0;
function menubar(){
	menutoggle=document.querySelector(".menu-bar");
	menubut=document.getElementsByClassName("menu-but");
	if (flag==0){
		flag=1;
		menutoggle.style.display="block";
		menutoggle.style.animationDuration="2s";
		menutoggle.style.animationName="menucont";
		text=document.querySelector(".text-1");
		text.style.animationDuration="2s";
		text.style.animationName="movetextdown";
		Array.from(menubut).forEach(element =>{
		element.style.animationName="menutab";
		element.style.display="block";

	
	});
	}
	else{
		flag=0;
		menutoggle.style.display="none";
		menutoggle.style.animationName="menucontup";
		menutoggle.style.animationDuration="1s";
		text=document.querySelector(".text-1");
		text.style.animationDuration="1s";
		text.style.animationName="movetextup";
		Array.from(menubut).forEach(element =>{
			element.style.display="none";
		})
	}
};