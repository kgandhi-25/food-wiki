import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    api.get(`/${id}`).then((response) => {
      setRecipe(response.data);
    });
  }, [id]);

  return (
    <div>
      <h2>{recipe.description}</h2>
      <table>
        <tbody>
          <tr>
            <td>Calories:</td>
            <td>{recipe.labelNutrients.calories.value}</td>
          </tr>
          <tr>
            <td>Protein:</td>
            <td>{recipe.labelNutrients.protein.value}</td>
          </tr>
          <tr>
            <td>Fat:</td>
            <td>{recipe.labelNutrients.fat.value}</td>
          </tr>
          <tr>
            <td>Carbohydrates:</td>
            <td>{recipe.labelNutrients.carbohydrates.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Recipe;
