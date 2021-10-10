let loadBook=(filename,displayname)=>{
    let currentBook="";
    let url="books/"+filename;
    document.getElementById("fileName").innerHTML=displayname;
   

let xhr=new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status == 200)
    {
        currentBook=xhr.responseText;
        document.getElementById("fileContent").innerHTML=currentBook;
        
    }
}

}