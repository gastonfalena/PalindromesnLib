import { describe, expect, it } from 'vitest'

import { isPalindrome } from '../palindrome'

describe('Palindrome', () => {
  it('should return true if param is string palindrome', () => {
    const result = isPalindrome('hooh')
    expect(result).toBe(true)
  })
  it('should return true if param is number palindrome', () => {
    const result = isPalindrome(1221)
    expect(result).toBe(true)
  })
  it('should return false if param is string no palindrome', () => {
    const result = isPalindrome('hooe')
    expect(result).toBe(false)
  })
  it('should return false if param is number no palindrome', () => {
    const result = isPalindrome(1234)
    expect(result).toBe(false)
  })
  it('should return false if param is object', () => {
    // @ts-expect-error we want to test undefined case
    const result = isPalindrome({ 1: 1, 2: 2, 3: 2, 4: 1 })
    expect(result).toBe(false)
  })
  it('should return false if param is array', () => {
    // @ts-expect-error we want to test undefined case
    const result = isPalindrome([1, 2, 3, 4])
    expect(result).toBe(false)
  })

  it('should return false if param is boolean', () => {
    // @ts-expect-error we want to test undefined case
    const result = isPalindrome(true)
    expect(result).toBe(false)
  })
  it('should return false if param is null', () => {
    // @ts-expect-error we want to test undefined case
    const result = isPalindrome(null)
    expect(result).toBe(false)
  })
  it('should return false if param is undefined', () => {
    // @ts-expect-error we want to test undefined case
    const result = isPalindrome(undefined)
    expect(result).toBe(false)
  })
})
