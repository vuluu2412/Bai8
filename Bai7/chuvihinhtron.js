// let a = +prompt("Nhap ban kinh")
// let b = Math.PI*a*2;
// document.write("chu vi hinh tron la : " + b);
// function chuvi(){
//     document.getElementById("chuvi").innerHTML=
function chuvi(){
    let a = document.getElementById("bankinh").value;
    let b = Math.PI*a*2;
    document.write(b);
}
