$(function () {
  // TODO: Add a listener for click events on the save button.
  // This code should use the id in the containing time-block as a key
  // to save the user input in local storage.
  $(".saveBtn").on("click", function () {
    // 'this' refers to the button that was clicked.
    var blockHour = $(this).parent().attr("id"); // Get the id of the containing time-block
    var eventText = $(this).siblings(".description").val(); // Get the user input

    // Use the blockHour as a key to save the description in local storage
    localStorage.setItem(blockHour, eventText);
  });

  // TODO: Add code to apply the past, present, or future class to each time block
  // by comparing the id to the current hour.
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]); // Get the hour from the id
    var currentHour = dayjs().hour(); // Get the current hour using Day.js

    // Remove any existing classes to reset the styling
    $(this).removeClass("past present future");

    // Apply appropriate class based on the comparison
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage
  // and set the values of the corresponding textarea elements.
  $(".time-block").each(function () {
    var blockHour = $(this).attr("id"); // Get the id of the time-block as the key
    var savedEvent = localStorage.getItem(blockHour); // Get the saved user input

    if (savedEvent) {
      $(this).find(".description").val(savedEvent); // Set the textarea value
    }
  });

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});