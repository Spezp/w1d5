var list = [];

module.exports = {
  listPush: function (pass) {
    list.push(pass.toLowerCase());
  },
  listReturn: function () {

    return list.sort();
  }
};

