function solve() {
    return function (selector) {
        var template = 
            '<div class="events-calendar">' +
        '<h2 class="header">Appointments for <span class="month">{{month}}</span> <span class="year">{{year}}</span></h2>' +
        '{{#days}}' +
            '<div class="col-date">' +
            '<div class="date">{{day}}</div>' +
            '<div class="events">' +
                '{{#events}}' +
                    '{{#unless title}}' +
                        '<div class="event none" title="{{comment}}">' +
                            '<div class="title">Free slot</div>' +
                        '</div>' +
                    '{{else}}' +
                        '<div class="event {{importance}}" title="{{comment}}">' +
                            '<div class="title">{{title}}</div>' +
                            '<span class="time">at: {{time}}</span>' +
                        '</div>' +
                    '{{/unless}}' +
                '{{/events}}' +
            '</div>' +
        '</div>' +
        '{{/days}}'
        '</div>'
            ;		
        document.getElementById(selector).innerHTML = template;
    };
}

module.exports = solve;
