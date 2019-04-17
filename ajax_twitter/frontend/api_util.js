const APIUtil = {
    followUser: function(userId) {
      return $.ajax({
        url: `/users/${userId}/follow`,
        method: 'POST',
        dataType: 'json'
      });
    },

    unfollowUser: function(userId) {
      return $.ajax({
        url: `/users/${userId}/follow`,
        method: 'DELETE',
        dataType: 'json'
      });
    }
}


module.exports = APIUtil;