const FollowToggle = require('./follow_toggle.js');



function onStartUp() {
    $(".follow-toggle").each((i, el) => {
        new FollowToggle(el)
    })
}













$(onStartUp);