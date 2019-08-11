// Funtion to control the 'active' status of the sidebar when the Button
// is clicked.
$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });
});
