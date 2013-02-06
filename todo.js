var createNewTodo = function() {
  // Get the text in the input box
  var todoText = $("#new_item").val();

  // Only create a new item if todoText isn't blank
  if (todoText != "") {
    // Add a new item to the list
    $("#todo_list").append('<li>' + todoText + '</li>');

    // Add a handler to the todo item we just added to remove it when we click on it
    var lastTodo = $("#todo_list > li").last();
    lastTodo.click(function() {
      $(this).remove();

      // Return focus to input box after clicking on an item
      $("#new_item").focus();
    });

    // Clear the input box
    $("#new_item").val("");

    // Return focus to the input box
    $("#new_item").focus();
  }
}

// Things to do once the page is fully loaded
$(document).ready(function() {

  // Create a new todo item when enter is pressed
  $(document).keypress(function(event) {
    if (event.which == 13) {
      createNewTodo();
    }
  });

  // Start with focus on the input box
  $("#new_item").focus();
});
