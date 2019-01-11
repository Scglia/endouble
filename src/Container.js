import React, { Component } from 'react';
import Filters from './components/Filters';
import Grid from './components/Grid';
import { fetchRecipes } from './api';

// Container holds the state of our app
class Container extends Component {
    state = {
        recipesIds: [],
        recipesById: {},
        isLoading: false,
        areThereMoreResults: false,
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
        const { recipesIds, recipesById } = this.state;
        return recipesIds.map(id => recipesById[id]);
    };

    handleClick = () => {};

    render() {
        const recipes = this.getVisibleRecipes();
        const { isLoading, areThereMoreResults } = this.state;

        return (
            <div className="layout">
                <Filters />
                {recipes.length !== 0 && <Grid list={recipes} handleClick={this.handleClick} />}
                {!isLoading && areThereMoreResults && (
                    <button type="button" onClick={this.fetchRecipesFromApi}>
                        Load more
                    </button>
                )}
                {isLoading && 'Loading...'}
            </div>
        );
    }
}

export default Container;
