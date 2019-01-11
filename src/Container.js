import React, { Component } from 'react';
import Filters from './components/Filters';
import Grid from './components/Grid';
import Detail from './components/Detail';
import { fetchRecipes } from './api';

// Container holds the state of our app
class Container extends Component {
    state = {
        recipesIds: [],
        recipesById: {},
        isLoading: false,
        areThereMoreResults: false,
        filter: '',
        detailedRecipeId: null, // if not null, shows the detailed view of a recipe
    };

    componentDidMount() {
        this.fetchRecipesFromApi();
    }

    fetchRecipesFromApi = () => {
        const { recipesIds, recipesById } = this.state;

        this.setState({ isLoading: true });
        fetchRecipes(recipesIds.length).then((res) => {
            this.setState({
                recipesIds: [...recipesIds, ...res.recipesIds],
                recipesById: { ...recipesById, ...res.recipesById },
                isLoading: false,
                areThereMoreResults: res.areThereMoreResults,
            });
        });
    };

    getVisibleRecipes = () => {
        const { recipesIds, recipesById, filter } = this.state;
        return recipesIds
            .filter(id => recipesById[id].label.toLowerCase().includes(filter.toLowerCase()))
            .map(id => recipesById[id]);
    };

    changeFilter = (value) => {
        this.setState({
            filter: value,
        });
    };

    showDetails = (recipeId) => {
        this.setState({
            detailedRecipeId: recipeId,
        });
    };

    hideDetails = () => {
        this.setState({
            detailedRecipeId: null,
        });
    };

    render() {
        const recipes = this.getVisibleRecipes();
        const { isLoading, areThereMoreResults, filter, detailedRecipeId, recipesById } = this.state;

        return (
            <div className="layout">
                <Filters handleChange={this.changeFilter} filter={filter} />

                {recipes.length !== 0 && <Grid list={recipes} handleClick={this.showDetails} />}

                {!isLoading && areThereMoreResults && (
                    <button type="button" onClick={this.fetchRecipesFromApi}>
                        Load more
                    </button>
                )}

                {isLoading && 'Loading...'}

                {detailedRecipeId && <Detail recipe={recipesById[detailedRecipeId]} hide={this.hideDetails} />}
            </div>
        );
    }
}

export default Container;
