const userController = {
    profile:function(req, res) {
        res.render('profile');
      },
    profileEdit: function(req, res) {
        res.render('profile-edit');
      }
}
module.exports = userController