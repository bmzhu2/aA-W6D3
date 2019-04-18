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
    },

    searchUsers: function(queryVal) {
      return $.ajax({
        url: '/users/search',
        method: 'GET',
        dataType: 'json',
        data: {
          query: `${queryVal}`
        },
        // success: `${success}`
      });
    }
}


module.exports = APIUtil;