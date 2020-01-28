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
/*
const getIDs = new Promise((resolve, reject)=> {

    setTimeout(() =>    {
        resolve([100,200,500,498]);

    },2000);
});

const getRecipe = recID =>  {

    return new Promise((resolve, reject) => {
        setTimeout((ID)=> {
            const recipe = {title:'Pasta', description: 'Made by ABC'};
            resolve(`${ID}: ${recipe.title} and this is ${recipe.description}`);
        },2000, recID);
    });
};

getIDs
.then(IDs =>  {
    console.log(IDs);
    return getRecipe(IDs[1]);
})
.then(recipe=>   {
    console.log(recipe);

})
.catch(error => {
    console.log('Error!!');
});
*/

  /*      const getIDs = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([523, 883, 432, 974]);
            }, 1500);
        });

        const getRecipe = recID => {
            return new Promise((resolve, reject) => {
                setTimeout(ID => {
                    const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
                    resolve(`${ID}: ${recipe.title}`);
                }, 1500, recID);
            });
        };

        const getRelated = publisher => {
            return new Promise((resolve, reject) => {
                setTimeout(pub => {
                    const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
                    resolve(`${pub}: ${recipe.title}`);
                }, 1500, publisher);
            });
        };

        getIDs
        .then(IDs => {
            console.log(IDs);
            return getRecipe(IDs[2]);
        })
        .then(recipe => {
            console.log(recipe);
            return getRelated('Jonas Schmedtmann');
        })
        .then(recipe => {
            console.log(recipe);
        })
        .catch(error => {
             console.log('Error!!');
         });
         

        async function getRecipesAW() {
                const IDs = await getIDs;
                console.log(IDs);
                const recipe = await getRecipe(IDs[2]);
                console.log(recipe);
                const related = await getRelated('Jonas Schmedtmann');
                console.log(related);
    
                return recipe;
            }
            getRecipesAW().then(result => console.log(`${result} is the best ever!`));
    */

 /*   fetch
    ('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/')
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(data =>   {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
    */

    function getWeather(woeid) {
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            // console.log(result);
            return result.json();
        })
        .then(data => {
            // console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
        })
        .catch(error => console.log(error));
        
    }

    getWeather(2487956);
    getWeather(44418);
    