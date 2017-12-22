var User = module.exports =
[   { username: 'eloic', password: '123' },
   { username: 'james', password: 'jms' },
   { username: 'howard', password: 'hellow' },
   { username: 'michael', password: 'supbro' },
   { username: 'jeremy', password: 'heyhey' },
] 


module.exports.getUserByUsername = function(username, callback){
    //console.log(username);
    var query = User.find(o => o.username === username, callback);
    
    
    // for(var val of User) {
    //     if(val.username == username){
    //         var picked = arr.find(o => o.city === 'Amsterdam');     
    //     }
    // }
	// console.log(query);
	// done(query, callback);
}