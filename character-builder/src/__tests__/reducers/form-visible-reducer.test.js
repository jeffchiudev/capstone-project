import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("formVisibleReducer", () => {

  test('should return default if no action recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('should toggle visibility to true', () => {
    expect(formVisibleReducer(false, {type: 'TOGGLE_FORM'})).toEqual(true);
  });

});