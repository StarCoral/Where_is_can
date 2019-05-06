var timeout=0;
function callme()
{
    alert("Timeout!!");
	clearTimeout (t);
}

window.onload = function() {
    timeoutId = setTimeout("callme()",10000);
}
function alertTimerClickHandler ( ){
          alert("Cancel timeout");
    clearTimeout ( timeoutId );
}
var m=5
var s=0
function startTime()
{
	if(m==0&& s==0)
	{
		document.getElementById('txt').innerHTML=m+":"+s
		alert("Timeout!!")
		clearTimeout (t)
	}
	else
	{

		if(s==0)
		{
			m=m-1
			s=59
		}

	document.getElementById('txt').innerHTML=m+":"+s
	s=s-1

	
	t=setTimeout("startTime()",1000)
	}

}
