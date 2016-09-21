/*---------------------
 :: User
 -> model
 ---------------------*/
module.exports = {

  schema : true,
  //This is awsome!
  //This is used to prevent the secret values (like password) being stored in database.
  attributes	: {

    name : {
      type: 'string',
      required : true
    },

    regNo : {
      type : 'string'
    },

    branch : {
      type : 'string'
    },

    role : {
      type : 'string'
    },

    position : {
      type : 'string'
    },

    contact : {
      type : 'string'
    },

    domain : {
      type : 'string'
    },


    email : {
      type: 'string',
      email : true,
      required : true,
      unique : true
    },

    encryptedPassword : {
      type : 'string'
    }

    // toJSON : function(){
    //   var obj = this.toObject();
    //   delete obj.password;
    //   delete obj.confirmation;
    //   delete obj.encryptedPassword;
    //   delete obj._csrf;
    //   delete obj.commit;
    //   return obj;
    // }
    /**This is for removing password,confirmation, and so on.. , such that it will not appear on our web page.
     * Means, it will not be shown in a json format which showed in web page.
     */
  }

};
