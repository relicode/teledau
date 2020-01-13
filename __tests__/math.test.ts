import truth, { multiplyByTwo } from '@utils/math'

test('if knows the secret to the universe', () => {
  expect(truth).toEqual(42)
})

test('if multiplies by two', () => {
  expect(multiplyByTwo(6)).toEqual(12)
})
