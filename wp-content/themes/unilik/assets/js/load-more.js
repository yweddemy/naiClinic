jQuery(function($){
    if ($('.post-type-archive-doctor').length>0) {
        var canBeLoaded = true, // this param allows to initiate the AJAX call only if necessary
            bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts
        $(window).scroll(function(){
            var data = {
                'action': 'prof_loadmore',
                'query': prof_loadmore_params.posts,
                'page' : prof_loadmore_params.current_page
            };
            if( $(document).scrollTop() > ( $(document).height() - bottomOffset ) && canBeLoaded == true ){
                $.ajax({
                    url : wpajax.ajax_url,
                    data:data,
                    type:'POST',
                    beforeSend: function( xhr ){
                        canBeLoaded = false;
                    },
                    success:function(data){
                        if( data ) {
                            $(data).appendTo($('.doctors'));
                            myLazyLoad.update();
                            canBeLoaded = true;
                            prof_loadmore_params.current_page++;
                        }
                    }
                });
            }
        });
    }


    if ($('.doctors-filter-wrap').length>0) {
        var doctorsWrap = $(".doctors"),
            doctorForm = $('.doctors-filter'),
            doctorLoadBtn = doctorForm.find('button');

        doctorForm.submit(function (e) {
            e.preventDefault();

            var doctors_prof        = $('#doctors_prof').val(),
                doctors_search       = $('#doctors_search').val(),
                doctor_type = $('input[name="doctor_type"]:checked').val();;

            $.ajax({
                url : wpajax.ajax_url,
                type : 'POST',
                data : {
				    action:           'doctors_filter',
                    doctors_type: doctor_type,
                    doctors_prof: doctors_prof,
                    doctors_search: doctors_search
                },
                beforeSend : function ( xhr ) {
                    doctorLoadBtn.addClass('loading'); // some type of preloader
                },
                success : function(response) {
                    $('.doctors-main-slider').slick('unslick');
                    doctorsWrap.empty();
                    doctorLoadBtn.removeClass('loading');
                    doctorsWrap.append(response);
                    myLazyLoad.update();
                    unilik.doctorsMainSlider();
                }
            });
        });

    }

});