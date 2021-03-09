var lenghtofside1 = 5;
var lenghtofside2 = 6;
var lenghtofside3 = 7;

var sum=(lenghtofside1+lenghtofside2+lenghtofside3)/2;
var area = Math.sqrt(sum *((sum-lenghtofside1) * (sum - lenghtofside2) * (sum-lenghtofside3)));
console.log(area);
