$(document).ready(function() {
  $('#board').fadeOut('normal', function() {
    $('#board-loading').remove();
    var data  = $('#fen-data').html();
    var chess = $('#board').chess({ fen : data });

    $('#board-flip').click(function() {
      chess.flipBoard();
      return false;
    });
  });

  $('#board').fadeIn('normal');
});