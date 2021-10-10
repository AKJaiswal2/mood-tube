let loadLyrics=(filename,displayname,id)=>{
    let currentLyrics="";
    let url="Lyrics/"+filename;
    document.getElementById("fileName").innerHTML=displayname;
   

let xhr=new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status == 200)
    {
        currentLyrics=xhr.responseText;
        document.getElementById("fileContent").innerHTML=currentLyrics;
        document.getElementById("id").play;
    }
}
}