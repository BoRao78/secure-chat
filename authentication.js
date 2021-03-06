'use strict';
var crypto = require('crypto');

var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

var saltHashPassword = function (userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);
    console.log('UserPassword = '+ userpassword);
    console.log('Passwordhash = '+ nppasswordData.passwordHash);
    console.log('nSalt = '+passwordData.salt);
}

var saltHashPasswordGivenSalt = function (userpassword, salt) {
    var passwordData = sha512(userpassword, salt);
    console.log('UserPassword = '+userpassword);
    console.log('Passwordhash = '+passwordData.passwordHash);
    console.log('nSalt = '+passwordData.salt);
    return passwordData.passwordHash;
}

// const salt1 = genRandomString(16);
// const salt2 = genRandomString(16);
// const hashedPass1 = saltHashPasswordGivenSalt('Security1sF*n', salt1);
// const hashedPass2 = saltHashPasswordGivenSalt('Security1sF*n', salt2);

// console.log(salt1);
// console.log(salt2);
// console.log(hashedPass1);
// console.log(hashedPass2);

module.exports = {
    saltHashPassword: saltHashPasswordGivenSalt
};


