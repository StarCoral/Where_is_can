
    var map = mapA;
	
	var noTalkToBC =  false;
	
	var talkBC1 = false;
	var talkBC2 = false;
	
	var answer=false;
	
	var NPCs = ['char_02','blackcat_1'];
	
	var Wwidth = $(window).width();//視窗寬度
    var Wheight = $(window).height();//視窗高度
	
	
	
	$(window).resize(function () //當resize時獲得視窗大小
	{
    Wwidth = $(window).width();
    Wheight = $(window).height();
    //console.log('1.window width: '+ Wwidth);
    //console.log('1.window height: '+ Wheight);
	//$("#dialog_B").css("top", Wheight-272);//對話框隨視窗大小置底
	
	$("#dialog_B").css("width", Wwidth);//對話框寬度隨視窗大小改變
	$("#dialog_B").css("margin-left", "0");//對話框位置隨視窗大小改變
	$("#dialog_B").css("left", "0");//對話框位置隨視窗大小改變
	
	//console.log('2.screen width: '+ screen.width);
    //console.log('2.tatalWidth: '+ window.innerWidth+window.outerWidth);
	
	if(screen.width == window.outerWidth)
	{
		$("#dialog_B").css("width", "1600px");//對話框寬度隨視窗大小改變
		$("#dialog_B").css("margin-left", "-805px");//對話框位置隨視窗大小改變
		$("#dialog_B").css("left", "50%");//對話框位置隨視窗大小改變
	}
	
	})
		
	var preWay = null;//上一步行走方向
	var samesteps = 0;//重複方向次數
	const SIZE = 32;//單一div大小

    //// map陣列值為 0 圖片通行
    //// map陣列值為 1 障礙物
    //// map陣列值為 2 可對話物品
	//// map陣列值為 3 NPC
	//// map陣列值為 4 可通過之障礙物後方
    var stop = false;// 控制是否能行走，預設可以行走
    var verticalLength = map.length;// 欄
    var horizontalLength = map[map.length - 1].length;// 列

    var vertical = 10;// 圖片初始位置 陣列 欄
    var horizontal =2;// 圖片初始位置 陣列 列
    var obstacle = false; // 判斷是否有障礙物
	
	var totalVertical = verticalLength*SIZE;
	var totalHorizontal = horizontalLength*SIZE;
	
	function shiftWindow(direction)
	{
		if (reat.left > Wwidth || reat.left == Wwidth && direction=="right")
		{
			//console.log('direction: '+ direction);
			if(reat.top < Wheight)
			{
				window.scrollTo(reat.left+1, 0);
			}
			else 
			{
				window.scrollTo(reat.left+1, reat.top);
			}
			
		}
		if (reat.left < Wwidth || reat.left == Wwidth && direction=="left")
		{
			//console.log('direction: '+ direction);
			if(reat.top < Wheight)
			{
				window.scrollTo(reat.left-1, 0);
			}
			else 
			{
				window.scrollTo(reat.left-1, reat.top);
			}
		}
		if (reat.top > Wheight-80 || reat.top == Wheight-80)
		{
			window.scrollTo(reat.left, reat.top+1);
		}
	}
	
	//window.scrollTo(0, 0);
	
	
	var reat = $("#mainC").position();
	
	
	window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
	}, false); 
	
	
    $(function () { //初始化地圖
        $("#start").css("top", vertical * SIZE);// 圖片初始位置 陣列 欄
        $("#start").css("left", horizontal * SIZE);// 圖片初始位置 陣列 列
        $("#mainC").css("top", vertical * SIZE);// 圖片初始位置 陣列 欄
        $("#mainC").css("left", horizontal * SIZE);// 圖片初始位置 陣列 列
        //
        $("#map").css("height", verticalLength * SIZE);// 透過陣列 橫 得知地圖最大高度範圍
        $("#map").css("width", horizontalLength * SIZE);//透過陣列 列 得知地圖最大長度範圍
        //
		
		var k = 0;//count NPCs
		
        for (var i = 0; i < verticalLength; i++) {
            for (var j = 0; j < horizontalLength; j++) {
                if (map[i][j] == 1) {
                    $("#map").append("<div class='obstacle'></div>");
                    // 障礙物
                } else if (map[i][j] == 2) {
                    $("#map").append("<div class='items'></div>");
                    // 觸發物品
                } else if (map[i][j] == 3) {
                    $("#map").append("<div class='NPC' id='" +NPCs[k] + "'></div>");
                    // 角色
					k++;
                }else {
                    $("#map").append("<div class='pass'></div>");
                    // 可通行
                }
            }
        }


    });

    $(document).keydown(function (event) {//移動人物
        $("#start").css("display", "none");
        $("#mainC").css("display", "inline");

        switch (event.which) {
            case 37:// 鍵盤 左按鍵
                move("左", horizontal, vertical);

                break;
            case 38:// 鍵盤 上按鍵
                move("上", horizontal, vertical);

                break;
            case 39:// 鍵盤 右按鍵
                move("右", horizontal, vertical);

                break;
            case 40:// 鍵盤 下按鍵
                move("下", horizontal, vertical);

                break;
            default:
                break;
        }

    });
	
	

	
    // 圖片移動
    function move(direction, horizontal, vertical) {
	var whichLeg=0;
	if(preWay == direction)
	{
		samesteps = samesteps+1;
		whichLeg = samesteps%2;
		//console.log("same way!");
	}
	else
	{
		samesteps = 0;
		whichLeg = 0;
	}
	preWay = direction;
        switch (direction) {
            case "左":
                if (horizontal > 0) {
					if(whichLeg == 0) 
					{
						//console.log("leg 1");
						$("#mainC").attr("src","photo/mainC_3.png");
					}
					if(whichLeg == 1) 
					{
						//console.log("leg 2");
						$("#mainC").attr("src","photo/mainC_5.png");
					}
                    this.horizontal = horizontal - 1; // 陣列向左移動
					
                    obstacle = pass(map[this.vertical][this.horizontal], "left", this.horizontal, this.vertical);
                    if (obstacle) {
                        this.horizontal += 1;// 不能通行，將陣列向右移動。設為原來位置
                    }
                }
                break;
            case "上":
                if (vertical > 0) {
					if(whichLeg == 0) 
					{
						//console.log("leg 1");
						$("#mainC").attr("src","photo/mainC_9.png");
					}
                    this.vertical = vertical - 1;// 陣列向上移動
					if(whichLeg == 1) 
					{
						//console.log("leg 2");
						$("#mainC").attr({"src":"photo/mainC_11.png","width":"100","height":"100"});
					}
                    obstacle = pass(map[this.vertical][this.horizontal], "top", this.horizontal, this.vertical);
                    if (obstacle) {
                        this.vertical += 1;// 不能通行，將陣列向上移動。設為原來位置
                    }
                    //
                }
                break;
            case "右":
                if (horizontal < horizontalLength - 1) {
					if(whichLeg == 0) 
					{
					//console.log("leg 1");
						$("#mainC").attr({"src":"photo/mainC_6.png","width":"100","height":"100"});
					}
                    this.horizontal = horizontal + 1;// 陣列向右移動
					if(whichLeg == 1) 
					{
						//console.log("leg 2");
						$("#mainC").attr({"src":"photo/mainC_8.png","width":"100","height":"100"});
                    }
					obstacle = pass(map[this.vertical][this.horizontal], "left", this.horizontal, this.vertical);
                    if (obstacle) {
                        this.horizontal -= 1;// 不能通行，將陣列向右移動。設為原來位置
                    }
                    //
                }
                break;
            case "下":
                if (vertical < verticalLength - 1) {
					if(whichLeg == 0) 
					{
						//console.log("leg 1");
						$("#mainC").attr({"src":"photo/mainC_0.png","width":"100","height":"100"});
                    }
					this.vertical = vertical + 1;// 陣列向下移動
					if(whichLeg == 1) 
					{
						//console.log("leg 2");
						$("#mainC").attr({"src":"photo/mainC_2.png","width":"100","height":"100"});
                    }
					obstacle = pass(map[this.vertical][this.horizontal], "top", this.horizontal, this.vertical);
                    if (obstacle) {
                        this.vertical -= 1;// 不能通行，將陣列向下移動。設為原來位置
                    }
                }
                break;

        }
    }

    // 通行
    function pass(map, direction, horizontal, vertical) 
	{
		var behind = false;

        if (map == 0 && stop == false) 
		{ // 可以通行
			
			behind = false;
			if(behind == false) $("#mainC").css("opacity", "1.0");
            switch (direction) 
			{
                case "left":// 左
                    $("#mainC").css("left", horizontal * SIZE + "px");
                    break;
                case "top":// 上
                    $("#mainC").css("top", vertical * SIZE + "px");
                    break;
            }
			reat = $("#mainC").position();
			//console.log('top: '+reat.top+' left: '+reat.left);
			shiftWindow(direction);
        } 
		else if (map == 2 || map==3) 
		{
			
            
			if(talkBC1&&talkBC2==true)
			{
				
			}
			else
			{
				stop = true;// 進入對話框座標，停止圖片移動
				$("#dialog").empty();// 清除對話框
				$("#dialog_B").css("display", "inline");//顯示對話框
			}
            
			console.log("in pass 對話囉!");
            dialog(vertical, horizontal);// 顯示對話框 座標
			reat = $("#mainC").position();
            return true;// 回到上一步 座標位置
        } 
		else if(map == 4) //牆壁後可通行
		{
			behind = true;
			$("#mainC").css("opacity", "0.3");
			switch (direction) 
			{
                case "left":// 左
                    $("#mainC").css("left", horizontal * SIZE + "px");
                    break;
                case "top":// 上
                    $("#mainC").css("top", vertical * SIZE + "px");
                    break;
            }
			reat = $("#mainC").position();
			//console.log('top: '+reat.top+' left: '+reat.left);
			shiftWindow();
		}
		else //不通過
		{
			
			if(behind) $("#mainC").css("opacity", "0.3");
			reat = $("#mainC").position();
			//console.log('top: '+reat.top+' left: '+reat.left);
            return true;// 回到上一步 座標位置
        }

    }//pass
	
	var npc02_talktimes=0;
	var npc02_talktimes2 = 0;
	var blackcat_talktimes = 0;
	var meetCatGirl=false;
	var goHome =false;
	var meetCatGirl2 = false;
	
    // 對話框
    function dialog(vertical, horizontal) 
	{
		if (vertical == 13 && horizontal == 45 && meetCatGirl==false) 
		{
			
			if(npc02_talktimes ==8 || npc02_talktimes > 8)
			{
				stop = false;
				$("#dialog_B").css("display","none");
				return true;
			
			}
				
			mainTalk("(......貓耳娘?)",1);
			$(document).keypress(function (event) 
			{
				console.log("press 1 time!");
				showContent("npc02");
				npc02_talktimes++;
			});
			
		}
		else if (vertical == 13 && horizontal == 45 && meetCatGirl ==true) 
		{
			goHome = true;
			if(npc02_talktimes2 ==8 || npc02_talktimes2 > 8)
			{
				stop = false;
				$("#dialog_B").css("display","none");
				return true;
			
			}
				
			mainTalk("(......貓耳娘?)",1);
			$(document).keypress(function (event) 
			{
				console.log("press 1 time!");
				showContent("npc02");
				npc02_talktimes++;
			});
			
		}
		else if (vertical == 33 && horizontal == 18 && blackcat_talktimes==0 && blackcat_talktimes2==0) 
		{
			console.log("在黑貓第1次對話區");
			if(talkBC1==true || meetCatGirl == false)
			{
				stop = false;
				$("#dialog_B").css("display","none");
				console.log("已第一次對話或未與貓女對話");
				return true;
			
			}
				
			mainTalk("(黑貓......!該不會就是恰比!)",3);
			$(document).keypress(function (event) 
			{
				//console.log("blackcat_talktimes = " + blackcat_talktimes);
				//console.log("press 1 time!");
				
				if(talkBC2==true && talkBC1==true)
				{
					console.log("在黑貓第一次對話區_2把對畫框隱藏ㄌ");
					$("#dialog_B").css("display","none");
					stop = false;
				}
				else
				{
					console.log("在黑貓第一次對話區");
					showContent("blackcat");
					blackcat_talktimes++;
				}
				//console.log("blackcat_talktimes++ = " + blackcat_talktimes);
			});
			
		}
		else if (vertical == 33 && horizontal == 18 && blackcat_talktimes2==0 && blackcat_talktimes!=0) 
		{
			console.log("在黑貓第2次對話區");
			mainTalk("(其實還挺簡單的?)",3);
			
			$(document).keypress(function (event) 
			{
				
				if(talkBC2==true && talkBC1==true)
				{
					$("#dialog_B").css("display","none");
					stop = false;
					console.log("已對話2次");
				}
				else
				{
					console.log("在黑貓第二次對話區");
					console.log("BC talk2 "+ blackcat_talktimes2 + " times");
					showContent("blackcat2");
					blackcat_talktimes2++;
				}
			});
			
			
		}
		
    }
	
	
	
	function showContent(who)
	{
		
		switch(who)
		{
			case 'npc02':
				
				npc2_talk_1(npc02_talktimes);
				break;
			case "blackcat":
				blackcat_talk_1(blackcat_talktimes);
				console.log("switch in black cat!");
				break;
			case "blackcat2":
				blackcat_talk_2(blackcat_talktimes2);
				break;

			default:
				break;
		}
		return true;
	}
	
	var  blackcat_talktimes2=0;

	function blackcat_talk_2(blackcat_talktimes2)
	{
		var content=
		["......沒想到你還真有點本事",
		"(嘆氣)<br>好吧，我就跟你走了",]
		
		var talkPerson=["blackcat","blackcat",];
		
		var personFace=[
		1,4];
		
		if(blackcat_talktimes2==personFace.length || blackcat_talktimes2>personFace.length)
		{
			console.log("對話次數過多");
			stop = false;
			$("#blackcat_1").css("display","none");
			$("#dialog_B").css("display","none");
			talkBC2=true;
			console.log("對話次數過多");
			
			changeMap();
			//blackcat_talktimes2 = 100;
			//++++++++
			return true;
			
		}
		
		talk(talkPerson[ blackcat_talktimes2],content[blackcat_talktimes2],personFace[blackcat_talktimes2]);
		console.log("talk "+ blackcat_talktimes2 + "times");
		console.log("對話內容: "+ content[blackcat_talktimes2]);
		
		if(blackcat_talktimes2 == 2)
		{
			changeMap();
		}
		return true;
	}

	
	function npc2_talk_1(npc02_talktimes)
	{
		var npc2_content_1 = [
		"(感覺是個好人?)<br>(總之先搭話吧?)",
		"不好意思，請問你知道哪裡可以買到貓罐罐嗎?",
		"......",
		"......嗚嗚哇啊啊啊啊啊......",
		"(?!?!?!?!)",
		"我的貓咪不見了啦......我的恰比不見了嗚嗚......",
		"要是幫我把恰比找回來，我就把我珍藏的黃金罐罐送給妳!",
		"......好。<br>(為了逃離java什麼的，找一隻貓算什麼)",
		];
		
		var talkPerson=[
		"main",
		"main",
		"npc02",
		"npc02",
		"main",
		"npc02",
		"npc02",
		"main",
		];
		
		var personFace=[
		1,
		1,
		6,
		6,
		1,
		6,
		6,
		3,
		];
		
		if(npc02_talktimes==personFace.length)
		{
			stop = false;
			$("#dialog_B").css("display","none");
			meetCatGirl = true;
			//npc02_talktimes =0;
			return true;
			
		}
		
		talk(talkPerson[ npc02_talktimes],npc2_content_1[ npc02_talktimes],personFace[npc02_talktimes]);
		return true;
	}
	
	function blackcat_talk_1(blackcat_talktimes)
	{
		var content= [
		"(蹲下，試著靠近)<br>恰比來~~~<br>乖喔~~~~",
		"......",
		"(更靠近一點)<br>來喔~~姊姊帶你回家~~",
		"不要。",
		"(?!?!?!?!)<br>(貓跟我說話了)",
		"誰要跟妳回家，我是離家出走的!",
		"......<br>(他跟我說話了!!!!)",
		"夠了，我要繼續專研java，我受夠你們這些連java都不會的賤民了。",
		"(他的眼神充滿鄙視!!!)<br>說、說什麼呢!<br>身為一個資工系的學生，我會java好嗎!",
		"......(質疑的眼神)",
		"都說我會java!不信你考我啊!",
		"哼，好啊，看看你這愚民能有多少能耐",
		];
		
		var talkPerson=[
		"main",
		"blackcat",
		"main",
		"blackcat",
		"main",
		"blackcat",
		"main",
		"blackcat",
		"main",
		"blackcat",
		"main",
		"blackcat",
		];
		
		var personFace=[
		4,4,4,4,4,4,4,4,1,4,1,4
		];
		
		if(blackcat_talktimes==personFace.length)
		{
			showQuestion();
			stop = false;
			$("#dialog_B").css("display","none");
			talkBC1 = true;
			//++++++++
			//return true;
			
		}
		
		talk(talkPerson[ blackcat_talktimes],content[blackcat_talktimes],personFace[blackcat_talktimes]);
		console.log("talk "+ blackcat_talktimes + "times");
		return true;
	}
	
	function showQuestion()
	{
		$("#problem_bg").css("display","inline");
		$("#problems").css("display","inline");
		/*
		if(answer == true)
		{
			console.log("answer = true");
			$("#problem_bg").css("display","none");
			$("#problems").css("display","none");
			return true;
		}*/
	}
	
	
	
	function talk(who,sentences,face)
	{
		switch(who)
		{
			case"main":
				mainTalk(sentences,face);
				break;
			case"npc02":
				npc2Talk(sentences,face);
				break;
			case"blackcat":
				blackcatTalk(sentences,face);
				console.log(sentences);
			default:
				break;
		}
		return true;
	}
	
	function mainTalk(sentences,face)
	{
		$("#dialog_photo").attr("src","photo/mainC_B_"+face+".png");
		var dialog_content = document.getElementById('dialog');
		dialog_content.innerHTML = sentences;
		return true;
		
	}
	
	function npc2Talk(sentences,face)
	{
		$("#dialog_photo").attr("src","photo/Char02_B_"+face+".png");
		var dialog_content = document.getElementById('dialog');
		dialog_content.innerHTML = sentences;
		return true;
		
	}
	
	function blackcatTalk(sentences,face)
	{
		$("#dialog_photo").attr("src","photo/blackcat_B_"+face+".png");
		var dialog_content = document.getElementById('dialog');
		dialog_content.innerHTML = sentences;
		console.log(sentences);
		return true;
		
	}
	
	function changeMap()
	{
		$("#map").fadeOut(1000, function()
		{
			window.location.href='end.html';
		}
		);
		
	}


//function 













