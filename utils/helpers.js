// Function to format a date in the format MM/DD/YYYY
const format_date = date => {
  return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
};

module.exports = {
  format_date: format_date,
  format_plural: format_plural
};

