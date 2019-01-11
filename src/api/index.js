const appId = 'cd370260';
const appKey = 'f537e4dc5add5c696d84b14ae8263c41';

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

/* eslint-disable import/prefer-default-export */
export const fetchRecipes = from => fetch(`https://api.edamam.com/search?app_id=${appId}&app_key=${appKey}&from=${from}&q=pasta`)
    .then(handleErrors)
    .then(res => res.json())
    .then((json) => {
        const areThereMoreResults = json.more;

        // We use the uri as id
        const recipes = json.hits.map(hit => hit.recipe);
        const recipesIds = recipes.map(recipe => recipe.uri);
        const recipesById = recipes.reduce((acc, recipe) => ({ ...acc, [recipe.uri]: recipe }), {});

        return { areThereMoreResults, recipesIds, recipesById };
    })
    .catch(error => Promise.reject(error));
