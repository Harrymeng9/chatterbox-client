// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.


// Solution
var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <!--
      -->
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
          data-username="<%- username %>">
          <%- username %>
        </div>
        <div><%- text %></div>
      </div>
      <!--
            -->
    `)

};

// var MessageView = {
//   render: _.template(`
//     <div class="chat">
//       <div class="username"><%- username %></div>
//       <div class="text"><%- text %></div>
//     </div>
//   `),
// };
// // <!--
// // -->