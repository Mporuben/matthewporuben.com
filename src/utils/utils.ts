export const formatDateDDMMYYYY = (dateS: string) => {
  const date = new Date(dateS)
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}
