const APIUtil = require('./api_util.js');

class FollowToggle {
    constructor(el) {
        this.$el = $(el)
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("follow-state");
        this.pending = false;
        this.render();
        this.$el.on("click", e => this.handleClick(e));
    }

    render() {
        if (this.followState) {
            this.$el.text("Unfollow!");
        } else {
            this.$el.text("Follow!");
        }
        if (this.pending) {
            this.$el.prop('disabled', true);
        } else {
            this.$el.removeProp('disabled');
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.pending = true;

        if (this.followState) {
            APIUtil.unfollowUser(this.userId).then( () => {
                this.swapFollow();
                this.render();
            })
        } else {
            APIUtil.followUser(this.userId).then( () => {
                this.swapFollow();
                this.render();
            })
        }
        this.render();
    }
    
    swapFollow() {
        if (this.followState === true) {
            this.followState = false;
            this.$el.data("follow-state", false)
        } else {
            this.followState = true;
            this.$el.data("follow-state", true)
        }
        this.pending = false;
    }
    
}

module.exports = FollowToggle;