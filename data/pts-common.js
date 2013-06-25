function installOpenTabLinkHandlers() {
	$(".open-tab-link").click(function(eventObject) {
		self.port.emit("open_tab_link_clicked", $(eventObject.target).attr("data-url"));
	});

  $("#pts-logo").click(function(eventObject) {
    self.port.emit("open_tab_link_clicked", "{pts}/");
  });
}
