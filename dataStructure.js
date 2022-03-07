
function ObjKeys(obj){
    let arr1 = Object.keys(obj)
    let ans={};
    for(let i of arr1){
        Conv(ans,i);
    }
    return ans;
}

function Conv(obj,key){
    obj[key.toUpperCase()] = educationQualifications[key];
    return educationQualifications
}
a=ObjKeys(educationQualifications)
console.log(a)

//2nd

var sample={a:1,b:2,b:3,c:8}
var summmed=sum(sample);
console.log("sum"+summed)
function sum(obj){
    var sum=0;
    for(var e1 in obj){
        for(var e2 in obj){
        if(obj.hasOwnProperty(e1)||obj.hasOwnProperty(e2)){
            if(e1==e2)
            sum=parseFloat(obj[e1])+parseFloat(obj[e2])
        }
    }
}
}
//3

isvaild=s=>{
    let stack=[]
    for(i=0;i< s.length;i++){
        let char=stack[stack.length-1]
        if(s[i]=="(" || s[i]=="{" || s[i]=="["){
            stack.push(s[i])
        }else if ((char =="("  && s[i]==")") || (char =="{"  && s[i]=="}") || (char =="["  && s[i]=="]")){
            stack.pop()
        }else return false
    }
    if(stack.length? false:true)
    {
        console.log("IsValid")
    }
    else{
        console.log("NotValid")
    }
}
