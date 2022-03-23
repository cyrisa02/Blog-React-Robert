import React, { useEffect } from 'react';

const Meal = () => {

let meal = null;

    useEffect(() => {
        (async function () {
            const url = "https://www.themealdb.com/api/json/v1/1/random.php";

            const response = await fetch (url);

            const mealsFromApi = await response.json();

            const meal = mealsFromApi.meals[0];  //meals est la clé de l'API json
            
            
        })();
    });

    return (
        <>
        {meal ? (
            <article>
            <h2>{meal.strMeal}</h2>            
        </article>
        ) : (
            <p>Pas de recette/// strMeal vient du tableau json. </p>
        )}
        </>
    );
};

export default Meal;