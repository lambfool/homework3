var year=prompt ("Enter your age:");
var end= 90;
var yearx= year* 365;
var endx= (90 * 365) - yearx;
var endy = (end * 52)- (year * 52);
var endz= (end * 12)-(year*12);
console.log("You have "+ endx+ " days, "+ endy+ " weeks, "+ endz+" month left.");
