const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-'

export function intToRadix64 (num: number): string {
  let encoded = ''
  while (num > 0) {
    const remainder = num % ALPHABET.length
    num = Math.floor(num / ALPHABET.length)
    encoded = ALPHABET[remainder] + encoded
  }
  return encoded
}

export function radix64ToInt (str: string): number {
  let decoded = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i)
    const index = ALPHABET.indexOf(char)
    decoded = decoded * ALPHABET.length + index
  }
  return decoded
}

export function getRandomShortCode () {
  const id = Math.floor(Math.random() * Math.pow(2, 48))
  const shortCode = intToRadix64(id)
  return ({ id, shortCode })
}

export function getUrlIdFromShortCode (shortCode: string): number {
  return radix64ToInt(shortCode)
}
