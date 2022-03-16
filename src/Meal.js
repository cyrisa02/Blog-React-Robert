import React, { useEffect } from 'react';

const Meal = () => {

let meal = null;

    useEffect(() => {
        (async function () {
            const url = "https://www.themealdb.com/api/json/v1/1/random.php";

            const response = await fetch (url);

            const mealsFromApi = await response.json();

            const meal = mealsFromApi.meals[0];  
            
            console.log (meal);

        })();
    });

    return (
        <article>
            <h2>Pâté en croute</h2>
            
        </article>
    );
};

export default Meal;