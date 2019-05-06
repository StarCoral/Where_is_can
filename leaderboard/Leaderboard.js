
  $( function() {
    $( "#dialogL" ).dialog({
      autoOpen: false,
      show: {
       
        duration: 1000
      },
      hide: {
       
        duration: 1000
      }
    });
 
    $( "#Leaderboard" ).on( "click", function() {
      $( "#dialogL" ).dialog( "open" );
    });
  } );

    $( function() {
    $( "#dialogG" ).dialog({
      autoOpen: false,
      show: {
       
        duration: 1000
      },
      hide: {
       
        duration: 1000
      }
    });
 
    $( "#gametext" ).on( "click", function() {
      $( "#dialogG" ).dialog( "open" );
    });
  } );