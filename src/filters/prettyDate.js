const fns = require('date-fns')

module.exports = (dateStr) => {
  const d = new Date(dateStr)
  const res = fns.format(d, 'yyyy-MM-dd')
  return res
}