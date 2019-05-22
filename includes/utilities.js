module.exports = function() {
   var self          = this;
   self.shortenFloat = function(number, places) {
      return Number(number.toFixed(places));
   };
   self.objectSetAndDelete = function(scope, name, value, delay) {
      scope[name] = value;
      setTimeout(function() {
         if ( name in scope ) {
            delete scope[name];
         }
      }, delay);
   };
};
