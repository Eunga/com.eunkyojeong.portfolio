export default class TransitionEvent {
    constructor() {
        this.TRANSITION_INTERVAL_IN_MILLIS = 1500; // for debugging
        // this.TRANSITION_INTERVAL_IN_MILLIS = 300;
        this.DEFAULT_EASING_WAY = 'easeOutCubic';
    }

    beforeEnter(el) {
        console.log("beforeEnter");
    }

    enter(el, callback) {
        console.log("enter");

        callback();
    }

    afterEnter(el) {
        console.log("afterEnter");
    }

    beforeLeave(el) {
        console.log("beforeLeave");
        const elementId = $(el).attr('id');
        if (elementId === 'portfolio-detail') {
            this._beforeLeaveDetail()
        } else if (elementId === 'portfolio') {
            this._beforeLeaveList()
        }
    }

    leave(el, callback) {
        console.log("leave");
        setTimeout(() => {
            callback();
        }, this.TRANSITION_INTERVAL_IN_MILLIS);
    }

    afterLeave(el) {
        console.log("afterLeave");
    }

    _beforeLeaveDetail() {
        $('.detail .portfolio-item-subtitle').hide();
        $('.detail .portfolio-work-count').css({
            'visibility': 'visible'
        });
        $('.detail .portfolio-item-brief').animate({
            'bottom': '0px' 
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('.detail .portfolio-item-stuff img').transition({
            'scale': '1.3',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('.detail .portfolio-detail-info').transition({
            y: 300,
            opacity: 0,
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('#margin.detail #margin-left').transition({
            'x': '300',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('#margin.detail #margin-right').transition({
            'x': '-300',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('#margin.detail #margin-bottom').transition({
            'y': '-300',
        }, 0, this.DEFAULT_EASING_WAY);

        $('#margin.detail #margin-top').transition({
            'y': '300',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('#portfolio-meta').transition({
            'height': '100vh'
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);
    }

    _beforeLeaveList() {
        $('.list .portfolio-work-count').css({
            'visibility': 'hidden'
        });

        $('.list .portfolio-item-brief').animate({
            'top': '0px',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('.list .portfolio-item-subtitle').animate({
            opacity: 1,
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('.list .portfolio-item-stuff img').transition({
            'scale': '0.8',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('#margin.home #margin-left').transition({
            'x': '-300',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('#margin.home #margin-right').transition({
            'x': '300',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('#margin.home #margin-bottom').transition({
            'y': '300',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);

        $('#margin.home #margin-top').transition({
            'y': '-300',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);
        
        $('#portfolio-bottom-mask').animate({
            'top': '640px',
        }, this.TRANSITION_INTERVAL_IN_MILLIS, this.DEFAULT_EASING_WAY);
    }
}