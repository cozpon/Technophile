function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
}
Phone.prototype.callPhone = function(otherphoneNumber){
  return this.phoneNumber +  " calls " + otherphoneNumber;
};

module.exports = Phone;