function code1submit() {
    // var pageCoords = gettime() + " ButtonClick( #submitcode1 )";
    // log = log + pageCoords + "\r\n";

    var code1p = $('#code1').offset();
    var code1x = code1p.top;
    var code1y = code1p.left;
    //
    var submitcode1 = $('#drag1').offset();
    var submitcode1x = submitcode1.top;
    var submitcode1y = submitcode1.left;
    //
    var code1dev = code1x - submitcode1x + code1y - submitcode1y;
    //
    //
    var code2p = $('#code2').offset();
    var code2x = code2p.top;
    var code2y = code2p.left;
    var submitcode2 = $("#drag2").offset();
    var submitcode2x = submitcode2.left;
    var submitcode2y = submitcode2.top;
    var code2dev = code2x - submitcode2x + code2y - submitcode2y;
//
    //
    var code3p = $('#code3').offset();
    var code3x = code3p.top;
    var code3y = code3p.left;
    var submitcode3 = $("#drag3").offset();
    var submitcode3x = submitcode3.left;
    var submitcode3y = submitcode3.top;
    var code3dev = code3x - submitcode3x + code3y - submitcode3y;

   
    if ((code1dev >= 0) && (code1dev <= 15) &&
        (code2dev >= 0) && (code2dev <= 15) &&
        (code3dev >= 0) && (code3dev <= 15) ) {
        // gox(25);
        //console.log(25);
        // var exampleClass4 = document.getElementById('exampleClass4');
        // exampleClass4.close();
        // var dragcode = document.getElementById('dragcode');
        // dragcode.close();
        // errorcount = 0;
        // talk = 2;
        // dragstage = "2";
		answer = true;
		
        alert("答案正確!+100分");
		$("#problem_bg").css("display","none");
		$("#problems").css("display","none");
		//changeMap();
		score +=100;
		document.getElementById("demoScore").innerHTML = score;
		console.log("score = "+ score);
    }
    else {
        // gox(-10);
        //console.log(-10);
		score -=10;
        alert("答案錯誤!-10分!");
		document.getElementById("demoScore").innerHTML = score;
		console.log("score = "+ score);
        // errorcount++;
        // var pageCoords = gettime() + " Drag1Error ( " + errorcount + " )";
        // log = log + pageCoords + "\r\n";
    }
};
