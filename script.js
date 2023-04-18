const date = dayjs().format(('dddd, MMMM DD'));
const today = $('#currentDay');
const saveBtn = $('.saveBtn');
const blockHour = $('.time-block');

today.text(date);

//saves item to localstorage
function saveItem() {
  console.log("Clicked!")
  var text = $(this).closest('div').find('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, text);
};

//compares current hour and timeBlock to decide if it's future past or present
function currentHour() {
blockHour.each(function() {
var timeBlock = parseInt($(this).attr('data-time'));
const hour = dayjs().hour();
  if(timeBlock < hour) {
    $(this).addClass('past');
  } else if(timeBlock === hour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  };
});
}                         

//makes block description persists via getItem
function setContent() {
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
}

setContent();
currentHour();
saveBtn.on('click', saveItem);
