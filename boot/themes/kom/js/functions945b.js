(function ($) {
    "use strict";
    //----------> Site Preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    $(document).ready(function () {
        var site_dark = ( $("body").hasClass("dark") ? "yes" : "no" );
        var site_dir = "ltr";
        if ($("html").css('direction') == 'rtl' || $("html").attr('dir') == 'rtl') {
            site_dir = "rtl";
        }
        // options
        var large_html = '<div class="theme_option"><div class="option_header"><h4>Style Options</h4><a href="#" class="open_options animate"><i class="fa fa-cog"></i></a></div><div class="option_block clearfix"><h4 class="option_title">Color Scheme</h4><ul class="option_color_list clearfix"><li><a class="color_scheme animate op_color_a" id="cardinal" href="#" data-color="#CD2122" data-color-a="#3A2B2B" data-color-b="#2C1D1D"></a></li><li><a class="color_scheme  animate op_color_b" id="bondiBlue" href="#" data-color="#00AFB2" data-color-a="#2d414b" data-color-b="#22323A"></a></li><li><a class="color_scheme   animate op_color_c" id="thunder" href="#" data-color="#009673" data-color-a="#334947" data-color-b="#203837"></a></li><li><a class="color_scheme animate op_color_d" href="#" id="wisteria" data-color="#9854B3" data-color-a="#2A2A2A" data-color-b="#1A1A1A"></a></li><li><a class="color_scheme animate op_color_e"  id="orange" href="#" data-color="#F86923" data-color-a="#2F2E2E" data-color-b="#1F1E1E"></a></li><li><a class="color_scheme animate op_color_f" href="#" id="redViolet" data-color="#D91897" data-color-a="#412E36" data-color-b="#322229"></a></li><li><a class="color_scheme animate" id="chambray" href="#" data-color="#374F99"></a></li><li><a class="color_scheme animate" id="quincy" href="#" data-color="#684035"></a></li><li><a class="color_scheme animate" id="easternBlue" href="#" data-color="#178E94"></a></li><li><a class="color_scheme animate" href="#" id="solidPink" data-color="#973A4B"></a></li><li><a class="color_scheme animate" href="#" id="carnation" data-color="#F3605D"></a></li><li><a class="color_scheme animate" href="#" id="sushi" data-color="#79AF33"></a></li></ul></div><div class="option_block clearfix"><h4 class="option_title">Custom Color</h4><input type="text" class="color-switcher" value="#00afb2"></div><div class="option_block clearfix" data-show-hide=".topbar"><h4 class="option_title">Show Top Bar</h4><a class="option_button active" data-event="show" href="#">Show</a><a class="option_button" data-event="hide" href="#">Hide</a></div> <div class="option_block clearfix" data-toggle-class="topbar_colored" data-toggle-on=".topbar"><h4 class="option_title">Top Bar Style</h4><a class="option_button" data-event="class_remove" href="#">Default</a><a class="option_button active" data-event="class_add" href="#">Colored</a></div> <div class="option_block clearfix" data-toggle-class="site_boxed" data-toggle-on="body"><h4 class="option_title">Layout</h4><a class="option_button active" data-event="class_remove" href="#">Wide</a><a class="option_button" data-event="class_add" href="#">Boxed</a></div> <div class="option_block clearfix" data-toggle-class="dark" data-toggle-on="body"><h4 class="option_title">Dark & Light</h4><a class="option_button active" data-event="class_remove" href="#">Light</a><a class="option_button" data-event="class_add" href="#">Dark</a></div> <div class="option_block clearfix" data-toggle-class="light_header" data-toggle-on="body"><h4 class="option_title">Navigation Color</h4><a class="option_button active" data-event="class_add" href="#">Light</a><a class="option_button" data-event="class_remove" href="#">Dark</a></div> <div class="option_block clearfix" data-toggle-class="dark_sup_menu" data-toggle-on="body"><h4 class="option_title">SupMenu Color</h4><a class="option_button" data-event="class_remove" href="#">Light</a><a class="option_button active" data-event="class_add" href="#">Dark</a></div></div>';
        $(function () {
            $('.color-switcher').wpColorPicker(myOptions);
        });
  var myOptions = {
   change: function(event, ui){
    var color = this.value;
	createCookie('kymacustomcss',color,365);
    setKymaCustomColor(color);
   },
   clear:function(event, ui){
	   $('#random-css').html('');
	   eraseCookie('kymacustomcss');
   }
    };
	function setKymaCustomColor(color){
		var css = '::selection {background: '+color+'; } ::-moz-selection {background: '+color+'; } ::selection {background: '+color+'; } a, a:hover, ins, #navy ul li a:hover, #navy ul li a:hover > .parent_arrow, #navy ul li a:hover i.menu_icon, #navy .mega_menu > li > a, #navy .tab_menu_item > a:hover, #navy .tab_menu_item:not(.active) > a:hover i, .light_header .top_add_card:hover, .light_header .active .top_add_card, .light_header .active .top_add_card > span, .dark_sup_menu :not(.mobile_menu) #navy ul.mega_menu > li:hover > a, .dark_sup_menu .menu_special_color, .icon_boxes_con.style1.solid_icon .service_box > .icon i, .icon_boxes_con.style2.solid_icon .service_box .icon i, .icon_boxes_con.style2:not(.solid_icon):not(.icon_box_no_border) .service_box:hover .icon, .section_icon i, .feature_icon .item:hover h5 .title, .hm_filter_wrapper:not(.porto_hidden_title):not(.porto_full_desc) .filter_item_block:hover .porto_desc h6, .porto_nav .expand_img:hover, .porto_nav .detail_link:hover, .project_text_nav .porto_type:hover .icon_expand:hover, .porto_nums > span.like.added i, .porto_nums > span.like i:hover, #options .sort_list a:hover, #options .sort_list a.selected, #sort-direction.option-set a.selected, #sort-direction.option-set a:hover, .porto_full_desc .porto_date, .hoverdir_meta .proj_date, .counter .icon, .normal_text_slider .url, .say_datils > h5 > span, .add2cart_btn:hover, .add2cart_btn:hover i, .team_block .back .social_media a:hover, .social_media a:hover, .blog_grid_con .meta a:hover, .post_title_con .meta a:hover, .timeline_block .meta a:hover, .blog_grid_con .title a:hover, .feature_inner_btns > a, .plan_column1 .plan_price_block .plan_price_in .price, .plan_column1 .plan_price_block .plan_price_in .price small, .timeline_block .timeline_title a:hover, .read_more_button, .timeline_post_format, blockquote > i, .tags_con > a:hover, .post_next_prev a:hover, .post_next_prev a:hover, .post_next_prev a:hover .t, .related_posts_slide .related_title:hover, .gall_arrow2 .thumbs_gall_slider_larg .kyma_owl_n, .gall_arrow2 .thumbs_gall_slider_larg .kyma_owl_p, .porto_galla .kyma_owl_p, .porto_galla .kyma_owl_n, .sidebar_slider .kyma_owl_p:hover, .sidebar_slider .kyma_owl_n:hover, .main_title_c1, #navy > li.current_page_item > a:not(.nav_trigger), #navy > li:hover > a:not(.nav_trigger), #navy > li > a.current, .light_header #navy > li > a.current, .languages-select .languages-panel-con .lang_checked, .top_cart_list > li > a:hover .top_cart_title, .left.top_cart_total, .left.top_cart_total, .top_search .top_search_icon, .welcome_banner h3 span, .icon_boxes_con.style1.circle.just_icon_border:not(.solid_icon) .service_box:hover > .icon i, .service_box:hover h3, .main_title h2 .icon, .main_title .line i, .title1, .tabs2:not(.fill_active) .tabs-navi a:hover, .tabs1.ver_tabs .tabs-navi a.selected, kyma_cart_icon .tabs2 .tabs-navi a.selected, kyma_cart_icon.hm-tabs.simple_tabs .tabs-navi li a.selected, .shop_slider .pro_add2cart_details:hover, .add2cart_image .add2cart_zoom:hover, .cart_toltip_icon, .cart_toltip_icon2, .send_button2, .search_block form .search_btn, .tagcloud a:hover .tag, .posts_widget_list2 li > a span:hover, .add2cart_buttons > a:hover, .single_product_title, .product_options .option_name, .simple_title, .vid_con .vid_icon, #reviews .required, .team_block2 a:hover .person_name, .blog_grid_con .meta .post_type_meta a, .post_title_con .post_type_meta a, .plan_col.plan_column1 > h6, .c_con .c_title, .about_author_link:hover > span, .footer_menu > li a:hover, .blog_grid_desc .title a:hover, .hm_blog_list .blog_grid_con .title a:hover, .post_title_con .title a:hover, .hm_blog_list .btn_a, .f_s_i_format, .post_format_con > span > a, h4.author_name, .hm_filter_wrapper_con .occ_expanded .kyma_occ_title, .hm_filter_wrapper_con .occ_expanded .kyma_occ_title i, .panel-heading a:hover i, .btn_a:not(.color1):hover, .btn_a i.in_left, .btn_a i.in_right, .list4 > li > i, .hm_tooltip-item1, .page404, .dark .hm-tabs.simple_tabs .tabs-navi li a.selected, .top_expande, .open_options, .open_options:focus, .plan_column1 .plan_price_block .plan_price_in .plan_per, #subscribe_output h4 ,.tabs2 .tabs-navi a.selected,.hm-tabs.simple_tabs .tabs-navi li a:hover,.hm-tabs.simple_tabs .tabs-navi li a.selected,.tabs1:not(.ver_tabs):not(.fill_active) .tabs-navi a.selected{color: '+color+'; } #navy ul li:not(.image_menu_slide) a:after, #navy .tab_menu_item.active > a, .topbar.topbar_colored, .light_header .languages-select .languages-panel-con, .icon_boxes_con.style1 .service_box .ser-box-link:hover > span, .icon_boxes_con.style1 .service_box .ser-box-link:hover > span:after, .icon_boxes_con.style2 .service_box .icon, .icon_boxes_con.style2 .service_box .ser-box-link > span:after, .icon_boxes_con.style2 .service_box .ser-box-link > span:before, .icon_boxes_con.style1.circle.just_icon_border:not(.solid_icon) .service_box > .icon i:after, .icon_boxes_con.style1.solid_icon.radius5 .service_box:hover > .icon:after, .icon_boxes_con.style1.solid_icon.radius5 .service_box:hover > .icon i, .icon_boxes_con.style1.circle.just_icon_border.solid_icon .service_box:hover > span i, .feature_icon .item h5 .icon span, .hm_filter_wrapper .porto_type:after, #filter-by > li a.selected, .counter_a .counter .icon:after, .mb_YTPseekbar, .spec_req2, .spec_req2 .raq_a2, .spec_req2 .raq_b2, .team_block .face.back, .team-col, .team-col .team-col-2 .arrow, .progress_bar .fill, .blog_grid_format i, .feature_inner_ling:after, .timeline_block .timeline_feature > a:not(.quote_con):before, .timeline_block .timeline_feature .owl-item a:before, .colored_masonry .blog_grid_desc, .related_posts_slide .related_img > span:after, #kyma_owl_slider .owl-page.active, #kyma_owl_slider .owl-page:hover, .feature_icon_slider .owl-page.active, .feature_icon_slider .owl-page:hover, .porto_galla .owl-page.active, .porto_galla .owl-page:hover, .content_slider .owl-page.active, .content_slider .owl-page:hover, .sidebar_slider .owl-page.active, .sidebar_slider .owl-page:hover, .photostack nav span.current, #photostack-1 nav span.current, .camera_wrap .camera_pag .camera_pag_ul li:hover > span, .camera_wrap .camera_pag .camera_pag_ul li.cameracurrent > span, .mejs-controls .mejs-time-rail .mejs-time-current, .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current, .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, #navy > li > a::after, #navy li.normal_menu ul:after, #navy li.has_mega_menu > ul:after, .top_cart_btn, .top_catt_remove:hover:after, .top_catt_remove:hover:before, .title_banner, .icon_boxes_con.style1 .service_box > .icon i, .icon_boxes_con.style1.circle.just_icon_border.solid_icon:not(.radius5) .service_box > .icon:before, .icon_boxes_con.style2.solid_icon .service_box > .icon:before, h2.title2 span, ul.list1 li:after, .description3:after, .main_title.blue_bg > h2, .tabs1:not(.ver_tabs):not(.fill_active) .tabs-navi a.selected:before, .tabs2.fill_active .tabs-navi a.selected, .tabs2.fill_active .tabs-navi a:hover, .tabs1.fill_active .tabs-navi a.selected, .tabs1.fill_active .tabs-navi a:hover, .ver_tabs .tabs-navi a.selected:before, .white_section .feature_icon .item h5 .icon span:after, .send_button, .pagination li a:hover, .pagination li.active a, .pagination li.next_pagination > a:hover, .pagination li.prev_pagination > a:hover, .send_button3:hover, .vid_con:after, .team_block2 .member_img:before, .plan_col.plan_column1:hover > h6, .plan_col.plan_column1.active_plan > h6,  .newsletter_button, .recent_posts_list li > a .recent_posts_img:after, .flickr_badge_image a:after, .vid_con .vid_icon:hover i, .blog_list_format, .blog_list_format:hover, .quote_con, a.quote_con:focus, #comments .children:after, .occ_expanded .kyma_occ_title, .hm_filter_wrapper_con .occ_expanded .kyma_occ_title:after, .hm_filter_wrapper_con .occ_expanded .kyma_occ_title:before, .btn_a.color1 > span, .btn_b.color1, .btn_c.color1, .main_button.color1, .tooltip-content3::after, .spinner1 > div, .dark .icon_boxes_con.style2:not(.icon_box_no_border) .service_box .icon:after, .dark .team_block .face.back, .dark .occ_expanded .kyma_occ_title, .main_title .line:before, .option_button.active, .option_button:hover, .hm_vid_con:after {background: '+color+'; } .topbar, .light_header .topbar{background-color: '+color+'; } .topbar, .light_header .topbar {border-color: '+color+'; } .top_details > span > a, .top_details > span, .top_details > div, .top_details > div > a, .top-socials > a {color: #ffffff; } .preloader2 .spinner .sk-dot1, .preloader2 .spinner .sk-dot2,.preloader1 .spinner > div,.hm_go_top {background-color: '+color+'; } .preloader3 .spinner .sk-dot1,.preloader3 .spinner .sk-dot2,.main_title .dot, .icon_boxes_con.style1 .service_box .ser-box-link:hover, .icon_boxes_con.style1.solid_icon .service_box > .icon:after, .icon_boxes_con.style2.solid_icon .service_box .icon:after, .filter_by_mobile #filter-by > li a.selected, #filter-by > li a.selected, .add2cart_btn:hover, .team_block .face.back, .social_media a:hover, .timeline_post_format, .tags_con > a:hover, input[type="text"]:focus, textarea:focus, input[type="password"]:focus, .top_catt_remove:hover, .tabs2 .tabs-navi a.selected, .tabs2.fill_active .tabs-navi a.selected, .tabs2.fill_active .tabs-navi a:hover, .tabs1.fill_active .tabs-navi a.selected, .tabs1.fill_active .tabs-navi a:hover, .hm-tabs.simple_tabs .tabs-navi li a.selected, .send_button, .send_button2, .pagination li a:hover, .pagination li.active a, .pagination li.next_pagination > a:hover, .pagination li.prev_pagination > a:hover, .gall_thumbs .current_thumb, .send_button3:hover, .arrow_button, #footer .tagcloud a:hover .tag, .post_format_con > span > a, .comment-reply-link:hover, .comment-edit-link:hover, .occ_expanded .kyma_occ_title, .hm_filter_wrapper_con .acc_content, .btn_b.color1, .main_button.color1, .dark .hm-tabs.simple_tabs .tabs-navi li a.selected, .option_button.active, .option_button:hover {border-color: '+color+' !important; } .description2, .description3, .main_title.blue_bg .line:before, .with_arrow_d.tabs1.fill_active .tabs-navi a.selected:before, .hm_filter_wrapper_con .occ_expanded .kyma_occ_title,.woocommerce-message {border-top-color: '+color+'; } .png_slide .desc > span, .tabs1.fill_active .tabs-navi li.prev_selected a, .hm_filter_wrapper_con .occ_expanded .kyma_occ_title {border-right-color: '+color+'; } .light_header .languages-select .languages-panel-con:after, .filter_item_block:hover .porto_desc, .description2:after, .tabs1.fill_active.tabs_mobile:not(.ver_tabs) .tabs-navi li a.selected, .tabs1.fill_active.tabs_mobile:not(.ver_tabs) .tabs-navi li a:hover {border-bottom-color: '+color+'; } #navy .tab_menu_item.active > a:after, .png_slide .desc > span, .tabs1.fill_active .tabs-navi li a.selected, .tabs1.fill_active .tabs-navi li:first-child a.selected, .tabs1.fill_active .tabs-navi li:first-child a:hover, .tabs1.fill_active.tabs_mobile:not(.ver_tabs) .tabs-navi li a.selected, .tabs1.fill_active.tabs_mobile:not(.ver_tabs) .tabs-navi li a:hover, #comments .children, .hm_filter_wrapper_con .occ_expanded .kyma_occ_title {border-left-color: '+color+'; } .plan_col .polygon_con .polygon_fill, .plan_col.active_plan .polygon_con .polygon_fill, .plan_col:hover .polygon_con .polygon_fill {stroke: '+color+'; } @media only screen and (max-width: 992px) {#navy > li.current_page_item > a, #navy > li > a:hover, .mobile_menu #navy > li.opened_menu > a {color: '+color+'; } } @media only screen and (min-width: 768px) {.hm-select, .no-touch .hm-secondary-theme .hm-pricing-list > li .hm-select:hover, .no-touch .hm-popular .hm-select:hover, .hm-secondary-theme .hm-popular .hm-select {background: '+color+'; } } @media only screen and (max-width: 320px) {.light_header .top-socials > a > span.soc_icon_bg {background: '+color+'; } } @media only screen and (max-width: 992px) {.top_add_card:hover, .active .top_add_card, .active .top_add_card > span {color: '+color+'; } } .owl_text_a > span,.welcome_banner.full_colored,.client_section,.hm_filter_wrapper .porto_type:not(.simple_porto_img):after, .menu_button_mode:not(.header_on_side) #navy > li.current_page_item > a, .menu_button_mode:not(.header_on_side) #nav_menu:not(.mobile_menu) #navy > li:hover > a {background-color: '+color+' !important; } .owl_text_b > span{color:'+color+' !important; } .pagination li span.current, .pagination li a.page-numbers:hover {background: '+color+'; border-color: '+color+'; } #searchsubmit {background: '+color+'; } blockquote > p:before, .tagcloud a:hover {color: '+color+'; } .rev_title_f, .footer_menu a {color: '+color+' !important; } .topbar_colored .top-socials > a > span.soc_icon_bg {background: rgba(0, 0, 0, 0.15); } .topbar_colored .top-socials > a > span.soc_name {background: #1c284e; } .woocommerce span.onsale, .woocommerce input.button, .woocommerce input.button.alt, .woocommerce .cart .button, .woocommerce .cart input.button, .woocommerce .checkout-button.button.alt.wc-forward, .woocommerce .coupon .button, .woocommerce .woocommerce-message .button.wc-forward, .woocommerce button.single_add_to_cart_button.button.alt {background: '+color+'; color:#fff; } .woocommerce input.button.alt:hover, .woocommerce input.button:hover, .woocommerce .cart .button:hover, .woocommerce .cart input.button:hover, .woocommerce .checkout-button.button.alt.wc-forward:hover, .woocommerce .woocommerce-message .button.wc-forward:hover, .woocommerce button.single_add_to_cart_button.button.alt:hover{opacity: .8; background: '+color+'; color:#fff; } .woocommerce-message:before{color: '+color+'; } .woocommerce .woocommerce-message{border-color: '+color+' !important; }';
    $('#random-css').html(css);
	}
	// Cookie functions
	function createCookie(name,value,days)
	{
		if (days)
		{
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	function readCookie(name)
	{
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++)
		{
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	function eraseCookie(name)
	{
		createCookie(name,"",-1);
	}
	if(readCookie('kymacustomcss')!=null){ setKymaCustomColor(readCookie('kymacustomcss')); }
        $("body").append(large_html);
        $('.navigation .nav-menu ul li i, .mobile-drop ul li i').addClass('op_nav_icon_on').removeClass('op_nav_icon_off');
        $('#pagetop').addClass('op_show').removeClass('op_hide');
        //=============================================> open and close

        $('a.open_options').click(function(e) {

            if($(this).hasClass('opened')){

                $(".theme_option").animate({
                    left: '-236px',
                }, 500, function () {
                    $('a.open_options').removeClass("opened");
                });

            } else {

                $(".theme_option").animate({
                    left: '0px',
                }, 500, function () {
                    $('a.open_options').addClass("opened");
                });

            }
            e.preventDefault();
        });

        //=============================================> Opt Buttons
        $('ul.option_color_list li a').each(function() {
            var my_color_active = $(this).data('color');
            $(this).css('background-color', my_color_active);
        });

        $('ul.option_color_list li a').on('click', function(event) {
            if(readCookie('kymacustomcss')==null){
                var filename = $(this).attr('id');
                var oldlink = document.getElementById("switcher-css");
                var newlink = document.createElement("link");
                newlink.setAttribute("id", "switcher-css");
                newlink.setAttribute("rel", "stylesheet");
                newlink.setAttribute("type", "text/css");
                newlink.setAttribute("href", dir.uri+"/css/colors/" + filename + '.css');
                document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
            }else{
                alert("Clear custom color first");
            }

        });


        $('a.option_button').click(function(event) {
            var $this_btn = $(this);
            var show_hide = $this_btn.parent(".option_block").attr("data-show-hide") ? $this_btn.parent(".option_block").attr("data-show-hide") : "";
            var toogle_class = $this_btn.parent(".option_block").attr("data-toggle-class") ? $this_btn.parent(".option_block").attr("data-toggle-class") : "";
            var toogle_on = $this_btn.parent(".option_block").attr("data-toggle-on") ? $this_btn.parent(".option_block").attr("data-toggle-on") : "";

            var btn_event = $this_btn.attr("data-event");

            $this_btn.addClass('active').siblings().removeClass('active');

            //=====> show_hide
            if(show_hide !== "" && btn_event == "show" ){
                $(show_hide).slideDown();

            }else if(show_hide !== "" && btn_event == "hide" ){
                $(show_hide).slideUp();
            }
            //=====> toogle_class
            if(toogle_class !== "" && btn_event == "class_add" ){
                $(toogle_on).addClass(toogle_class);

            }else if(toogle_class !== "" && btn_event == "class_remove" ){
                $(toogle_on).removeClass(toogle_class);
            }

            event.preventDefault();
        });
        //----------> end site demo
        //----------> Validation
        if ($.isFunction($.fn.validate)) {
            $("#contact-us-form").validate({
                submitHandler: function (contact_form) {
                    $('.form_loader').css({ "display": "block"});
                    $('#form-messages').css({ "opacity": "0"});
                    $(contact_form).ajaxSubmit({
                        target: '#form-messages',
                        success: function (msg) {
                            $('.form_loader').css({ "display": "none"});
                            $('#form-messages').css({ "opacity": "1"});
                            $('#form-messages').addClass("send_success");
                            $('#contact-us-form').find('.form_fill_fields').val('');
                        },
                    });
                }
            });
            $("#careers-form").validate({
                submitHandler: function (careers_form) {
                    $('.form_loader').css({ "display": "block"});
                    $('#form-messages').css({ "opacity": "0"});
                    $(careers_form).ajaxSubmit({
                        target: '#form-messages',
                        success: function () {
                            $('.form_loader').css({ "display": "none"});
                            $('#form-messages').css({ "opacity": "1"});
                            $('#form-messages').addClass("send_success");
                            $('#careers-form').find('.form_fill_fields').val('');
                        },
                    });
                }
            });
        }
        ;
        //----------> Top Bar Expand
        $(".top_expande").on("click", function () {
            var $thiss = $(this);
            var $conta = $thiss.siblings(".content");
            if ($thiss.hasClass("not_expanded")) {
                $($conta).stop().slideDown(300, function () {
                    $thiss.removeClass("not_expanded");
                });
            } else {
                $($conta).stop().slideUp(300, function () {
                    $thiss.addClass("not_expanded");
                });
            }
        });
        //-----------> Menu
        $("#nav_menu").webhunt({});
        //----------> Owl Start
        var header_on_side = "header_on_side";
        var side_menu_res_a = $("body").hasClass(header_on_side) ? 1 : 4;
        var side_menu_res_b = $("body").hasClass(header_on_side) ? 1 : 5;
        $(".normal_text_slider").owlCarousel({
            direction: site_dir,
            slideSpeed: 900,
            autoPlay: 3000,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsTabletSmall: false,
            itemsMobile: false,
            autoHeight: true,
            items: 1,
            stopOnHover: true,
            navigation: true,
            navigationText: [
                "<span class='kyma_owl_p'><i class='fa fa-angle-left'></i></span>",
                "<span class='kyma_owl_n'><i class='fa fa-angle-right'></i></span>"],
            pagination: false,
        });
        //=====> OWL Carousel Text Slider
        $(".welcome_banner_slider").owlCarousel({
            direction: site_dir,
            slideSpeed : 400,
            autoPlay : 3000,
            autoHeight : true,
            singleItem:true,
            stopOnHover : true,
            navigation : true,
            navigationText : [
                "<span class='prev_simple'><i class='fa fa-arrow-left'></i></span>",
                "<span class='next_simple'><i class='fa fa-arrow-right'></i></span>"
            ],
            pagination : false,
        });
        $(".our_client_slider").owlCarousel({
            direction: site_dir,
            slideSpeed: 1000,
            autoPlay: 4000,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsTabletSmall: false,
            itemsMobile: false,
            itemsCustom: [
                [360, 2],
                [450, 2],
                [786, 3],
                [1200, 5]
            ],
            stopOnHover: true,
            navigation: true,
            navigationText: [
                "<span class='kyma_owl_p'><i class='fa fa-angle-left'></i></span>",
                "<span class='kyma_owl_n'><i class='fa fa-angle-right'></i></span>"],
            pagination: false,
        });
        var owl_news = $(".hm_new_bar_slider");
        owl_news.owlCarousel({
            direction: site_dir,
            loop: true,
            autoWidth: true,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsTabletSmall: false,
            itemsMobile: false,
            itemsCustom: [
                [0, 1],
                [450, 2],
                [786, 3],
                [1200, 4],
                [1600, 5]
            ],
            slideSpeed: 2000,
            autoPlay: 2000,
            stopOnHover: true,
        });
        $('.hm_new_bar_controll_btn').on('click', function (event) {
            event.preventDefault();
            if ($(this).hasClass('pause')) {
                $(this).removeClass("pause").addClass("play");
                owl_news.trigger('owl.play', 2000);
            } else {
                $(this).removeClass("play").addClass("pause");
                owl_news.trigger('owl.stop', 2000);
            }
        });
        //--------------------------------------> Shop Sliddes
		$('.cross-sells ul.products').addClass('cross_sells');
		$(".cross_sells").owlCarousel({
            direction: site_dir,
            slideSpeed: 1000,
            autoPlay: 4000,
            autoHeight: true,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsTabletSmall: false,
            itemsMobile: false,
            itemsCustom: [
                [0, 1],
                [450, 2],
                [786, 2],
                [1200, 2],
                [1600, 3]
            ],
            stopOnHover: true,
            navigation: true,
            navigationText: [
                "<span class='kyma_owl_p'><i class='fa fa-angle-left'></i></span>",
                "<span class='kyma_owl_n'><i class='fa fa-angle-right'></i></span>"],
            pagination: false,
        });
		$('.related.products ul.products').addClass('shop_slider');
        var shop_slide_sideboxed_a = 4;
        if ($("body").hasClass("site_boxed") && $("body").hasClass("header_on_side")) {
            shop_slide_sideboxed_a = 3;
        }
        $(".shop_slider").owlCarousel({
            direction: site_dir,
            slideSpeed: 1000,
            autoPlay: 4000,
            autoHeight: true,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsTabletSmall: false,
            itemsMobile: false,
            itemsCustom: [
                [0, 1],
                [450, 2],
                [786, 3],
                [1200, shop_slide_sideboxed_a],
                [1600, 5]
            ],
            stopOnHover: true,
            navigation: true,
            navigationText: [
                "<span class='kyma_owl_p'><i class='fa fa-angle-left'></i></span>",
                "<span class='kyma_owl_n'><i class='fa fa-angle-right'></i></span>"],
            pagination: false,
        });
        $(".featured_slider").owlCarousel({
            direction: site_dir,
            slideSpeed: 900,
            autoPlay: 4000,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsTabletSmall: false,
            itemsMobile: false,
            itemsCustom: [
                [0, 1],
                [450, 2],
                [786, 3],
                [1000, 4],
                [1200, 5]
            ],
            autoHeight: true,
            stopOnHover: true,
            navigation: true,
            navigationText: [
                "<span class='kyma_owl_p'><i class='fa fa-angle-left'></i></span>",
                "<span class='kyma_owl_n'><i class='fa fa-angle-right'></i></span>"],
            pagination: true,
        });
        //--------------------------------------> Single Page (Shop)
        $(".thumbs_gall_slider_con").each(function (index, element) {
            var gall_con = $(this);
            var sync1 = $(gall_con).find(".thumbs_gall_slider_larg");
            var sync2 = $(gall_con).find(".gall_thumbs");
            var transition_style = $(sync1).attr("data-transition");
            if (typeof transition_style !== typeof undefined && transition_style !== false) {
                sync1.owlCarousel({
                    direction: site_dir,
                    items: 1,
                    itemsDesktop: false,
                    itemsDesktopSmall: false,
                    itemsTablet: false,
                    itemsTabletSmall: false,
                    itemsMobile: false,
                    slideSpeed: 1000,
                    autoPlay: 4000,
                    autoHeight: true,
                    navigation: true,
                    navigationText: [
                        "<span class='kyma_owl_p'><i class='fa fa-angle-left'></i></span>",
                        "<span class='kyma_owl_n'><i class='fa fa-angle-right'></i></span>"],
                    pagination: false,
                    afterAction: syncPosition,
                    responsiveRefreshRate: 200,
                    //transitionStyle : transition_style //fade - fadeUp - backSlide - goDown
                });
            } else {
                sync1.owlCarousel({
                    direction: site_dir,
                    items: 1,
                    itemsDesktop: false,
                    itemsDesktopSmall: false,
                    itemsTablet: false,
                    itemsTabletSmall: false,
                    itemsMobile: false,
                    slideSpeed: 1000,
                    autoPlay: 4000,
                    autoHeight: true,
                    navigation: true,
                    navigationText: [
                        "<span class='kyma_owl_p'><i class='fa fa-angle-left'></i></span>",
                        "<span class='kyma_owl_n'><i class='fa fa-angle-right'></i></span>"],
                    pagination: false,
                    afterAction: syncPosition,
                    responsiveRefreshRate: 200,
                });
            }
            if (gall_con.hasClass("gall_full_width")) {
                sync2.owlCarousel({
                    direction: site_dir,
                    items: 9,
                    itemsDesktop: false,
                    itemsDesktopSmall: false,
                    itemsTablet: false,
                    itemsTabletSmall: false,
                    itemsMobile: false,
                    pagination: false,
                    //responsiveRefreshRate : 100,
                    afterInit: function (el) {
                        el.find(".owl-item").eq(0).addClass("current_thumb");
                    }
                });
            } else if (gall_con.hasClass("content_thumbs_gall")) {
                sync2.owlCarousel({
                    direction: site_dir,
                    items: 6,
                    itemsDesktop: false,
                    itemsDesktopSmall: false,
                    itemsTablet: false,
                    itemsTabletSmall: false,
                    itemsMobile: false,
                    pagination: false,
                    //responsiveRefreshRate : 100,
                    afterInit: function (el) {
                        el.find(".owl-item").eq(0).addClass("current_thumb");
                    }
                });
            } else {
                sync2.owlCarousel({
                    direction: site_dir,
                    items: 4,
                    itemsDesktop: false,
                    itemsDesktopSmall: false,
                    itemsTablet: false,
                    itemsTabletSmall: false,
                    itemsMobile: false,
                    pagination: false,
                    responsiveRefreshRate: 100,
                    afterInit: function (el) {
                        el.find(".owl-item").eq(0).addClass("current_thumb");
                    }
                });
            }
            function syncPosition(el) {
                var current = this.currentItem;
                $(sync2).find(".owl-item").removeClass("current_thumb").eq(current).addClass("current_thumb");
                if ($(sync2).data("owlCarousel") !== undefined) {
                    center(current);
                }
            }
            $(sync2).on("click", ".owl-item", function (e) {
                e.preventDefault();
                var number = $(this).data("owlItem");
                sync1.trigger("owl.goTo", number);
            });
            function center(number) {
                var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
                var num = number;
                var found = false;
                for (var i in sync2visible) {
                    if (num === sync2visible[i]) {
                        found = true;
                    }
                }
                if (found === false) {
                    if (num > sync2visible[sync2visible.length - 1]) {
                        sync2.trigger("owl.goTo", num - sync2visible.length + 2);
                    } else {
                        if (num - 1 === -1) {
                            num = 0;
                        }
                        sync2.trigger("owl.goTo", num);
                    }
                } else if (num === sync2visible[sync2visible.length - 1]) {
                    sync2.trigger("owl.goTo", sync2visible[1]);
                } else if (num === sync2visible[0]) {
                    sync2.trigger("owl.goTo", num - 1);
                }
            }
        });
		//var team_owl = ($(".content_slider").hasClass("our_team_section")) ? 2 : 1;
		
		if ( $(".content_slider").hasClass("testimonials_slider") ){
			var divs = $(".testimonials_slider > div");
			for(var i = 0; i < divs.length; i+=4) {
			  divs.slice(i, i+4).wrapAll("<div class='content_slide clearfix'></div>");
			}
		}
        $(".content_slider").owlCarousel({
			direction: site_dir,
			slideSpeed : 1000,
			autoPlay : 4000,
			itemsDesktop: false,
			itemsDesktopSmall: false,
			itemsTablet: false,
			itemsTabletSmall: false,
			itemsMobile: false,
			autoHeight : true,
			items:1,
			stopOnHover : true,
			navigation : false,
			pagination : true,
		});
        //=====> OWL Carousel Normal Slider and Portfolio Slider
        $(".porto_galla").owlCarousel({
            direction: site_dir,
            slideSpeed: 900,
            autoPlay: 3000,
            autoHeight: false,
            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsTabletSmall: false,
            itemsMobile: false,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            navigationText: [
                "<span class='kyma_owl_p'><i class='fa fa-angle-left'></i></span>",
                "<span class='kyma_owl_n'><i class='fa fa-angle-right'></i></span>"],
        });
        $(".related_posts_con").owlCarousel({
            direction: site_dir,
            slideSpeed: 900,
            autoPlay: 3000,
            autoHeight: true,
            itemsCustom: [
                [0, 1],
                [450, 2],
                [600, 2],
                [700, 3],
                [1000, 3],
                [1200, 4],
                [1400, 4],
                [1600, 5]
            ],
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsTabletSmall: false,
            itemsMobile: false,
            stopOnHover: true,
            navigation: true,
            pagination: true,
            navigationText: [
                "<span class='kyma_owl_p'><i class='fa fa-angle-left'></i></span>",
                "<span class='kyma_owl_n'><i class='fa fa-angle-right'></i></span>"],
        });
        var owl = $("#kyma_owl_slider");
        if (site_dir == "ltr") {
            owl.owlCarousel({
                direction: site_dir,
                slideSpeed: 900,
                autoPlay: 3000,
                itemsDesktop: false,
                itemsDesktopSmall: false,
                itemsTablet: false,
                itemsTabletSmall: false,
                itemsMobile: false,
                autoHeight: true,
                items: 1,
                afterAction: moved,
                stopOnHover: true,
                navigation: true,
                navigationText: [
                    "<span class='kyma_owl_p'><span></span></span>",
                    "<span class='kyma_owl_n'><span></span></span>"
                ],
                pagination: true,
                transitionStyle: "fadeUp" //fade - fadeUp - backSlide - goDown
            });
        } else {
            owl.owlCarousel({
                direction: site_dir,
                slideSpeed: 900,
                autoPlay: 3000,
                itemsDesktop: false,
                itemsDesktopSmall: false,
                itemsTablet: false,
                itemsTabletSmall: false,
                itemsMobile: false,
                autoHeight: true,
                items: 1,
                afterAction: moved,
                stopOnHover: true,
                navigation: true,
                navigationText: [
                    "<span class='kyma_owl_p'><span></span></span>",
                    "<span class='kyma_owl_n'><span></span></span>"
                ],
                pagination: true,
            });
        }
        function moved(owl) {
            var o_d = owl.data('owlCarousel');
            var sub_lenght = owl.find('.owl-item.active .owl_slider_con > span').length;
            var sub_current = owl.find('.owl-item.active .owl_slider_con > span');
            if (o_d) {
                owl.find('.owl-item').eq(o_d.currentItem).addClass('active').siblings().removeClass('active');
                owl.find('.owl-item:not(.active) .owl_slider_con > span').removeClass('transform_owl');
                owl.find('.owl-item.active .owl_slider_con > span').each(function (index, element) {
                    setTimeout(function () {
                        owl.find('.owl-item.active .owl_slider_con > span').eq(index).addClass('transform_owl');
                    }, ((index + 1) * 200));
                });
            } else {
                owl.find('.owl-item').eq(0).addClass('active').siblings().removeClass('active');
                owl.find('.owl-item.active .owl_slider_con > span').each(function (index, element) {
                    setTimeout(function () {
                        owl.find('.owl-item.active .owl_slider_con > span').eq(index).addClass('transform_owl');
                    }, ((index + 1) * 200));
                });
            }
        }
        //----------> Owl End
        //-----------> Parallax
        if ($.isFunction($.fn.parallax)) {
            $('.kyma_parallax1').parallax("50%", 0.1);
            $('.kyma_parallax2').parallax("50%", 0.2);
            $('.kyma_parallax3').parallax("50%", 0.3);
            $('.kyma_parallax4').parallax("50%", 0.4);
            $('.kyma_parallax5').parallax("50%", 0.5);
            $('.kyma_parallax6').parallax("50%", 0.6);
            $('.kyma_parallax7').parallax("50%", 0.7);
            $('.kyma_parallax8').parallax("50%", 0.8);
            $('.kyma_parallax9').parallax("50%", 0.9);
        }
        //-----------> Tree Features
        $(".tree_features li").each(function (index, element) {
            var bg_color = $(this).attr("data-bgcolor");
            $(this).append("<span class='tree_curv'></span>");
            $(this).css({"background-color": bg_color});
            $(this).find(".tree_curv").css({"background-color": bg_color});
        });
        //----------------------------------> scattered Slider
        if (typeof Photostack !== 'undefined' && $.isFunction(Photostack)) {
            var photostack_a = new Photostack(document.getElementById('photostack-1'), {
                callback: function (item) {
                    //console.log(item)
                }
            });
            var photostack_b = new Photostack(document.getElementById('photostack-2'), {
                callback: function (item) {
                    //console.log(item)
                }
            });
            var photostack_c = new Photostack(document.getElementById('photostack-3'), {
                callback: function (item) {
                    //console.log(item)
                }
            });
        }
        //----------------------------------> Back To Top
        var to_top_offset = 300,
            to_top_offset_opacity = 1200,
            scroll_top_duration = 900,
            $back_to_top = $('.hm_go_top');
        $(window).scroll(function () {
            if ($(this).scrollTop() > to_top_offset) {
                $back_to_top.addClass('hm_go_is-visible');
            } else {
                $back_to_top.removeClass('hm_go_is-visible hm_go_fade-out');
            }
            if ($(this).scrollTop() > to_top_offset_opacity) {
                $back_to_top.addClass('hm_go_fade-out');
            }
            return false;
        });
        $back_to_top.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                    //easing : "easeOutElastic"
                }, {queue: false, duration: scroll_top_duration, easing: "easeInOutExpo"}
            );
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 30 && $("body").hasClass("site_boxed") && $("body").hasClass("header_on_side")) {
                $("#side_heder").addClass("start_side_offset");
            } else {
                $("#side_heder").removeClass("start_side_offset");
            }
        });
        //----------------------------------> main_title icon
        $(".content_section:not(.bg_gray)").each(function (index, element) {
            var color = '';
            var section_bg = $(this).css('backgroundColor');
            var parts = section_bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (parts !== null) {
                delete(parts[0]);
                for (var i = 1; i <= 3; ++i) {
                    parts[i] = parseInt(parts[i]).toString(16);
                    if (parts[i].length == 1) parts[i] = '0' + parts[i];
                }
                color = '#' + parts.join('');
                $(this).find(".main_title .line i").css({"background-color": color});
                $(this).find(".main_title .line .dot").css({"background-color": color});
            }
        });
        //----------------------------------> Gialog Lightbox
        $("[data-dialog]").each(function (index, element) {
            var dialog_btn = element,
                dialog_name = document.getElementById(dialog_btn.getAttribute('data-dialog')),
                my_dlg = new DialogFx(dialog_name);
            dialog_btn.addEventListener('click', my_dlg.toggle.bind(my_dlg));
        });
        //----------------------------------> Magnific Popup Lightbox
        if ($.isFunction($.fn.magnificPopup)) {
            $('.expand_image').each(function (index, element) {
                $(this).click(function () {
                    $(this).parent().siblings("a").click();
                    $(this).parent().siblings(".porto_galla").find("a:first").click();
                    $(this).parent().siblings(".embed-container").find("a").click();
                    return false;
                });
            });
            $('.featured_slide_block').each(function (index, element) {
                var gall_con = $(this);
                var expander = $(this).find("a.expand_img");
                expander.click(function () {
                    gall_con.find("a:first").click();
                    return false;
                });
            });
            $('.porto_block').each(function (index, element) {
                var gall_con = $(this);
                var expander = $(this).find("a.expand_img");
                var expander_b = $(this).find("a.icon_expand");
                expander.click(function () {
                    gall_con.find("a:first").click();
                    return false;
                });
                expander_b.click(function () {
                    gall_con.find("a:first").click();
                    return false;
                });
            });
            $(".magnific-popup, a[data-rel^='magnific-popup']").magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom', // this class is for CSS animation below
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
            $('.magnific-gallery, .thumbs_gall_slider_larg, .porto_galla').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function () {
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = /*this.st.el.attr('data-effect')*/ "mfp-zoom-in";
                    }
                },
                closeOnContentClick: true,
                // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source
                midClick: true,
                retina: {
                    ratio: 1,
                    replaceSrc: function (item, ratio) {
                        return item.src.replace(/\.\w+$/, function (m) {
                            return '@2x' + m;
                        });
                    }
                }
            });
            $('.popup-youtube, .popup-vimeo, .popup-gmaps, .vid_con').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
            $('.ajax-popup-link').magnificPopup({
                type: 'ajax',
                removalDelay: 500,
                mainClass: 'mfp-fade',
                callbacks: {
                    beforeOpen: function () {
                        this.st.mainClass = "mfp-fade hm_script_loaded";
                    },
                    parseAjax: function (mfpResponse) {
                    },
                    ajaxContentAdded: function () {
                        $(".ajax_content_container").on("click", function (event) {
                            var target = $(event.target);
                            if (target.hasClass("mfp-close")) {
                            } else {
                                event.stopPropagation();
                            }
                        });
                        $.getScript('js/functions.js', function (data, textStatus, jqxhr) {
                            $(".hm_script_loaded .ajax_content_container").css({"opacity": "1"});
                        });
                    }
                },
            });
            $('.popup-with-zoom-anim').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });
            $('.popup-with-move-anim').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        }
        //----------------------------------> Responsive Resize
        var hm_screen_last_width = hm_screen_width();
        $(window).resize(function () {
            hm_screen_last_width = hm_screen_width();
            hm_google_map_with_text();
        });
        function hm_screen_width() {
            return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        }
        //---------------------------------------------> Hosted Video and Audio
        if ($.isFunction($.fn.mediaelementplayer)) {
            $("audio.hosted_audio").mediaelementplayer();
            $("video.hosted_video").mediaelementplayer({
                alwaysShowControls: true,
            });
        }
        //---------------------------------------------> Google map
        hm_google_map_with_text();
        function hm_google_map_with_text() {
            $(".col-md-4 .google_map, .col-md-6 .google_map, .col-md-3 .google_map, .col-md-9 .google_map").each(function (index, element) {
                var widthy = $(this).innerWidth();
                $(this).height(widthy / 2);
            });
        }
        $(".google_map").each(function (index, element) {
            var main_lato = $(this).attr("data-lat");
            var main_longo = $(this).attr("data-long");
            var enable_main = $(this).attr("data-main");
            var main_texto = $(this).attr("data-text");
            var arr = [];
            var arr_con = [];
            var arr_text = [];
            var total = $(this).find(".location").length;
            $(this).find(".location").each(function (i) {
                var lato = $(this).attr("data-lat");
                var longo = $(this).attr("data-long");
                var texto = $(this).attr("data-text");
                arr_text.push(texto);
                arr = [lato, longo];
                arr_con.push(arr);
                //if (i === total - 1) {}
            });
            var map;
            if (typeof GMaps !== 'undefined') {
                map = new GMaps({
                    el: element,
                    scrollwheel: false,
                    lat: main_lato,
                    lng: main_longo,
                });
                if (total === 0 || enable_main == "yes") {
                    map.addMarker({
                        lat: main_lato,
                        lng: main_longo,
                        icon: dir.uri+"/images/map2.png",
                        infoWindow: {
                            content: main_texto
                        }
                    });
                }
                if (total > 0) {
                    map.getElevations({
                        locations: arr_con,
                        callback: function (result, status) {
                            if (status == google.maps.ElevationStatus.OK) {
                                for (var i in result) {
                                    if (result.hasOwnProperty(i)) {
                                        map.addMarker({
                                            lat: result[i].location.lat(),
                                            lng: result[i].location.lng(),
                                            icon: "images/map.png",
                                            //title: 'Marker with InfoWindow',
                                            infoWindow: {
                                                content: arr_text[i]
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
        $(".google_map").each(function (index) {
            var con_index = index + 1;
            var id_name = "map" + con_index;
            $(this).attr('id', id_name);
        });
        //---------------------------------------------> Portfolio hoverdir
        $('.porto_full_desc .hm_filter_wrapper_con > .filter_item_block ').each(function () {
            $(this).hoverdir({
                hoverElem: '.porto_desc'
            });
        });
        $('.has_hoverdir .featured_slide_block').each(function () {
            $(this).hoverdir({
                hoverElem: '.hoverdir_con'
            });
        });
        //---------------------------------------------> Counter
        $('.counter').appear(function () {
            $(this).children('.value').countTo();
        });
        //---------------------------------------------> Masonry Blogs
        $(".masonry_posts.colored_masonry .blog_grid_block").each(function (index, element) {
            var bg_color = $(this).data("bg");
            $(this).find(".blog_grid_desc, .blog_grid_format i").css({ "background": bg_color});
        });
        //---------------------------------------------> Animation Progress Bars
        $("[data-progress-val]").each(function () {
            var $this = $(this);
            $this.appear(function () {
                var con_width = $this.width();
                var title_width = $this.find(".title").width();
                var value_width = $this.find(".value").width();
                var fill_percent = $this.attr("data-progress-val");
                var fill_width = con_width * (fill_percent / 100);
                //alert(fill_width);
                if (fill_width <= value_width + title_width) {
                    $this.find(".fill").addClass("small_line_bar");
                    $this.find(".value").css({"opacity": 0, "right": -title_width});
                }
                var delay = ($this.attr("data-progress-delay") ? $this.attr("data-progress-delay") : 1);
                var animation_type = ($this.attr("data-progress-animation") ? $this.attr("data-progress-animation") : "easeOutBounce");
                var bg_color = ($this.attr("data-progress-color") ? $this.attr("data-progress-color") : "");
                $this.find(".fill").css({"background": bg_color});
                if (delay > 1) $this.css("animation-delay", delay + "ms");
                $this.find(".fill").addClass($this.attr("data-appear-animation"));
                setTimeout(function () {
                    if (fill_width <= value_width + title_width) {
                        $this.find(".value").animate({ opacity: 1 });
                    }
                    $this.find(".fill").animate({
                        width: $this.attr("data-progress-val") + '%',
                    }, 1500, animation_type, function () {
                        if (site_dir == "ltr") {
                            $this.find(".title").animate({
                                opacity: 1,
                                left: 0
                            }, 1500, animation_type);
                        } else {
                            $this.find(".title").animate({
                                opacity: 1,
                                right: 0
                            }, 1500, animation_type);
                        }
                    });
                    $this.find(".value .num").countTo({
                        from: 0,
                        to: $this.attr("data-progress-val"),
                        speed: 1500,
                        refreshInterval: 50,
                    });
                }, delay);
            }, {accX: 0, accY: -50});
        });
        //---------------------------------------------> Circle Progress Bars
        $(".hm_circle_progressbar").each(function (index, element) {
            var $this_this = $(this);
            //if ( $.isFunction($.fn.ProgressBar) ) {
            $(this).appear(function () {
                var hm_delay = ($(this).attr("data-delay") ? $(this).attr("data-delay") : 1);
                var hm_percenty = $(this).attr("data-percentag") ? $(this).attr("data-percentag") : 100;
                var hm_startColor = $(this).attr("data-start-color") ? $(this).attr("data-start-color") : '#1CCDCA';
                var hm_endColor = $(this).attr("data-end-color") ? $(this).attr("data-end-color") : '#1CCDCA';
                var hm_animation = $(this).attr("data-animation") ? $(this).attr("data-animation") : 'easeInOut';
                var hm_days_nums = $(this).attr("data-event") ? $(this).attr("data-event") : "";
                //-------> Days
                function showDays(firstDate, secondDate) {
                    var startDay = new Date(firstDate);
                    var endDay = new Date(secondDate);
                    var millisecondsPerDay = 1000 * 60 * 60 * 24;
                    var millisBetween = startDay.getTime() - endDay.getTime();
                    var days = millisBetween / millisecondsPerDay;
                    return Math.floor(days);
                }
                var tdate = new Date();
                var dd = tdate.getDate(); //yields day
                var MM = tdate.getMonth(); //yields month
                var yyyy = tdate.getFullYear(); //yields year
                var today_is = ( MM + 1) + "/" + dd + "/" + yyyy;
                var days = showDays(hm_days_nums, today_is);
                //------->
                var hm_percenty_color = '#666';
                var hm_progress_type = '';
                var circle;
                var iii;
                //-------->
                if ($(this).hasClass("square") && $(this).closest(".white_section").length !== 0) {
                    hm_percenty_color = '#fff';
                } else if (site_dark == "yes" && $(this).hasClass("style1") && $(this).closest(".white_section").length !== 0) {
                    hm_percenty_color = '#666';
                } else if (site_dark == "no" && $(this).hasClass("style1") && $(this).closest(".white_section").length !== 0) {
                    hm_percenty_color = '#666';
                } else if (site_dark == "yes" || $(this).hasClass("square") || $(this).closest(".white_section").length !== 0) {
                    hm_percenty_color = '#fff';
                } else {
                    hm_percenty_color = '#666';
                }
                //-------->
                if ($(this).hasClass("path")) {
                    var scene = document.getElementsByTagName('object');
                    var lengh_heart = scene.length;
                    var path = new ProgressBar.Path(scene[0].contentDocument.querySelector('.heart-path'), {
                        duration: 2000,
                        easing: 'easeInOut',
                        step: function (state, path) {
                        }
                    });
                    var $path_val = $this_this.find('.path_val .num');
                    $path_val.countTo({
                        from: 0,
                        to: hm_percenty,
                        speed: 2000,
                    });
                    path.animate(hm_percenty / 100);
                } else if ($(this).hasClass("square")) {
                    circle = new ProgressBar.Square(element, {
                        color: hm_startColor,
                        trailColor: 'rgba(0,0,0,.07)',
                        strokeWidth: 3.5,
                        duration: 2000,
                        easing: hm_animation,
                        from: { color: hm_startColor, width: 3.5 },
                        to: { color: hm_endColor, width: 3.5 },
                        text: {
                            value: '0',
                            color: hm_percenty_color,
                        },
                        step: function (state, circle) {
                            circle.setText((circle.value() * 100).toFixed(0) + " %");
                            circle.path.setAttribute('stroke', state.color);
                            circle.path.setAttribute('stroke-width', state.width);
                        }
                    });
                } else if ($this_this.hasClass("seconds")) {
                    circle = new ProgressBar.Circle(element, {
                        color: hm_startColor,
                        trailColor: 'rgba(255,255,255,.1)',
                        strokeWidth: 10,
                        trailWidth: 2,
                        duration: 200,
                        easing: hm_animation,
                        from: { color: hm_startColor, width: 2 },
                        to: { color: hm_endColor, width: 2 },
                        text: {
                            value: ' ',
                            color: hm_percenty_color,
                        },
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                            circle.path.setAttribute('stroke-width', state.width);
                        }
                    });
                    setInterval(function () {
                        var second = new Date().getSeconds();
                        var second_minus = 60 - second;
                        circle.animate(second_minus / 60, function () {
                            if (second === 0) {
                                second = 60;
                                circle.setText(second_minus);
                            } else {
                                circle.setText(second_minus);
                            }
                        });
                    }, 1000);
                } else if ($this_this.hasClass("minutes")) {
                    circle = new ProgressBar.Circle(element, {
                        color: hm_startColor,
                        trailColor: 'rgba(255,255,255,.1)',
                        strokeWidth: 10,
                        trailWidth: 2,
                        duration: 800,
                        easing: hm_animation,
                        from: { color: hm_startColor, width: 2 },
                        to: { color: hm_endColor, width: 2 },
                        text: {
                            value: ' ',
                            color: hm_percenty_color,
                        },
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                            circle.path.setAttribute('stroke-width', state.width);
                        }
                    });
                    iii = 0;
                    setInterval(function () {
                        var minutes = new Date().getMinutes();
                        var minutes_minus = 60 - minutes;
                        var $path_val = $this_this.find('.progressbar-text');
                        if (iii === 0) {
                            $path_val.countTo({
                                from: 0,
                                to: minutes_minus,
                                speed: 800,
                            });
                        }
                        iii = 1;
                        circle.animate(minutes_minus / 60, function () {
                            if (minutes === 0) {
                                minutes = 60;
                                circle.setText(minutes_minus);
                            } else {
                                circle.setText(minutes_minus);
                            }
                        });
                    }, 1000);
                } else if ($this_this.hasClass("hours")) {
                    circle = new ProgressBar.Circle(element, {
                        color: hm_startColor,
                        trailColor: 'rgba(255,255,255,.1)',
                        strokeWidth: 10,
                        trailWidth: 2,
                        duration: 800,
                        easing: hm_animation,
                        from: { color: hm_startColor, width: 2 },
                        to: { color: hm_endColor, width: 2 },
                        text: {
                            value: ' ',
                            color: hm_percenty_color,
                        },
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                            circle.path.setAttribute('stroke-width', state.width);
                        }
                    });
                    iii = 0;
                    setInterval(function () {
                        var hours = new Date().getHours();
                        var hours_minus = 24 - hours;
                        var $path_val = $this_this.find('.progressbar-text');
                        if (iii === 0) {
                            $path_val.countTo({
                                from: 0,
                                to: hours_minus,
                                speed: 800,
                            });
                        }
                        iii = 1;
                        circle.animate(hours_minus / 24, function () {
                            if (hours === 0) {
                                hours = 24;
                                circle.setText(hours_minus);
                            } else {
                                circle.setText(hours_minus);
                            }
                        });
                    }, 1000);
                } else if ($this_this.hasClass("days")) {
                    circle = new ProgressBar.Circle(element, {
                        color: hm_startColor,
                        trailColor: 'rgba(255,255,255,.1)',
                        strokeWidth: 10,
                        trailWidth: 2,
                        duration: 800,
                        easing: hm_animation,
                        from: { color: hm_startColor, width: 2 },
                        to: { color: hm_endColor, width: 2 },
                        text: {
                            value: "0",
                            color: hm_percenty_color,
                        },
                        step: function (state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                            circle.path.setAttribute('stroke-width', state.width);
                        }
                    });
                    iii = 0;
                    setInterval(function () {
                        var $path_val = $this_this.find('.progressbar-text');
                        if (iii === 0) {
                            $path_val.countTo({
                                from: 0,
                                to: days,
                                speed: 800,
                            });
                        }
                        iii = 1;
                        circle.animate(days / 365, function () {
                            circle.setText(days);
                        });
                    }, 1000);
                } else {
                    circle = new ProgressBar.Circle(element, {
                        color: hm_startColor,
                        trailColor: 'rgba(0,0,0,.07)',
                        strokeWidth: 10,
                        trailWidth: 3,
                        duration: 2000,
                        easing: hm_animation,
                        from: { color: hm_startColor, width: 3 },
                        to: { color: hm_endColor, width: 3 },
                        text: {
                            value: '0',
                            color: hm_percenty_color,
                        },
                        step: function (state, circle) {
                            circle.setText((circle.value() * 100).toFixed(0) + " %");
                            circle.path.setAttribute('stroke', state.color);
                            circle.path.setAttribute('stroke-width', state.width);
                        }
                    });
                }
                setTimeout(function () {
                    $this_this.animate({
                        opacity: 1,
                    }, 1000);
                    $this_this.find(".progressbar-text").animate({
                        opacity: 1,
                    }, hm_delay);
                    if ($this_this.hasClass("path")) {
                    } else if ($this_this.hasClass("seconds") || $this_this.hasClass("minutes") || $this_this.hasClass("hours") || $this_this.hasClass("days")) {
                    } else {
                        circle.animate(hm_percenty / 100, function () {
                        });
                    }
                }, hm_delay);
            });
            //}
        });
        //---------------------------------------------> Team Boxes 3
        $('.team_block3').each(function () {
            var num = 0;
            $('.team-col').each(function (index) {
                var bg_color = $(this).attr("data-color");
                num += 1;
                if (num == 3 || num == 4) {
                    $(this).addClass("team_col_on_right");
                }
                if (num == 4) {
                    num = 0;
                }
                //---------------------------------------------> Set Background Color
                if (typeof bg_color !== typeof undefined && bg_color !== false) {
                    $(this).css({ "background": bg_color});
                    $(this).find(".arrow").css({ "background": bg_color});
                }
            });
        });
        //---------------------------------------------> Youtube Background Video
        if ($.isFunction($.fn.YTPlayer)) {
            $(".youtube_bg_video").each(function (index, element) {
                var $vid_vid = $(this);
                var $vid_controlls = $vid_vid.parent().find('.play_video_btn');
                $vid_vid.YTPlayer();
                $($vid_controlls).on('click', function (event) {
                    event.preventDefault();
                    if ($vid_controlls.hasClass('play_video')) {
                        $vid_controlls.removeClass('play_video').addClass('pause_video');
                        $vid_controlls.find('i').removeClass().addClass('fa fa-pause');
                        $vid_vid.playYTP();
                        $vid_vid.removeClass('now_pausing').addClass('now_playing');
                    } else {
                        $vid_controlls.removeClass('pause_video').addClass('play_video');
                        $vid_controlls.find('i').removeClass().addClass('fa fa-play');
                        $vid_vid.pauseYTP();
                    }
                });
            });
        }
        //---------------------------------------------> Cart Rating
        $('.your_rate').each(function (index, element) {
            var score = $(this).find('.outline_stars').data('rate');
            $(this).find('.outline_stars').css({width: score + '%'});
        });
        //---------------------------------------------> Animated
        $('.animated').appear(function () {
            var elem = $(this);
            var animation = elem.data('animation');
            if (!elem.hasClass('visible')) {
                var animationDelay = elem.data('animation-delay');
                if (animationDelay) {
                    setTimeout(function () {
                        elem.addClass(animation + " visible");
                        elem.removeClass('hiding');
                    }, animationDelay);
                } else {
                    elem.addClass(animation + " visible");
                    elem.removeClass('hiding');
                }
            }
        });
        //---------------------------------------------> Scroll Easing
        $('.scroll').on('click', function (event) {
            var $anchor = $(this);
            var headerH = $('#navigation_bar').outerHeight();
            var my_offset = 0;
            if ($(this).hasClass("reviews_navigate")) {
                var rev_tab = $("a[data-content='reviews']");
                $(rev_tab).click();
            }
            if ($(this).hasClass("onepage")) {
                my_offset = headerH - 2;
            }
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - my_offset + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        //--------------------------------------> Single Product Number Of Items
        $(".quantity_controll").on("click", function () {
            var $button = $(this);
            var oldValue = $button.siblings('.input-text').val();
            var newVal;
            if ($button.hasClass('plus')) {
                newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 1) {
                    newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.siblings('.input-text').val(newVal);
        });
        $(window).resize(function () {
            hmtabswidth();
        });
        hmtabswidth();
        function hmtabswidth() {
            $('.hm-tabs').each(function (index) {
                var $allparent = $(this);
                var all_width = $allparent.width();
                var all_lis = 0;
                $allparent.find(".tabs-navi > li").each(function (index, element) {
                    var li_width = $(this).outerWidth();
                    all_lis += li_width;
                });
                if (all_lis >= all_width) {
                    $allparent.addClass("tabs_mobile");
                } else {
                    $allparent.removeClass("tabs_mobile");
                }
            });
            $('.sort_options').each(function (index) {
                var $allparent = $(this);
                var all_width = $allparent.width();
                var all_lis = 0;
                $allparent.find("#filter-by > li").each(function (index, element) {
                    var li_width = $(this).outerWidth();
                    all_lis += li_width;
                });
                if (all_lis >= all_width) {
                    $allparent.addClass("filter_by_mobile");
                } else {
                    $allparent.removeClass("filter_by_mobile");
                }
            });
        }
        //=====> Tabs
        $('.hm-tabs').each(function (index) {
            var allparent = $(this);
            var all_width = allparent.width();
            var tabItems = allparent.find('.tabs-navi a'),
                tabContentWrapper = allparent.find('.tabs-body');
            tabItems.on('click', function (event) {
                event.preventDefault();
                var selectedItem = $(this);
                var parentlist = selectedItem.parent();
                if (parentlist.index() === 0) {
                    selectedItem.parent().siblings("li").removeClass('prev_selected');
                } else {
                    selectedItem.parent().prev().addClass('prev_selected').siblings("li").removeClass('prev_selected');
                }
                if (!selectedItem.hasClass('selected')) {
                    var selectedTab = selectedItem.data('content'),
                        selectedContent = tabContentWrapper.find('li[data-content="' + selectedTab + '"]'),
                        slectedContentHeight = selectedContent.innerHeight();
                    tabItems.removeClass('selected');
                    selectedItem.addClass('selected');
                    selectedContent.addClass('selected').siblings('li').removeClass('selected');
                    //animate tabContentWrapper height when content changes
                    tabContentWrapper.animate({
                        'height': slectedContentHeight
                    }, 200);
                }
            });
            //hide the .hm-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
            checkScrolling($('.hm-tabs nav'));
            $(window).on('resize', function () {
                checkScrolling($('.hm-tabs nav'));
                tabContentWrapper.css('height', 'auto');
            });
            $('.hm-tabs nav').on('scroll', function () {
                checkScrolling($(this));
            });
            function checkScrolling(tabs) {
                var totalTabWidth = parseInt(tabs.children('.tabs-navi').width()),
                    tabsViewport = parseInt(tabs.width());
                if (tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
                    tabs.parent('.hm-tabs').addClass('is-ended');
                } else {
                    tabs.parent('.hm-tabs').removeClass('is-ended');
                }
            }
        });
        //======> Isotope Filter
        $(function () {
            $(window).load(function () {
                $(".hm_filter_wrapper").each(function (index, element) {
                    var main_parent = $(this);
                    var filter_buttons = main_parent.find('#filter-by');
                    var filtered_parent = main_parent.find('.hm_filter_wrapper_con');
                    var col_width = main_parent.hasClass("masonry_porto") ? 1 : 0;
                    main_parent.find("#filter-by li a").each(function (index, element) {
                        var get_class = $(this).attr("data-option-value");
                        var lenghty = main_parent.find(".hm_filter_wrapper_con > " + get_class).length;
                        $(this).find(".num").html(lenghty);
                    });
                    main_parent.find(".sort_list a.sort_selecter").click(function () {
                        return false;
                    });
                    main_parent.find(".porto_nums > span.like i").click(function () {
                        var par = $(this).parent();
                        par.addClass('added');
                        var sib = $(this).siblings(".like_counter");
                        var sib_int = parseInt($(this).siblings(".like_counter").text(), 10);
                        ++sib_int;
                        sib.html(sib_int);
                    });
                    main_parent.find("#sort-by li a").click(function () {
                        var this_a = $(this);
                        var $asc_desc = this_a.closest('.sort_list').siblings("#sort-direction");
                        $asc_desc.css({"opacity": "1"});
                        var this_text = this_a.find('.text').text();
                        var writed = this_a.closest('.sort_list').find('a.sort_selecter .text');
                        writed.html(this_text);
                    });
                    var $container = main_parent.find('.hm_filter_wrapper_con');
                    var col_width_mobile = 0;
                    if (getScreenWidth() >= 1022) {
                        col_width_mobile = 5;
                    } else if (getScreenWidth() >= 766) {
                        col_width_mobile = 4;
                    } else if (getScreenWidth() >= 478) {
                        col_width_mobile = 2;
                    } else {
                        col_width_mobile = 1;
                    }
                    if (!main_parent.hasClass('content_filter')) { //-------------->
                        if (main_parent.hasClass('masonry_porto')) {
                            $container.isotope({
                                itemSelector: '.filter_item_block',
                                layoutMode: 'masonry',
                                resizable: false, // disable normal resizing
                                masonry: {
                                    columnWidth: $container.width() / col_width_mobile,
                                },
                                getSortData: {
                                    name: '.name',
                                    like_counter: '.like_counter parseInt',
                                    number: '.number parseInt',
                                    comm_counter: '.comm_counter parseInt',
                                },
                            });
                            $(window).resize(function () {
                                var col_width_mobile = 0;
                                if (getScreenWidth() >= 1022) {
                                    col_width_mobile = 5;
                                } else if (getScreenWidth() >= 766) {
                                    col_width_mobile = 4;
                                } else if (getScreenWidth() >= 478) {
                                    col_width_mobile = 2;
                                } else {
                                    col_width_mobile = 1;
                                }
                                $container.isotope({
                                    masonry: { columnWidth: $container.width() / col_width_mobile }
                                });
                            });
                        } else {
                            $container.isotope({
                                itemSelector: '.filter_item_block',
                                layoutMode: 'masonry',
                                resizable: false, // disable normal resizing
                                masonry: {
                                    columnWidth: col_width,
                                },
                                getSortData: {
                                    name: '.name',
                                    like_counter: '.like_counter parseInt',
                                    number: '.number parseInt',
                                    comm_counter: '.comm_counter parseInt',
                                },
                            });
                        }
                        var $optionSets = main_parent.find('#options .option-set'),
                            $optionLinks = $optionSets.find('a');
                        $optionLinks.click(function () {
                            var $this = $(this);
                            // don't proceed if already selected
                            if ($this.hasClass('selected')) {
                                return false;
                            }
                            var $optionSet = $this.parents('.option-set');
                            $optionSet.find('.selected').removeClass('selected');
                            $this.addClass('selected');
                            // make option object dynamically, i.e. { filter: '.my-filter-class' }
                            var options = {},
                                key = $optionSet.attr('data-option-key'),
                                value = $this.attr('data-option-value');
                            // parse 'false' as false boolean
                            value = value === 'false' ? false : value;
                            options[ key ] = value;
                            if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                                // changes in layout modes need extra logic
                                changeLayoutMode($this, options);
                            } else {
                                // otherwise, apply new options
                                $container.isotope(options);
                            }
                            return false;
                        });
                    } else { //------------------------------------------------------------->
                        filtered_parent.find('.content_filter_item').each(function (index, element) {
                            var filtered_parent_item = $(this);
                            var item_height = filtered_parent_item.find('.kyma_accordion').outerHeight();
                            filtered_parent_item.animate({
                                height: item_height + 10 + 'px',
                            }, 300);
                        });
                        filter_buttons.find('li a').click(function (event) {
                            var i_sel = $(this).attr('data-option-value');
                            event.preventDefault();
                            if (!$(this).hasClass('selected')) {
                                filter_buttons.find('li a').removeClass('selected');
                                $(this).addClass('selected');
                                filtered_parent.children().not(i_sel).each(function (index, element) {
                                    var this_occy = $(this);
                                    var child_occ = this_occy.find(".kyma_occ_container");
                                    this_occy.animate({ height: 0 }).addClass('content_hidden');
                                    child_occ.removeClass("occ_expanded");
                                    child_occ.find(".kyma_occ_content").stop(true, true).animate({
                                        height: '0px',
                                    }, 300);
                                });
                                filtered_parent.children(i_sel).each(function (index, element) {
                                    var this_occy = $(this);
                                    var heighty = $(this).find(".kyma_accordion").outerHeight() + 10;
                                    this_occy.animate({ height: heighty + 'px' }).removeClass('content_hidden');
                                });
                            }
                        });
                    } //------------------------------------------------------------->
                });
                //=====> Each
            });
        });
        //=====> Top Cart
        $('.hm_icon_search > a, .top_add_card').on('click', function(event){
            var parent = $(this).parent();
            var $this_btn = $(this);
            var $target_block = $this_btn.siblings('div');

            event.preventDefault();
            event.stopPropagation();

            if(parent.hasClass('active') && $target_block.hasClass('hm_active_prep')){
                $target_block.fadeOut(function(){
                    parent.removeClass('active');
                });
            }else{
                parent.addClass('active');
                $('.hm_toogle_prep').removeClass('hm_active_prep');
                $target_block.addClass('hm_active_prep');

                $('.hm_toogle_prep:not(.hm_active_prep)').fadeOut();

                $target_block.fadeIn(function(){
                    $target_block.on("click touchstart", function(e){
                        e.stopPropagation();
                    });
                });
            }
            $(document).on("click touchstart", function(e){
                $target_block.fadeOut();
                parent.removeClass('active');
            });
        });
    });
    //========> Menu
    $.fn.webhunt = function (options) {
        var whatTheLastWidth = getScreenWidth();
        var ifisdescktop = false;
        var MqL = 1170;
        var settings = {
            duration: 300,
            delayOpen: 0,
            menuType: "horizontal", // horizontal - vertical
            position: "right", // right - left
            parentArrow: true,
            hideClickOut: true,
            submenuTrigger: "hover",
            backText: "Back to ",
            clickToltipText: "Click",
        };
        $.extend(settings, options);
        var nav_con = $(this);
        var $nav_con_parent = nav_con.parent("#main_nav");
        var menu = $(this).find('#navy');
        //=====> Vertical and Horizontal
        if (settings.menuType == "vertical") {
            $(menu).addClass("vertical_menu");
            if (settings.position == "right") {
                $(menu).addClass("position_right");
            } else {
                $(menu).addClass("position_left");
            }
        } else {
            $(menu).addClass("horizontal_menu");
        }
        //=====> Add Arrows To Parent li
        if (settings.parentArrow === true) {
            $(menu).find("li.normal_menu li, li.has_image_menu").each(function () {
                if ($(this).children("ul").length > 0) {
                    $(this).children("a").append("<span class='parent_arrow normal_menu_arrow'></span>");
                }
            });
            $(menu).find("ul.mega_menu li ul li, .tab_menu_list > li").each(function () {
                if ($(this).children("ul").length > 0) {
                    $(this).children("a").append("<span class='parent_arrow mega_arrow'></span>");
                }
            });
        }
        function TopSearchFunc() {
            $(".top_search").each(function (index, element) {
                var top_search = $(this);
                top_search.submit(function (event) {
                    event.stopPropagation();
                    if (top_search.hasClass("small_top_search")) {
                        top_search.removeClass("small_top_search");
                        top_search.addClass("large_top_search");
                        if (getScreenWidth() <= 315) {
                            top_search.siblings("#top_cart").animate({opacity: 0});
                        }
                        top_search.siblings("#nav_menu:not(.mobile_menu), .logo_container").animate({opacity: 0});
                        return false;
                    }
                });
                $(top_search).on("click touchstart", function (e) {
                    e.stopPropagation();
                });
                $(document).on("click touchstart", function (e) {
                    if (top_search.hasClass("large_top_search")) {
                        top_search.removeClass("large_top_search");
                        top_search.addClass("small_top_search");
                        if (getScreenWidth() <= 315) {
                            top_search.siblings("#top_cart").animate({opacity: 1});
                        }
                        top_search.siblings("#nav_menu:not(.mobile_menu), .logo_container").animate({opacity: 1});
                    }
                });
            });
            if (getScreenWidth() < 1190) {
                $("#navigation_bar").find(".top_search").addClass("small_top_search");
            } else {
                $("#navigation_bar").find(".top_search").removeClass("small_top_search");
            }
        }
        var top_search_func = new TopSearchFunc();
        $(window).resize(function () {
            top_search_func = new TopSearchFunc();
            if (whatTheLastWidth > 992 && getScreenWidth() <= 992 && $("body").hasClass("header_on_side")) {
                $(menu).slideUp();
            }
            if (whatTheLastWidth <= 992 && getScreenWidth() > 992 && $("body").hasClass("header_on_side")) {
                $(menu).slideDown();
            }
            if (whatTheLastWidth <= 992 && getScreenWidth() > 992 && !$("body").hasClass("header_on_side")) {
                removeTrigger();
                playMenuEvents();
            }
            if (whatTheLastWidth > 992 && getScreenWidth() <= 992) {
                releaseTrigger();
                playMobileEvents();
                $(menu).slideUp();
            }
            whatTheLastWidth = getScreenWidth();
            return false;
        });
        //======> After Refresh
        function ActionAfterRefresh() {
            if (getScreenWidth() <= 992 || $("body").hasClass("header_on_side")) {
                releaseTrigger();
                playMobileEvents();
            } else {
                removeTrigger();
                playMenuEvents();
            }
        }
        var action_after_ref = new ActionAfterRefresh();
        //======> Mobile Menu
        function playMobileEvents() {
            $(".nav_trigger").removeClass("nav-is-visible");
            $(menu).find("li, a").unbind();
            if ($(nav_con).hasClass("mobile_menu")) {
                $(nav_con).find("li.normal_menu").each(function () {
                    if ($(this).children("ul").length > 0) {
                        $(this).children("a").not(':has(.parent_arrow)').append("<span class='parent_arrow normal_menu_arrow'></span>");
                    }
                });
            }
            $(menu).find("li:not(.has-children):not(.go-back)").each(function () {
                $(this).removeClass("opened_menu");
                if ($(this).children("ul").length > 0) {
                    var $li_li_li = $(this);
                    $(this).children("a").on("click", function (event) {
                        var curr_act = $(this);
                        if (!$(this).parent().hasClass("opened_menu")) {
                            $(this).parent().addClass("opened_menu");
                            $(this).parent().siblings("li").removeClass("opened_menu");
                            if ($(this).parent().hasClass("tab_menu_item")) {
                                $(this).parent().addClass("active");
                                $(this).parent().siblings("li").removeClass("active");
                            }
                            $(this).siblings("ul").slideDown(settings.duration);
                            $(this).parent("li").siblings("li").children("ul").slideUp(settings.duration);
                            setTimeout(function () {
                                var curr_position = curr_act.offset().top;
                                $('body,html').animate({
                                        //scrollTop: curr_position ,
                                    }, {queue: false, duration: 900, easing: "easeInOutExpo"}
                                );
                            }, settings.duration);
                            return false;
                        }
                        else {
                            $(this).parent().removeClass("opened_menu");
                            $(this).siblings("ul").slideUp(settings.duration);
                            if ($li_li_li.hasClass("mobile_menu_toggle") || $li_li_li.hasClass("tab_menu_item")) {
                                return false;
                            }
                        }
                    });
                }
            });
        }
        //======> Desktop Menu
        function playMenuEvents() {
            $(menu).children('li').children('ul').hide(0);
            $(menu).find("li, a").unbind();
            $(menu).slideDown(settings.duration);
            $(menu).find('ul.tab_menu_list').each(function (index, element) {
                var tab_link = $(this).children('li').children('a');
                $("<span class='mega_toltip'>" + settings.clickToltipText + "</span>").prependTo(tab_link);
                $(this).children('li').on('mouseover', function () {
                    if (!$(this).hasClass('active')) {
                        $(this).children('ul').stop().fadeIn();
                        $(this).siblings().children('ul').stop().fadeOut();
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                    }
                });
            });
            $(menu).find('li.normal_menu, > li').hover(function () {
                var li_link = $(this).children('a');
                $(this).children('ul').stop().fadeIn(settings.duration);
            }, function () {
                $(this).children('ul').stop().fadeOut(settings.duration);
            });
        }
        //======> Trigger Button Mobile Menu
        function releaseTrigger() {
            $(nav_con).find(".nav_trigger").unbind();
            $(nav_con).addClass('mobile_menu');
            $nav_con_parent.addClass('has_mobile_menu');
            $(nav_con).find('.nav_trigger').each(function (index, element) {
                var $trigger_mob = $(this);
                $trigger_mob.on('click touchstart', function (e) {
                    e.preventDefault();
                    if ($(this).hasClass('nav-is-visible')) {
                        $(this).removeClass('nav-is-visible');
                        $(menu).slideUp(settings.duration);
                    } else {
                        $(this).addClass('nav-is-visible');
                        $(document).unbind("click");
                        $(document).unbind("touchstart");
                        $(menu).slideDown(settings.duration, function () {
                            $(menu).on("click touchstart", function (event) {
                                event.stopPropagation();
                            });
                            $(document).on('click touchstart', function (event) {
                                if ($trigger_mob.hasClass('nav-is-visible') && getScreenWidth() <= 992) {
                                    $trigger_mob.removeClass('nav-is-visible');
                                    $(menu).slideUp(settings.duration);
                                }
                            });
                        });
                    }
                });
            });
        }
        //=====> End get tabs menu height
        function removeTrigger() {
            $(nav_con).removeClass('mobile_menu');
            $nav_con_parent.removeClass('has_mobile_menu');
        }
        //----------> sticky menu
        kyma_sticky();
    };
    var offset_header = "";
    get_header_offset();
    kyma_accordion();
    $(window).on("resize", function () {
        get_header_offset();
        kyma_accordion();
        kyma_sticky();
    });
    function get_header_offset() {
        offset_header = "";
        if (getScreenWidth() <= 992) {
            offset_header = "";
        } else {
            offset_header = "#site_header";
        }
    }
    //-----------------> My Acoordion
    function kyma_accordion(resize_occ) {
        $(".kyma_accordion").each(function (index, element) {
            var its_type = $(this).attr("data-type");
            var its_item = $(this).find(".kyma_occ_container");
            var its_item_lenth = its_item.length;
            its_item.each(function (index, element) {
                var item_item = $(this);
                var item_item_title = $(this).find(".kyma_occ_title");
                var item_title_height = $(this).find(".kyma_occ_title").outerHeight();
                var item_expanded = item_item.attr("data-expanded");  //false - true
                var item_item_content = $(this).find(".kyma_occ_content");
                var item_item_height = item_item_content.find(".acc_content").outerHeight();
                if (item_expanded == "true") {//occ_expanded
                    item_item.addClass("occ_expanded");
                    item_item_content.stop(true, true).animate({
                        height: item_item_height + 'px',
                    }, 300);
                }
                item_item_title.unbind();
                item_item_title.click(function (event) {
                    if (item_item.hasClass("occ_expanded")) {
                        item_item.removeClass("occ_expanded");
                        item_item_content.stop(true, true).animate({
                            height: '0px',
                        }, 300);
                        item_item_content.closest('.content_filter_item').stop(true, true).animate({
                            height: item_title_height + 10 + 'px',
                        }, 300);
                    } else {
                        item_item.addClass("occ_expanded");
                        item_item_content.stop(true, true).animate({
                            height: item_item_height + 'px'
                        }, 300);
                        item_item_content.closest('.content_filter_item').stop(true, true).animate({
                            height: item_item_height + item_title_height + 10 + 'px'
                        }, 300);
                        //--------> Accordion Type
                        if (its_type == "accordion") {
                            item_item.siblings().removeClass("occ_expanded");
                            item_item.siblings().find(".kyma_occ_content").stop(true, true).animate({
                                height: '0px'
                            }, 300);
                        }
                    }
                });
            });
        });
    }
    //----------> sticky menu
    function kyma_sticky() {
        if ($.isFunction($.fn.sticky)) {
            var $navigation_bar = $("#navigation_bar");
            var is_sticky = parseInt($("#stickymenu").html());
            $navigation_bar.unstick();
            var mobile_menu_len = $navigation_bar.find(".mobile_menu").length;
            var side_header = $(".header_on_side").length;
            if (mobile_menu_len === 0 && side_header === 0 && is_sticky) {
                $navigation_bar.sticky({
                    topSpacing: 0,
                    className: "sticky_menu",
                    getWidthFrom: "body"
                });
            } else {
                $navigation_bar.unstick();
            }
        }
    }
    function getScreenWidth() {
        return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    }
    //-------------------------------> Revolution Slider - Fullscreen
    if ($.isFunction($.fn.revolution)) {
        //-------------------------------> Revolution Slider - Panzoom fullwidth
        $('.tp-banner-panzoom-fullwidth').show().revolution({
            dottedOverlay: "none",
            delay: 16000,
            startwidth: 1170,
            startheight: 700,
            hideThumbs: 200,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "solo",
            navigationStyle: "preview4",
            touchenabled: "on",
            onHoverStop: "on",
            lazyLoad: "on",
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,
            parallax: "scroll",
            parallaxBgFreeze: "off",
            parallaxLevels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            keyboardNavigation: "off",
            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,
            shadow: 0,
            fullWidth: "off",
            fullScreen: "off",
            spinner: "spinner4",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            forceFullWidth: "off",
            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideThumbsUnderResolution: 0,
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            fullScreenOffsetContainer: offset_header
        });
		var rev_parllax = dir.revo_parallax_effect;
		/* Revolution slider style 1 */
		$('.banner').revolution({

        delay: 9000,
        startwidth: 960,
        startheight: 500,
        startWithSlide: 0,
        fullScreenAlignForce: "off",
        autoHeight: "off",
        minHeight: "off",
        shuffle: "off",
        onHoverStop: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 3,
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResoluition: 0,
        hideThumbs: 0,
        hideTimerBar: "off",
        keyboardNavigation: "on",
        navigationType: "bullet",
        navigationArrows: "solo",
        navigationStyle: "round",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 30,
        navigationVOffset: 30,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        touchenabled: "on",
        swipe_velocity: "0.7",
        swipe_max_touches: "1",
        swipe_min_touches: "1",
        drag_block_vertical: "false",
        parallax: rev_parllax,
        parallaxBgFreeze: "on",
        parallaxLevels: [10, 7, 4, 3, 2, 5, 4, 3, 2, 1],
        parallaxDisableOnMobile: "off",
        stopAtSlide: -1,
        stopAfterLoops: -1,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        hideSliderAtLimit: 0,
        dottedOverlay: "none",
        spinned: "spinner4",
        fullWidth: "off",
        forceFullWidth: "off",
        fullScreen: "off",
        fullScreenOffsetContainer: "#topheader-to-offset",
        fullScreenOffset: "0px",
        panZoomDisableOnMobile: "off",
        simplifyAll: "off",
        shadow: 0
    });
    }
    ;
	
	/* Woocommerce sidebar category collapse */
	$('.woocommerce .product-categories').dcAccordion({
        saveState: false,
        autoExpand: true,
        showCount: true,
    });
	$('.dcjq-icon').click(function(){
		$(this).toggleClass('less');
	});
})(window.jQuery);