function printNameLater(message, timeout, cb) {
  const id = setTimeout(() => {
    cb(message);
  }, timeout);
}
