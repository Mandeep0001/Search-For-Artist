function last_close(){
location.reload();  
}
function validate_first(){
    if(document.getElementById("track_field").value>4 || document.getElementById("track_field").value<1){
        document.getElementById("valid_msg").innerHTML="<p>Please enter value between 1 and 4</p>";     
    }
    else{
        if(document.getElementById("name_field").value==""){
           document.getElementById("valid_msg").innerHTML="<p>Please enter Artist Name</p>";  
        }
        else{
            loadDoc();
        }
    }
}
function loadDoc() {
    no_track=document.getElementById("track_field").value;
    no_t=parseInt(no_track);
    singer_name=document.getElementById("name_field").value;
    console.log("man"+no_t);  
     $.ajax({
       // http://itunes.apple.com/search?term=jack&limit=4
url : "http://itunes.apple.com/search?term="+document.getElementById("name_field").value+"&limit="+document.getElementById("track_field").value,
                type : 'POST',
                dataType : 'jsonp',
                crossDomain:true,

                success : function (data)
                {
                    artistName_arr=new Array();
                    trackName_arr=new Array();
                    document.getElementById("main_body").innerHTML="";
                    for(q=0;q<parseInt(data.resultCount);q++){
                        console.log(data.results[q].artistName);
                        artistName_arr[q]=""+(data.results[q].artistName);
                        trackName_arr[q]=""+(data.results[q].trackName);
                    }
                    n1=(data.results[0].artistName).toString();
                    //alert(data.resultCount+" "+data.results[0].wrapperType);
                    document.getElementById("tabs_layout").innerHTML='<ul >';
                    for(i=0;i<no_t;i++){
                        console.log(n1);
document.getElementById("tabs_layout").innerHTML+='<li><button id="tabs_style" onclick="sing(\''+i+'\')">'+singer_name+'</button</li>';
                    }
                    document.getElementById("tabs_layout").innerHTML+='</ul>';
        document.getElementById("main_body").innerHTML="<h3>Artist : "+artistName_arr[0]+"</h3>";
        document.getElementById("main_body").innerHTML+="<h3>Track : "+trackName_arr[0]+"</h3>";
                        
                }
            }); 
    /*
if (window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
  } else {  
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        console.log("step1");
        jsonObj = JSON.parse(xmlhttp.responseText);
        console.log("step2");
        document.getElementById("demo").innerHTML = jsonObj.resultCount;
        console.log("step3");
        //document.getElementById("demo").innerHTML=xmlhttp.responseText;
      $("#myModal").modal('toggle');
        console.log("step4");
    }
  }
  xmlhttp.open("GET",url,true);
  xmlhttp.send();
    */
}
