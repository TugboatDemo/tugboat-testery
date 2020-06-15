class HomePage {

    get searchToggle() { return $(".search-toggle"); }
    get searchBox() { return $("#search-form-1"); }

    search(query) {
        browser.execute("arguments[0].click();", this.searchToggle);
        this.searchBox.setValue(query + "\n");
    }
}

export default new HomePage()