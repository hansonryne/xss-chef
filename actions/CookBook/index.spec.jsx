import * as actions from './index'

describe('CookBook actions roll-up', () => {
  it('should export an addRecipe function', () => {
    expect(actions.addRecipe).toBeDefined()
    expect(typeof actions.addRecipe).toBe('function')
  })

  it('should export the recipe added action constant', () => {
    expect(actions.COOK_BOOK_RECIPE_ADDED).toBeDefined()
  })

  it('should export the recipe disabled action constant', () => {
    expect(actions.COOK_BOOK_RECIPE_DISABLED).toBeDefined()
  })

  it('should export the cook book updated action constant', () => {
    expect(actions.COOK_BOOK_UPDATED).toBeDefined()
  })

  it('should export a disableRecipe function', () => {
    expect(actions.disableRecipe).toBeDefined()
    expect(typeof actions.disableRecipe).toBe('function')
  })

  it('should export a updateCookBook function', () => {
    expect(actions.updateCookBook).toBeDefined()
    expect(typeof actions.updateCookBook).toBe('function')
  })
})