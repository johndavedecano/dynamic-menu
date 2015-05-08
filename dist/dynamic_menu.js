// Dynamic Menu
// version 1.1, May 14th, 2011

(function($) {

    $.Dynamic_Menu = function(element, options) {

        var defaults = {};

        var plugin = this;

        plugin.settings = {};

        plugin.target = '';

        var $element = $(element),
             element = element;

        plugin.init = function() {

            plugin.target = $element.attr('data-target');

            plugin.bindElement();
        }

        plugin.bindElement = function() {

            $element.on('mouseover', plugin.hover_handler);

            $element.on('click', plugin.leave_handler);

            $(document).click(plugin.click_handler);

            $( window ).resize(plugin.set_positions);

            plugin.set_positions();
        }

        plugin.set_positions = function() {

            plugin.reset_positions();

            var top = $element.offset().top + $element.height();
            var left = $element.offset().left;
            var target = $(plugin.target);
            var position = target.height() + target.offset().top;

            if (position >= $(window).height()) {
                top = $element.offset().top - target.height();
            }

            if (left >= target.width()) { //centers both

                var cpos = $element.offset().left + ($element.width() / 2);
                var left = cpos - (target.width() / 2);

                if ((target.offset().left + target.width()) >= $(window).width()) {
                    left = $(window).width() - target.width();
                }

            }

            target.offset({
                top : top,
                left : left
            });
        }

        plugin.hover_handler = function() {

            $(plugin.target).addClass('active');

            $(plugin.target).css('display', 'block');

            plugin.set_positions();
        }

        plugin.leave_handler = function(e) {

            $(plugin.target).toggleClass('active');

            $(plugin.target).toggle();
        }

        plugin.click_handler = function(e) {

            if (
                ($(e.target).hasClass('dynamic_menu_items')) ||
                ($(e.target).parents('.dynamic_menu_items').length > 0) ||
                ($(e.target).attr('data-target'))
            ) {

                return false;

            } else {

                $(plugin.target).removeClass('active');

                $(plugin.target).css('display', 'none');

                plugin.reset_positions();
            }
        }

        plugin.reset_positions = function() {

            var top = $element.offset().top + $element.height();

            $(plugin.target).offset({
                top : top,
                left: $element.offset().left
            });
        };

        plugin.init();
    }

    $.fn.Dynamic_Menu = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('Dynamic_Menu')) {
                var plugin = new $.Dynamic_Menu(this, options);
                $(this).data('Dynamic_Menu', plugin);
            }
        });

    }

})(jQuery);
