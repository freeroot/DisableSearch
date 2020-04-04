const Main = imports.ui.main;

let SavedstartSearch;
let SavedonTextChanged;

function init() {
	this.SavedstartSearch = Main.overview.viewSelector.startSearch;
	this.SavedonTextChanged = Main.overview.viewSelector._onTextChanged;
}

function enable() {
	Main.overview.searchEntry.hide();
	Main.overview.viewSelector.startSearch = function(event) {};
	Main.overview.viewSelector._onTextChanged = function(se, prop) {};
}

function disable() {
	Main.overview.searchEntry.show();
	Main.overview.viewSelector.startSearch = this.SavedstartSearch;
	Main.overview.viewSelector._onTextChanged = this.SavedonTextChanged;
}

