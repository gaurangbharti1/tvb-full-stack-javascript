function printNameLater(message, timeout, cb) {
  const id = setTimeout(function () {
    cb(message);
  }, timeout);
}
