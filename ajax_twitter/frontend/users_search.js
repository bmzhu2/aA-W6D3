const APIUtil = require('./api_util.js');

class UsersSearch {
    constructor(el) {
        this.$el = $(el);
        this.$input = $('.users-search input');
        this.$ul = $('.users');
        this.$el.on("input", "input:text", e => this.handleInput(e));
    }

    handleInput(e) {
 
        APIUtil.searchUsers(this.$input[0].value, this.handleResponse)
            .then( (result) => this.handleResponse(result))
    }

    handleResponse(result) {
        result.forEach((user) => {
            let $li = $('<li>');
            $li.text(`${user.username}`);
            // debugger;
            let $ul = $('.users');
            $ul.append($li);
        });
    }
}

module.exports = UsersSearch;