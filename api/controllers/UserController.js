/**
 * UserController
 *It is used for creating relation between files in view and browser.
 */

module.exports = {
	'new' : function (req, res) {
	  //res.locals.flash = _.clone(req.session.flash);
    //This(res.locals.flash) is used for saving the copy of error.
    res.view();
   // req.session.flash = {};
    //This is for making error to null again.
    //If we do not do this, then same error will come again an again instead of not having that error.
  },
  /**
   * new function will relate it to the new.ejs file in view
   *name of function shoud be same as file in view
   * res.view is for sending.
   */

  'create' : function(req, res, next){
    User.create(req.params.all(), function userCreated (err,user){
       if(err) {
      //   console.log(err);
      // }

        return res.redirect('/user/new');
        //redirect to sign up page.
      }
  //create a user  for having all params sent from sign up form.
  //It is having name,email,title,password,confirm password.

      res.json(user);
      //req.session.flash = {};
      //redirecting to the show action.
    });
  }

};

