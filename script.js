//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the saved preferences from the cookies
  var savedFontSize = getCookie('fontsize');
  var savedFontColor = getCookie('fontcolor');

  // Apply the saved preferences if available
  if (savedFontSize) {
    document.getElementById('fontsize').value = savedFontSize;
    document.body.style.fontSize = savedFontSize + 'px';
  }
  if (savedFontColor) {
    document.getElementById('fontcolor').value = savedFontColor;
    document.body.style.color = savedFontColor;
  }

  // Handle form submission
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected font size and color values
    var fontSize = document.getElementById('fontsize').value;
    var fontColor = document.getElementById('fontcolor').value;

    // Apply the selected preferences
    document.body.style.fontSize = fontSize + 'px';
    document.body.style.color = fontColor;

    // Save the preferences in cookies
    setCookie('fontsize', fontSize, 365);
    setCookie('fontcolor', fontColor, 365);
  });
});

// Function to retrieve a cookie value by name
function getCookie(name) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

// Function to set a cookie value
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}
