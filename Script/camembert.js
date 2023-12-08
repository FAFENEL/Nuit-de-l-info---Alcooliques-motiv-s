$(document).ready(function() {
    for (var i = 1; i <= 16; i++) {
        $('#name' + i).on({
            dragstart: function(e) {
                $(this).css('opacity', '0.5');
                $(this).css('borderStyle', 'dashed');
                e.originalEvent.dataTransfer.setData('text/html', this.id);
                startBlinking();
            },
            dragend: function() {
                $(this).css('opacity', '1');
                $(this).css('borderStyle', 'solid');
                stopBlinking();
            }
        });
    }

    for (var i = 1; i <= 8; i++) {
        $('#bracket' + i).on({
            dragover: function(e) {
                e.preventDefault();
                $(this).css('borderStyle', '2px solid black');
            },
            drop: function(e) {
                var data = e.originalEvent.dataTransfer.getData('text/html');
                $(this).append($("#" + data));
            }
        });
    }

    $('#bracket_main').on({
        dragover: function(e) {
            e.preventDefault();
        },
        drop: function(e) {
            var data = e.originalEvent.dataTransfer.getData('text/html');
            $(this).append($("#" + data));
        }
    });

    var blinkingInterval;s
    function startBlinking() {
        var brackets = ['#bracket1', '#bracket2', '#bracket3', '#bracket4', '#bracket5', '#bracket6', '#bracket7', '#bracket8'];
        var index = 0;
        blinkingInterval = setInterval(function() {
            $(brackets[index]).toggleClass('green-blink');
            index = (index + 1) % brackets.length;
        }, 30);
    }

    function stopBlinking() {
        clearInterval(blinkingInterval);
        $('#bracket1, #bracket2, #bracket3, #bracket4, #bracket5, #bracket6, #bracket7, #bracket8').removeClass('green-blink');
    }
});
