

console.log(document.links);
console.log(document.scripts);
console.log(document.getElementById("paragraf")); //paragraf id sine sahip olan etiketi seç
console.log(document.getElementsByClassName("abc")[1]);//sınıf adına göre seçme
console.log(document.getElementsByTagName("a"));//etiket adına göre seçme

console.log(document.querySelector(".abc"));//sorguya göre seçme 1 eleman seçilir.Birden fazla varsa ilk bulunan eleman alınır.

console.log(document.querySelectorAll(".abc"));//sorguya göre seçme,tüm elemanlar seçilir.



function degistir(){
    var link= document.getElementsByTagName("a");//bize htmlcollection döner.
    
    // for(var i=0;i<link.length;i++)
    // {
    //     link[i].style.color="green";
    //     link[i].style.textDecoration="underline";
    //     link[i].style.fontStyle="italic";
    // }
    link=Array.from(link);//diziye dönüştürme işlemi
    link.forEach(function(eleman){
        //eleman.className="baglanti";
        eleman.style.color="green";
        eleman.style.textDecoration="underline";
        eleman.style.fontStyle="italic";
    });
  

}

document.body.children[4].children[0].style.color="purple";
//document.body.children[4].firstChild.style.color="purple";
//document.body.children[4].lastChild.style.color="purple";
//document.getElementById("torun").style.color="purple";
console.log(document.body.children[4].childNodes);
//childNodes elementlerden önceki,sonraki boşlukları,yazıları da çocuk olarak alır.
//children ise sadece etiketleri çocuk olarak alır.


var element=document.getElementById("torun");
console.log(element.parentElement);
element.parentElement.style.padding="25px";