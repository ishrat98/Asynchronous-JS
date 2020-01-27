const second = ()   =>  {
    
    setTimeout(() =>    {
        console.log("Async Msg");
    },2000);
}

const first= ()=> {
    console.log("Hello from Dhaka");
    second();
    console.log("Third");
}

first();