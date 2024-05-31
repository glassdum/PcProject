$(document).ready(function() {
    // 숫자 입력 필드에 숫자만 입력되도록 설정
    $('#onlyNumber1, #onlyNumber2').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // 성별 및 국적 버튼 클릭 시 active 클래스 추가 및 제거
    $('.gender').click(function() {
        $('.gender').removeClass('active');
        $(this).addClass('active');
    });

    $('.nation').click(function() {
        $('.nation').removeClass('active');
        $(this).addClass('active');
    });

    // 다음 버튼 클릭 시 페이지 이동
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