class HomePage {

    get searchToggle() { return $(".search-toggle"); }
    get searchBox() { return $("#search-form-1"); }
    get commentLink() { return $(".post-comment-link")}
    get comment() { return $("#comment")}
    get author() { return $("#autho")}
    get email() { return $("#email")}
    get submit() { return $("#submit")}



    search(query) {
        browser.execute("arguments[0].click();", this.searchToggle);
        this.searchBox.setValue(query + "\n");
    }

    postComment(name, email, comment) {
        this.commentLink.click();
        this.comment.setValue(comment);
        this.author.setValue(name);
        this.email.setValue(email);
        this.submit.click();
    }

}

export default new HomePage()