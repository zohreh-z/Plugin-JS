/**
 * A menu plugin for jQuery with cool hover effects.
 *
 **/
$(function() {
$.fn.lavaLamp = function(o) {
    o = $.extend({ fx: "linear", speed: 500, click: function(){} }, o || {});

    return this.each(function() {
        var me = $(this),
            $back = $('<li class="back"><div class="left"></div></li>').appendTo(me),
            $li = $("li", this), curr = $("li.current_page_item", this)[0] || $($li[0]).addClass("current_page_item")[0];

        $li.hover(function(e){
            move(this);
            },function(e){
                setCurr(curr);
            }
        );

        $li.click(function(e) {
            setCurr(this);
            $("li.current_page_item").removeClass('current_page_item');
            $(this).addClass('current_page_item');
            return o.click.apply(this, [e, this]);
        });

        setCurr(curr);

        function move(el) {
            $back.css({ "left": el.offsetLeft+"px", "width": el.offsetWidth+"px" });
        };

        function setCurr(el) {
            move(el);
            curr = el;
        };
    });
};
});
