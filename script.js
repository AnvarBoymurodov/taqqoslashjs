let user1 = { 
    name: prompt("Birinchi foydalanuvchi nomini kiriting") , 
    age: +prompt("birinchi foydalanuvchi yoshini kiriting" )
}
let user2 = { 
    name: prompt("ikkinchi foydalanuvchi nomini kiriting") , 
    age: +prompt("ikkinchi foydalanuvchi yoshini kiriting" )
}
let str = "dan katta"
let str2 = "bilan "
let str3 = "ni yoshlari teng" 
if( user1.age > user2.age ){
    user1.name = user1.name +" "
    result = user1.name + user2.name + str
    alert( result )
}else if(user1.age == user2.age ){
    user1.name = user1.name +"  "
    result = user1.name + str2 + user2.name +str3
    alert( result )
}else{
    user2.name = user2.name +"  "
    result = user2.name + user1.name + str
    alert( result )
}