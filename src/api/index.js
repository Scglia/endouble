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
export const fetchRecipes = () => fetch(`https://api.edamam.com/search?app_id=${appId}&app_key=${appKey}&q=pasta`)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => json)
    .catch(error => Promise.reject(error));
