function cari(){
  var kalimat = "Saya ingin belajar bersama";
  var result = kalimat.split(" ");
  result.forEach(function(item , index){
    console.log("item :",item, " index ke ",index);
  })
}
cari()
