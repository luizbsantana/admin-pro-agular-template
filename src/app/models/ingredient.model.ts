import { UnitOfMeasureEnum } from "./unit-of-measure";

export class IngredientModel {
    id?: string = '';
    name: string = '';
    price: number = 0;
    size: number = 0;
    unitOfMeasure: UnitOfMeasureEnum = UnitOfMeasureEnum.None
}