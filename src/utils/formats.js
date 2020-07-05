export let months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']

export function formatDate(dateString) {
  let date = new Date(dateString)
  let monthName = months[date.getMonth()]
  let dayOfMonth = date.getDate()
  let fourDigitYear = date.getFullYear()

  return `${monthName} ${dayOfMonth}, ${fourDigitYear}`
}