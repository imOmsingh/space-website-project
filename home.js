let flag=0;
function menubar(){
	menutoggle=document.querySelector(".menu-bar");
	menubut=document.getElementsByClassName("menu-but");
	if (flag==0){
		flag=1;
		menutoggle.style.display="block";
		menutoggle.style.animationName="menucont";
		menutoggle.style.animationDuration="2s";
		Array.from(menubut).forEach(element =>{
		element.style.opacity="0";
		element.style.animationName="menutab";
		element.style.display="block";

	
	});
	}
	else{
		flag=0;
		menutoggle.style.animationDuration="1s";
		menutoggle.style.display="none";
		menutoggle.style.animationName="menutabup";
		Array.from(menubut).forEach(element =>{
			element.style.animationName="menutabback";
			element.style.display="none";
		})
	}
};