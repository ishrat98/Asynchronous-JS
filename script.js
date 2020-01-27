/* const second = ()   =>  {
    
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
*/
/*
function getRecipe()    {
    setTimeout(() =>    {

        const recipeID = [100,200,2000,300];
        console.log(recipeID);

        setTimeout((id) =>    {

            const recipe = {title:'Pasta', description: 'Made by ABC'};
            console.log(`${id}: ${recipe.title} and this is ${recipe.description}`);

            setTimeout(description =>  {

                const recipe2 ={title:'Pizza', description:'Made by ABC'};
                console.log(recipe2);
            },1500, recipe.description);


        },1000, recipeID[1]);

    },2000);
}

getRecipe();
*/

//promise

const getIDs = new Promise((resolve, reject)=> {

    setTimeout(() =>    {
        reject([100,200,500,498]);

    },2000);
});

getIDs
.then(IDs =>  {
    console.log(IDs);
})
.catch(error => {
    console.log('Error!!');
});