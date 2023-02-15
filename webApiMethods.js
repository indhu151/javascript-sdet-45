console.log("start");
setTimeout(()=>{console.log("in progress2");
},2000)
setTimeout(()=>{console.log("in progress1");
},1000)
setTimeout(()=>{console.log("in progress3");
},3000)
setInterval(()=>{console.log("in interval");
},4000)
console.log("end");