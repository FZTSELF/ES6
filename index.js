// var a="fzt";
// console.log(a);

// var a=2;
// {
//     let a=3;
// }
// console.log(a);

// for(var i=0;i<10;i++){
//     console.log(i);
// }

// let [a,b,c]=[1,2];
// console.log(b);
// console.log(c);

// let [a,b='ff']=[1,undefined];
// console.log(a+b);

// let [a,b='ff']=[1,null];
// console.log(a+b);

// let {foo,bar}={bar:"gg",foo:"哈哈"};
// console.log(bar+foo);

// const [a,b,c]="qwe";
// console.log(a);
// console.log(b);
// console.log(c);

// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);

// let arr1=["ww","ee"];
// //let arr2=arr1;
// let arr2=[...arr1];
// //console.log(arr2);
// arr2.push("rr");
// console.log(arr2);
// console.log(arr1);

// function taiji(first,...arg){
//     console.log(arg.first);
//      console.log(arg.length);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

// function taiji(first,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

// let fzt='符泽涛';
// let blog='hello,'+fzt+'你好';
// document.write(blog);

// let fzt='符泽涛';
// let blog=`hello,${fzt}你好`;
// document.write(blog);

// let a=1;
// let b=2;
// let result=`${a+b}`;
// document.write(result);
// let result2=a+b;

// let fzt='符泽涛';
// let blog='hello,你好';
// document.write(blog.indexOf(fzt));
// document.write(blog.includes(fzt));

// let a=11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('fzt'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('NaN'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2'));
// console.log('-------------------');
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('NaN'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2'));

// let a=3.14;
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// let f=Math.pow(2,53)-1;
// console.log(f);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.isSafeInteger(f));

// let json={
//     '0':'fzt',
//     '1':'哈哈',
//     '2':'fff',
//     length:3
// }
// console.log(json);
// let arr = Array.from(json);
// console.log(arr);

// let arr=Array.of(3,4,5,6);
// console.log(arr);

// let arr=[1,2,3,4,5,6,7];
// var v=arr.find((value,index,arr)=>{
//     return index>4;
// });
// console.log(v);

// let arr=[1,2,3,4,5,6,7];
// var i=arr.findIndex((value)=>{
//     return value>4;
// });
// console.log(i);

// let arr=['fzt','符泽涛','hhh','www'];
// arr.fill('web',1,3);//左闭右开
// console.log(arr);

// var myArr=[1,2,4,4,6,3,6];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

// let arr=["q",'w','e',5,6];
// for(let index of arr.keys()){
//     console.log(index);
// }

// let arr=["q",'w','e',5,6];
// for(let [index,value ] of arr.entries()){
//     console.log([index,value ]);
// }

// let arr=["q",'w','e',5,6];
// let list=arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

// function add(a,b=2){
//     //'use strict'
//     if(a===0){
//         throw new Error('this is error');
//     }
//     return a+b;
// }
// console.log(add(1));
// console.log(add.length);

// var add=(a,b=2)=>{

//    return a+b;
// }
// console.log(add(1));

// let json={
//     a:'hh',
//     b:undefined
// }
// function fun(a,b='ww'){
//     console.log(a,b);
// }
// fun(json);

// let arr=["q",'w','e',5,6];
// function fun(a,b,c,d){
//     console.log(a,b,c,d);
// }
// fun(...arr);

// let obj={
//     a:'hh',
//     b:'ww'
// }
// console.log('b' in obj);

// let arr=[,,,];
// console.log(arr.length);
// console.log(0 in arr);

// let arr1=['ww','ee'];
// console.log(0 in arr1);

// let arr=['ww','ee'];
// arr.forEach((val,index) => console.log(index,val));
// let arr=['ww','ee'];
// arr.filter(x=>console.log(x))
// let arr=['ww','ee'];
// arr.some(x=>console.log(x));
// let arr=['ww','ee'];
// console.log(arr.map(x=>'qq'));

// let arr=['ww','ee'];
// console.log(arr.toString());
// console.log(arr.join('|'));

// let name='hh';
// let skill='web';
// var obj={name,skill};
// console.log(obj);

// let key='skill';
// var obj={
//     [key]:'web'
// }
// console.log(obj.skill);

// let obj={
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));

// let obj1={name:'gg'};
// let obj2={name:'gg'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));

// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

// let a={a:'gg'};
// let b={b:'hh'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

// let a=new String;
// let b=new Number;
// let c=new Boolean;
// let d=new Array;
// let e=new Object;
// let f=Symbol();
// console.log(typeof(f));

// let g=Symbol('hhh');
// console.log(g);
// console.log(g.toString());

// let f=Symbol();
// let obj={
//     [f]:'hh'
// }
// console.log(obj[f]);
// obj[f]='kkk';
// console.log(obj[f]);

// let obj={
//     name:'hh',
//     skill:'web',
//     age:12
// };
// for(let item in obj){
//     console.log(obj[item]);
// }

// let obj={
//     name:'hh',
//     skill:'web'
// };
// let age=Symbol();
// obj[age]=14;
// console.log(obj);
// for(let item in obj){
//     console.log(obj[item]);
// }
// console.log(obj[age]);

//无重复值
// let setArr=new Set(['ww','gg','ww','rr']);
// setArr.add('vvv');
// setArr.delete('rr');
//setArr.clear();
// console.log(setArr);
// console.log(setArr.has('ww'));

// for(let item of setArr){
//     console.log(item);
// }

// setArr.forEach((value)=>console.log(value));

// let weaObj=new WeakSet();
// let obj={
//     a:'gg',
//     b:'dd'
// }
// // let obj2=obj;
// let obj2={ a:'gg',b:'dd'}
// weaObj.add(obj);
// weaObj.add(obj2);
// console.log(weaObj);

//for-in总是得到对象的key或数组、字符串的下标。
//for-of总是得到对象的value或数组、字符串的值，另外还可以用于遍历Map和Set。
// const s=new Set();
// [2,3,4,5,6,2].forEach(x=>s.add(x));
// for(let i of s){
//     console.log(i);
// }

//let json={name:'ff',skill:'rr'};
// console.log(json.name);

// var map=new Map();
// //map.set(json,'ss');
// map.set('qq',json);
// console.log(map);
// console.log(map.get('qq'));
// console.log(map.size);
// console.log(map.has('qq'));

// let obj={
//     add:function(val){
//         return val+100;
//     },
//     name:'hhh'
// }
// console.log(obj.add(100));
// console.log(obj.name);

// const em={
//     firstname:'ff',
//     lastname:'zz'
// };
// console.group('em');
// console.log(em.firstname);
// console.log(em.lastname);
// console.log(em.org);
// console.log(em.fullName);

// console.log('---------------------')
// let handler={
//     get: function(target,filedName){
//         if(filedName === 'fullName'){
//             return `${target.firstname} ${target.lastname}`;
//         }

//         return filedName in target ? 
//         target[filedName] : 
//         `No, '${filedName}'!`
//     }
// };

// let p=new Proxy(em,handler);
// console.group('proxy');
// console.log('firstname:'+p.firstname);
// console.log('lastname:'+p.lastname);
// console.log(p.org);
// console.log(p.fullName);

// const vali={
//     set : function(obj,prop,value){
//         if(prop === 'age'){
//             if(!Number.isInteger(value)){
//                 throw new TypeError('age 不是整数 ');
//             }
//             if(value<0){
//                 throw new TypeError('age 是负数');
//             }
//         }
//     }
// };
// let pr=new Proxy(em,vali);
// pr.age=-2;

// var pro=new Proxy({
//     add: function(val){
//         return val+100;
//     },
//     name:'哈哈'
// },{
//     get :function(target,key,property){
//         console.log('get!!!');
//         return target[key];
//     },
//     set:function(target,key,value,pecriver){
//         console.log(`set ${key}=${value}`);
//         return target[key]=value+'222';
//     }
// });
// console.log(pro.add(3));
// console.log(pro.name);
// pro.name='ggg';
// console.log(pro.name);

// let target=function(val){
//     console.log('ggg');
//     return val+=100;
// }
// let handler={
//     apply(target,ctx,args){
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro=new Proxy(target,handler);
// console.log(pro(5));

// let state = 1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭完成')
//     }else{
//         reject('洗菜做饭-错误')
//     }
// }
// // // // //
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭')
//     }else{
//         reject('坐下来吃饭-错误')
//     }
// }
// // //
// function step3(resolve,reject){
//     // state = 0;
//     console.log('3.开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子')
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
// // // //
// new Promise(step1).then(function(val){
//         console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
// });

// class Coder{
//     name(val){
//         console.log(val);
//         return val;
//     };

//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }

//     add(){
//         return this.a+this.b;
//     }


//     skill(val){
//         console.log(this.name('dd')+':'+'skill---'+val);
//     };
// }


// ff=new Coder(1,2);
// console.log(ff.add());

// class htmler extends Coder{

// }
