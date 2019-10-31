import { matchingBrackets } from './brackets'

describe('bracket push', () => {
  it('should check for appropriate bracketing in a set of brackets', () => {
    expect(matchingBrackets('{}')).toBe(true)
  })

  it('should return false for unclosed brackets', () => {
    expect(matchingBrackets('{{')).toBe(false)
  })

  it('should return false if brackets are out of order', () => {
    expect(matchingBrackets('}{')).toBe(false)
  })

  it('should check bracketing in more than one pair of brackets', () => {
    expect(matchingBrackets('{}[]')).toBe(true)
  })

  it('should check bracketing in nested brackets', () => {
    expect(matchingBrackets('{[]}')).toBe(true)
  })

  it('should reject brackets that are properly balanced but improperly nested', () => {
    expect(matchingBrackets('{[}]')).toBe(false)
  })

  it('should check bracket closure with deeper nesting', () => {
    expect(matchingBrackets('{[)][]}')).toBe(false)
  })

  it('should check bracket closure in a long string of brackets', () => {
    expect(matchingBrackets('{[]([()])}')).toBe(true)
  })
})
