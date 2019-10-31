import { annotate } from './minesweeper'

describe(')', () => {
  it('should handle no rows', () => {
    expect(annotate([])).toEqual([])
  })

  it('should handle no columns', () => {
    expect(annotate([''])).toEqual([''])
  })

  it('should handle no mines', () => {
    const input = ['   ', '   ', '   ']
    const expected = ['   ', '   ', '   ']
    expect(annotate(input)).toEqual(expected)
  })

  it('should handle board with only mines', () => {
    const input = ['***', '***', '***']
    const expected = ['***', '***', '***']
    expect(annotate(input)).toEqual(expected)
  })

  it('should handle mine surrounded by spaces', () => {
    const input = ['   ', ' * ', '   ']
    const expected = ['111', '1*1', '111']
    expect(annotate(input)).toEqual(expected)
  })

  it('should handle space surrounded by mines', () => {
    const input = ['***', '* *', '***']
    const expected = ['***', '*8*', '***']
    expect(annotate(input)).toEqual(expected)
  })

  it('should handle horizontal line', () => {
    const input = [' * * ']
    const expected = ['1*2*1']
    expect(annotate(input)).toEqual(expected)
  })

  it('should handle horizontal line, mines at edges', () => {
    const input = ['*   *']
    const expected = ['*1 1*']
    expect(annotate(input)).toEqual(expected)
  })

  it('should handle vertical line', () => {
    const input = [' ', '*', ' ', '*', ' ']
    const expected = ['1', '*', '2', '*', '1']
    expect(annotate(input)).toEqual(expected)
  })

  it('should handle vertical line, mines at edges', () => {
    const input = ['*', ' ', ' ', ' ', '*']
    const expected = ['*', '1', ' ', '1', '*']
    expect(annotate(input)).toEqual(expected)
  })

  it('should handle cross', () => {
    const input = ['  *  ', '  *  ', '*****', '  *  ', '  *  ']
    const expected = [' 2*2 ', '25*52', '*****', '25*52', ' 2*2 ']
    expect(annotate(input)).toEqual(expected)
  })

  it('should handle large board', () => {
    const input = [' *  * ', '  *   ', '    * ', '   * *', ' *  * ', '      ']
    const expected = [
      '1*22*1',
      '12*322',
      ' 123*2',
      '112*4*',
      '1*22*2',
      '111111'
    ]
    expect(annotate(input)).toEqual(expected)
  })
})
