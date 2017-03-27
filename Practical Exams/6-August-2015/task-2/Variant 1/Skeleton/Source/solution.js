function solve() {
    $.fn.datepicker = function () {
        var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var WEEK_DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

        Date.prototype.getMonthName = function () {
            return MONTH_NAMES[this.getMonth()];
        };

        Date.prototype.getDayName = function () {
            return WEEK_DAY_NAMES[this.getDay()];
        };
		
	var $this = $(this);
        var wrapper = $('<div/>').addClass('datepicker-wrapper');
        var picker = $('<div/>').addClass('picker');
        $this.addClass('datepicker').wrap(wrapper);
        wrapper = $this.parent();
        var controls = $('<div/>').addClass('controls').appendTo(picker);
        var buttonPrev = $('<button/>').addClass('btn btn-previous').text('<').attr('data-operation', '-1').appendTo(controls);
        var currMonth = $('<div/>').addClass('current-month').text(today.getMonthName() + ' ' + today.getFullYear()).appendTo(controls);
        var buttonNext = $('<button/>').addClass('btn btn-next').text('>').attr('data-operation', '1').appendTo(controls);

        makeCalendar(today).appendTo(picker);

        var currDate = $('<div/>').addClass('current-date').appendTo(picker);
        $('<a/>')
            .attr('href', '#')
            .addClass('current-date-link')
            .text(today.getDate() + ' ' + today.getMonthName() + ' ' + today.getFullYear())
            .appendTo(currDate)
            .on('click', function() {
                setDate(today);
                togglePickerVisibility();
            })

        function makeCalendar(date) {
            var ROWS = 6;
            var calendar = $('<table/>').addClass('calendar');
            var tablehead = $('<thead/>').appendTo(calendar);
            for(var i = 0; i < 7; i += 1) {
                $('<th/>').text(WEEK_DAY_NAMES[i]).appendTo(tablehead);
            }
            var row = $()

            return calendar;
        }

        controls.on('click', '.btn', function() {
            
            var operation = parseInt($(this).attr('data-operation'));
            var date = new Date(today.setMonth(today.getMonth() + operation));
            setCurrMonth(date);
        })

        function togglePickerVisibility() {
            picker.toggleClass('picker-visible');
        }

        function setDate(date) {
            $this.val(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
        }

        function setCurrMonth(date) {
            currMonth.text(date.getMonthName() + ' ' + date.getFullYear());
        }

        $this.on('click', function () {
            togglePickerVisibility()
        });

        $(document).on('click', function(ev) {
            if (!$(ev.target).parents('.datepicker-wrapper').length) {
                if(picker.hasClass('picker-visible')) {
                togglePickerVisibility();
                }
            };
        })

        wrapper.append(picker);
        return this;
    };
};
