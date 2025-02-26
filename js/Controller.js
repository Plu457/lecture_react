export default class Controller {
	constructor(store, {searchFormView}) {
    this.store = store;

		this.searchFormView = searchFormView
		
	  this.subscribeViewEvents()
	}
	
	subscribeViewEvents() {
		this.searchFormView
			.on('@submit', e => this.search(e.detail.value))
			.on("@reset", () => this.reset())
	}
	
	search(keyword) {
		console.log(keyword)
	}
	
	reset() {
		console.log('reset')
	}
}
