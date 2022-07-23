export default function toFix(value) {
  value = parseFloat(value)
  const lengthNum = String(value).split('')

  switch (lengthNum.length) {
    case 4:
      return `${lengthNum.slice(0, 2).join('.')}K`
    case 5:
      return `${lengthNum.slice(0, 2).join('')}.${lengthNum[2]}K`
    case 6:
      return `${lengthNum.slice(0, 3).join('')}.${lengthNum[3]}K`
    case 7:
      return `${lengthNum.slice(0, 2).join('.')}M`
    case 8:
      return `${lengthNum.slice(0, 2).join('')}.${lengthNum[2]}M`
    case 9:
      return `${lengthNum.slice(0, 3).join('')}.${lengthNum[3]}M`
    default:
      return value

  }



}
