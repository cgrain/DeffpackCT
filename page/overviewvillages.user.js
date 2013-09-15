if(game_data.screen == "overview_villages") {
    $(".paged-nav-item:last-child").after('<a id="LoadNextPage" href="#">[Volgende pagina laden]</a>');
	$("#LoadNextPage").click(function(){
		var nextpage = $("#paged_view_content .vis tr:first-child a:first").attr("href");
		$.ajax({
                url: "http://"+game_data.world+".tribalwars.nl"+nextpage,
                success: function (result) {
			var rows = $(result).find(".overview_table").find("tr.nowrap");
			$(".overview_table tr.nowrap:last").after(rows);
                }
            })
	$("#paged_view_content .vis tr:first-child a:first").replaceWith('<strong>'+$("#paged_view_content .vis tr:first-child a:first").html()+'</strong>');
	if($("#paged_view_content .vis tr:first-child a:first").attr("href").match("page=-1")) {
		$("#LoadNextPage").remove();
	}
	});
}