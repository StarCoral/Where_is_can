	function showDreams()//
	{
		console.log("開始夢境");
		$("#mainPhoto1").attr("display","inline");
		setTimeout(function(){changePhoto(2);},200);
		setTimeout(function(){changePhoto(1);},400);
		setTimeout(function(){changePhoto(2);},600);
		setTimeout(function(){changePhoto(1);},800);
		setTimeout(function(){changePhoto(1);},1000);
		setTimeout(function(){changePhoto(2);},1200);
		setTimeout(function(){changePhoto(1);},1400);
		setTimeout(function(){changePhoto(2);},1600);
		setTimeout(function(){changePhoto(1);},1800);
		setTimeout(function(){changePhoto(2);},2000);
		setTimeout(function(){changePhoto(1);},2200);
		setTimeout(function(){changePhoto(2);},2400);
		setTimeout(function(){changePhoto(3);},2600);
		setTimeout(function(){
			$("#mainPhoto2").attr("src","photo/bomb.png");
			$("#mainPhoto2").css("display","inline");
			$("#mainPhoto1").css("display","none");
		},2600);
		
		
	}
	
	function changePhoto(option)//
	{
		console.log("換圖");
		if(option ==1)
		{
			$("#mainPhoto2").css("display","inline");
			$("#mainPhoto1").css("display","none");
		}
		else if(option==2)
		{
			$("#mainPhoto1").css("display","inline");
			$("#mainPhoto2").css("display","none");
		}
		else
		{
			$("#mainPhoto2").css("display","none");
			$("#mainPhoto1").css("display","none");
		}
		
	}
	
	var dialog_times=0;
	
	dialogs = [
	"(......好累。)",			//0
	"(啊，我是在做夢吧?)",		//1
	"(如果，能在夢裡好好休休息就好了呢......)",//2
	"(感覺頭好痛)<br>(總覺得有不好的預感......)",//3
	"",//4
	"(這、這是期末專題地獄!不是已經過去了嗎!不是今天就結束了嗎!)",//5
	"(為什麼作夢也要這樣!)",//6
	"......",//7
	".....",//8
	"....",//9
	"...",//10
	"......喵嗚!",//11
	"(好像聽到了什麼...?)",//12
	"......喵~~~~~喵!",//13
	"(是倔倔......?餓了......?)",//14
	"喵!喵喵!!喵~~~喵喵!",//15
	"<稍稍張開眼睛，模糊地開口......>",//16
	"啊，倔倔......不要吵啦......",//17
	"喵!!!",//18
	"我已經熬夜三天了，讓我睡一下不行嗎......",//19
	"喵......喵嗚嗚......",//20
	"(總覺得這是在哀號的聲音)",//21
	"......",//22
	"....",//23
	"..",//24
	"在你餵飽你家的貓咪前，就別想從java的世界離開了!",//25
	"?!?!?!?!?!"//26
	];
	
	function showContent()
	{
		if(dialog_times == 4)
		{
			var d_content = document.getElementById('content');
			d_content.innerHTML = "?!<br>?!?!<br>?!?!?!";
			showDreams();
			dialog_times++;
			//console.log("結束夢境");
			return true;
		}
		else if(dialog_times < dialogs.length)
		{
			var sentence = dialogs[dialog_times];
			var d_content = document.getElementById('content');
			d_content.innerHTML = sentence;
			switch(dialog_times)
			{
				case 11:
					$("#mainPhoto2").css("display","none");
					$("#dialog_photo").css("display","none");
					$("#main").css("background-color","#000000");
					break;
				case 7:
				case 8:
				case 9:
				case 10:
				case 13:
				case 15:
				case 18:
				case 20:
				case 22:
				case 23:
				case 24:
					$("#dialog_photo").css("display","none");
					break;
				case 25:
					$("#dialog_photo").css("display","none");
					$("#mainPhoto2").attr("src","photo/magic_1.png");
					$("#mainPhoto2").css("display","inline");
					break;
				case 26:
					//$("#dialog_photo").css("display","none");
					$("#mainPhoto2").attr("src","photo/magic_2.png");
					//$("#mainPhoto2").css("display","inline");
					break;
				
				default:
					$("#dialog_photo").css("display","inline");
					break;
			}
		}
		else
		{
			changeMap();
			$("#dialog").css("display","none");
			//var d_content = document.getElementById('content');
			//d_content.innerHTML = "";
			return true;
			
		}
		dialog_times++;
		
	}
	
	function changeMap()
	{
		$("#main").fadeOut(1000, function()
		{
			window.location.href='map1.html';
		})
	}