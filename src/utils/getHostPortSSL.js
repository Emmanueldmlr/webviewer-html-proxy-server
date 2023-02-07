const https = require('https');
const http  = require ('http');

const getHostPortSSL = (url, allowHTTPProxy = false) => {
  const {
    hostname,
    pathname,
    protocol,
    port,
  } = new URL(url);
  let parsedPort;
  let parsedSSL;
  // proxied URLs will be prefixed with https if doesn't start with http(s)
  // safe to assume that if it's not protocol http then it should be https
  if (allowHTTPProxy && protocol === 'http:') {
    parsedPort = parseInt(port, 10) || 80;
    parsedSSL = http;
  } else {
    parsedPort = 443;
    parsedSSL = https;
  }
  return {
    parsedHost: hostname,
    parsedPort,
    parsedSSL,
    pathname,
  };
};

module.exports =  { getHostPortSSL };