
    var map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//1
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//2
        [1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1],//3
        [1, 2, 2, 0, 2, 2, 0, 2, 1, 0, 1],//4
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//5
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],//6
		[1, 4, 4, 4, 4, 0, 0, 0, 0, 1, 1],//7
		[1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],//8
		[1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],//9
		[1, 2, 0, 0, 0, 3, 0, 0, 0, 0, 1],//10
		[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],//11
		[1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],//12
		[1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],//13
	/////1  2  3  4  5  6  7  8  9 10  11 
		];
		
	
	

	
		
	var preWay = null;//上一步行走方向
	var samesteps = 0;//重複方向次數
	const SIZE = 64;//單一div大小

    //// map陣列值為 0 圖片通行
    //// map陣列值為 1 障礙物
    //// map陣列值為 2 可對話物品
	//// map陣列值為 3 NPC
	//// map陣列值為 4 可通過之障礙物後方
    var stop = false;// 控制是否能行走，預設可以行走
    var verticalLength = map.length;// 欄
    var horizontalLength = map[map.length - 1].length;// 列

    var vertical = 3;// 圖片初始位置 陣列 欄
    var horizontal = 6;// 圖片初始位置 陣列 列
    var obstacle = false; // 判斷是否有障礙物
	
	var totalVertical = verticalLength*SIZE;
	var totalHorizontal = horizontalLength*SIZE;
	
	
    $(function () {
        $("#start").css("top", vertical * SIZE);// 圖片初始位置 陣列 欄
        $("#start").css("left", horizontal * SIZE);// 圖片初始位置 陣列 列
        $("#mainC").css("top", vertical * SIZE);// 圖片初始位置 陣列 欄
        $("#mainC").css("left", horizontal * SIZE);// 圖片初始位置 陣列 列
        //
        $("#map").css("height", verticalLength * SIZE);// 透過陣列 橫 得知地圖最大高度範圍
        $("#map").css("width", horizontalLength * SIZE);//透過陣列 列 得知地圖最大長度範圍
        //
        for (var i = 0; i < verticalLength; i++) {
            for (var j = 0; j < horizontalLength; j++) {
                if (map[i][j] == 1) {
                    $("#map").append("<div class='obstacle'></div>");
                    // 障礙物
                } else if (map[i][j] == 2) {
                    $("#map").append("<div class='items'></div>");
                    // 觸發物品
                } else if (map[i][j] == 3) {
                    $("#map").append("<div class='NPC'></div>");
                    // 角色
                }else {
                    $("#map").append("<div class='pass'></div>");
                    // 可通行
                }
            }
        }


    });

    $(document).keydown(function (event) {
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
		console.log("same way!");
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
						console.log("leg 1");
						$("#mainC").attr("src","photo/mainC_3.png");
					}
					if(whichLeg == 1) 
					{
						console.log("leg 2");
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
						console.log("leg 1");
						$("#mainC").attr("src","photo/mainC_9.png");
					}
                    this.vertical = vertical - 1;// 陣列向上移動
					if(whichLeg == 1) 
					{
						console.log("leg 2");
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
					console.log("leg 1");
						$("#mainC").attr({"src":"photo/mainC_6.png","width":"100","height":"100"});
					}
                    this.horizontal = horizontal + 1;// 陣列向右移動
					if(whichLeg == 1) 
					{
						console.log("leg 2");
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
						console.log("leg 1");
						$("#mainC").attr({"src":"photo/mainC_0.png","width":"100","height":"100"});
                    }
					this.vertical = vertical + 1;// 陣列向下移動
					if(whichLeg == 1) 
					{
						console.log("leg 2");
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
        } 
		else if (map == 2 || map==3) 
		{
			
            stop = true;// 進入對話框座標，停止圖片移動
            $("#dialog").empty();// 清除對話框
            dialog(vertical, horizontal);// 顯示對話框座標
            $("#dialog_B").css("display", "inline");//顯示對話框
			//$("#map").css("position", "fixed");
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
		}
		else //不通過
		{
			
			if(behind) $("#mainC").css("opacity", "0.3");
            return true;// 回到上一步 座標位置
        }

    }//pass
	
    // 對話框
    function dialog(vertical, horizontal) 
	{
		
		if (vertical == 9 && horizontal == 5) 
		{
			var dialog_content = document.getElementById('dialog');
			dialog_content.innerHTML = "喵。\n(好餓)";
			
		}
		else if (vertical == 2 && horizontal == 6) 
		{
			var dialog_content = document.getElementById('dialog');
			dialog_content.innerHTML = "今天的我也好美。";
			
		}
		else if (vertical == 3 && horizontal ==7) 
		{
			var dialog_content = document.getElementById('dialog');
			dialog_content.innerHTML = "2018/05/30 天氣:熱到爆<br>啊......我是不是要死了，沒有學分也沒有睡眠，好想死。果然貓咪才是正義。";
		}
		else if (vertical == 3 && horizontal ==4 || horizontal ==5) 
		{
			var dialog_content = document.getElementById('dialog');
			dialog_content.innerHTML = "雖然很想睡，但還不是時候呢。";
			
		}
		else if (vertical == 9 && horizontal ==1) 
		{
			var dialog_content = document.getElementById('dialog');
			dialog_content.innerHTML = "......原來家裡還有剩一點上次去全聯買的罐罐啊?";
			
		}
		else if (vertical == 2 && horizontal == 3) 
		{
			var dialog_content = document.getElementById('dialog');
			dialog_content.innerHTML = "看著就餓了......南瓜派......";
			
		}
		else if (vertical == 12 && horizontal == 8) //從門離開，進入下一個地圖
		{
			var dialog_content = document.getElementById('dialog');
			dialog_content.innerHTML = "離開房間";
		}
		else if (vertical == 3 && horizontal == 1 || horizontal == 2) //從門離開，進入下一個地圖
		{
			var dialog_content = document.getElementById('dialog');
			dialog_content.innerHTML = "仔細一看，除了制服以外還有幾件奇怪的貓耳帽T放在裡面。";
		}
    }
	
	

function changeMap(v, h)
{
	console.log("v = "+vertical+" h = "+horizontal);
	if(v == 11 && h == 8) 
	{
		$("#map").fadeOut(1000, function(){
			window.location.href='map2.php';
			//var href= <?php header("location:../map2.html.php"); ?>
			}
		);
		
		
	}
	else {return true;}
}