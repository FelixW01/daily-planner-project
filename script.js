const date = dayjs().format(('dddd, MMMM DD'));
console.log(date);
const today = $('#currentDay');
const saveBtn = $('.saveBtn');
const blockHour = $('.time-block');

today.text(date);

function saveItem() {
  console.log("Clicked!")
  var text = $(this).closest('div').find('.description').val();
  var time = $(this).parent().attr('id');
  console.log(text);
  console.log(time);
  localStorage.setItem(time, text);
};

function currentHour() {
  blockHour.each(function() {
var timeBlock = parseInt($(this).attr('data-time'));
const hour = 10;
console.log(timeBlock + " timeBlock");
console.log(hour + " current hour");
  if(timeBlock < hour) {
    console.log('past');
    $(this).addClass('past');
  } else if(timeBlock === hour) {
    console.log('present')
    $(this).addClass('present');
  } else {
    console.log('future')
    $(this).addClass('future');
  };
});
                           

//get the id, and the hour of the blocks
// for each of the blocks {
// if the hour of the block === hour then current
// if the hour of the block < hour then past
//if the hour of the block > hour then future
//}
}
currentHour();
// blockHour.on('click',currentHour);
saveBtn.on('click', saveItem);


 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //