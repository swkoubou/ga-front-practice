function triangle(base,height){
    return base*height/2;
}

function sum(count,s){
    for(var i=0;i<count;i++){
        s+=s;
    }
    return s;
}

function arrayWalk(data,f){
    for(var key in data){
        f(key,data[key]);
    }
}

function showElement(key,value){
    console.log(key+':'+value);
}

var ary=[1,2,4,8,16];
arrayWalk(ary,showElement);

console.log('三角形の面積:'+triangle(5,2));
console.log('和:'+sum(5,2));