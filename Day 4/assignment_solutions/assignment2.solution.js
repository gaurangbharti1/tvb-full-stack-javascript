function get(url, cb) {
  $.ajax({
    url: url,
    success: function(data) {
      cb(data);
    },
  });
}

/** Alternate solution */
function get(url, cb) {
  $.get(url, function(data) {
    cb(data);
  });
}
