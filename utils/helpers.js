// Function to format a date in the format MM/DD/YYYY
const format_date = date => {
  return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
};

// Function to format a word into its plural form if the amount is not equal to 1
const format_plural = (word, amount) => {
  if (amount !== 1) {
    return `${word}s`;
  }
  return word;
};

module.exports = {
  format_date: format_date,
  format_plural: format_plural
};

