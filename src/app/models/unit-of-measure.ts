export enum UnitOfMeasureEnum {
    None = 0,
    Grams = 1,
    Milliliter = 2,
    Box = 3,
    Unity = 4
}

export class UnitOfMeasureModel {
    id: UnitOfMeasureEnum;
    name: string;
}

export const UnitsOfMeasure: UnitOfMeasureModel[] = [
    { id: UnitOfMeasureEnum.Grams, name: 'Gramas' },
    { id: UnitOfMeasureEnum.Milliliter, name: 'Mililitro' },
    { id: UnitOfMeasureEnum.Box, name: 'Caixa' },
    { id: UnitOfMeasureEnum.Unity, name: 'Unidade' }
]