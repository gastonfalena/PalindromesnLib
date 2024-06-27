export const fn = (palindrome: string | number): boolean => {
  if (typeof palindrome === 'number') { palindrome = palindrome.toString() }
  if (typeof palindrome === 'string') {
    palindrome = palindrome.toLocaleLowerCase().trim()
    let acum: number = palindrome.length
    for (let i = 0; i < acum; i++) {
      if (palindrome[i] === palindrome[acum]) {
        acum--
      } else { return false }
    }
  }
  return true
}
