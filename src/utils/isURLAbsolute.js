 const isURLAbsolute = (url) => {
  return url.indexOf('://') > 0 || url.indexOf('//') === 0;
};

const getCorrectHref = (url) => {
  if (url.indexOf('//') === 0) {
    return `https:${url}`;
  }
  return url;
};

module.exports = {isURLAbsolute, getCorrectHref}