function CMP(div='cmp', is_file=false)
{
    var components = [];
    // get components
    $('cmp>div').each(function(e){
        components.push($(this).attr('class'));
    });
    
    // set components
    components.forEach(function(a){
        $(a).each(function(){
            var e = div + '>div.' + a;
            $(this).wrap('<div class="'+a+' cmp"></div>');
            $(this).after($(e).html());
            $parent = $(this).parent();
            $parent.find('.content').html($(this).html());
            if(this.attributes.length != 0){
                $.each(this.attributes, function() {
                    if(this.specified) {
                        console.log($parent.find('.'+this.name).html(this.value));
                    }
                });
            }
            $(this).remove();
        });
    });
    // remove self
    $(div).remove();
}