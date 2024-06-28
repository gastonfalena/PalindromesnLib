export const isPalindrome = (palindrome: string | number): boolean => {
  if (typeof palindrome === 'number') { palindrome = palindrome.toString() }
  if (typeof palindrome === 'string') {
    palindrome = palindrome.toLocaleLowerCase().trim()
    let acum: number = palindrome.length - 1
    for (let i = 0; i < acum; i++) {
      if (palindrome[i] !== palindrome[acum]) {
        return false
      }
      acum--
    }
    return true
  }
  return false
}
