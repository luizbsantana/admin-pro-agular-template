import { IngredientModel } from "./ingredient.model";

export class MenuModel {
    id?: string;
    name: string = '';
    ingredients: RecipeIngredientModel[] = [];
    recipePrice: number = 0;
    efficiency: number = 0;
    costPrice: number = 0;
    profit: number = 0;
    sellPrice: number = 0;
}

export class RecipeIngredientModel {
    menuId?: string = '';
    ingredientId: string = '';
    ingredientName: string = '';
    ingredientPrice: number = 0;
    ingredientQuantity: number = 0;
}