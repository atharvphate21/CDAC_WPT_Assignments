let users = [
  {
    uname: "user1",
    passwd: "pass1",
  },
  {
    uname: "user2",
    passwd: "pass2",
  },
  {
    uname: "user3",
    passwd: "pass3",
  },
];

exports.validate = function (un,pa) {
    for(var i=0;i<users.length;i++){
        if(un === users[i].uname && pa === users[i].passwd){
            return true;
        }
    }
    return false;
};
