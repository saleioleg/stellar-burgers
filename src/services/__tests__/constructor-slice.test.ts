import burgerConstructorReducer, {
  addIngredient,
  removeIngredient,
  moveIngredient,
  clearConstructor
} from '../constructor-slice';
import type { TConstructorState, TIngredient } from '@utils-types';

describe('Тестирование редьюсера burgerConstructorSlice', () => {

  const initialState: TConstructorState = {
    bun: null,
    ingredients: [],
  };

  const mockBun: TIngredient = {
    _id: '643d6964ac3d7d001be207ad',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  };

  const mockMainIngredient: TIngredient = {
    _id: '643d6964ac3d7d001be207b1',
    name: 'Филе Люминесцентного кексоваодора',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
  };

  test('возвращает начальное состояние при вызове с undefined и неизвестным экшеном (UNKNOWN)', () => {
    const action = { type: 'UNKNOWN' };
    const state = burgerConstructorReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  test('добавляет булку в конструктор через addIngredient', () => {
    const action = addIngredient(mockBun);
    const state = burgerConstructorReducer(initialState, action);

    expect(state.bun).toEqual(
      expect.objectContaining({
        _id: mockBun._id,
        id: expect.any(String) // проверяем, что благодаря prepare сгенерировался уникальный id
      })
    );
  });

  test('добавляет обычный ингредиент в список ingredients через addIngredient', () => {
    const action = addIngredient(mockMainIngredient);
    const state = burgerConstructorReducer(initialState, action);

    expect(state.ingredients.length).toBe(1);
    expect(state.ingredients[0]).toEqual(
      expect.objectContaining({
        _id: mockMainIngredient._id,
        id: expect.any(String)
      })
    );
  });

  test('удаляет ингредиент по id через removeIngredient', () => {
    // Подготовим состояние, где уже есть ингредиент с конкретным id
    const ingredientWithId = { ...mockMainIngredient, id: 'test-id-123' };
    const prepState: TConstructorState = {
      ...initialState,
      ingredients: [ingredientWithId]
    };

    const action = removeIngredient('test-id-123');
    const state = burgerConstructorReducer(prepState, action);

    expect(state.ingredients.length).toBe(0);
  });

  test('изменяет порядок ингредиентов через moveIngredient', () => {
    const ingredient1 = { ...mockMainIngredient, id: 'id-1', name: 'Ингредиент 1' };
    const ingredient2 = { ...mockMainIngredient, id: 'id-2', name: 'Ингредиент 2' };
    
    const prepState: TConstructorState = {
      ...initialState,
      ingredients: [ingredient1, ingredient2]
    };

    // Перемещаем элемент с индекса 0 на индекс 1
    const action = moveIngredient({ index: 0, moveIndex: 1 });
    const state = burgerConstructorReducer(prepState, action);

    expect(state.ingredients[0].id).toBe('id-2');
    expect(state.ingredients[1].id).toBe('id-1');
  });

  test('очищает конструктор через clearConstructor', () => {
    const prepState: TConstructorState = {
      bun: { ...mockBun, id: 'bun-id' },
      ingredients: [{ ...mockMainIngredient, id: 'ing-id' }]
    };

    const action = clearConstructor();
    const state = burgerConstructorReducer(prepState, action);

    expect(state.bun).toBeNull();
    expect(state.ingredients).toEqual([]);
  });

});