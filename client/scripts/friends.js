// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

// Solution
var Friends = {

  _data: new Set,

  items: function () {
    return _.chain([...Friends._data]);
  },

  isFriend: function (name) {
    return Friends._data.has(name);
  },

  toggleStatus: function (name, callback = () => { }) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }

};
// var Friends = {
//   // TODO: Define how you want to store your list of friends.

//   _data: null,
//   initialize: function () {
//     // TODO: Perform any work which needs to be done
//     // when this view loads.
//     // write the get methods and console it
//     //   MessagesView.handleClick();
//     Friends.toggleStatus(name);
//   },

//   storage: {},

//   toggleStatus: function (name) {
//     if (Friends.storage[name] === undefined) {
//       Friends.storage[name] = name;
//     } else {
//       delete Friends.storage[name];
//     }
//   }
//   // TODO: Define methods which allow you to add, toggle,
//   // and check the friendship status of other users.
// };