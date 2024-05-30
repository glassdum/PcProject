$(document).ready(function() {
    $('#check1, #check2').change(function() {
        if ($('#check1').is(':checked') && $('#check2').is(':checked')) {
            $('#next').addClass('active').prop('disabled', false);
        } else {
            $('#next').removeClass('active').prop('disabled', true);
        }
    });
    $('#next').click(function() {
        if (!$(this).prop('disabled')) {
            window.location.href = 'membership2.html';  // 이동할 URL을 이곳에 입력하세요.
        }
    });
});