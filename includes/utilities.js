module.exports = function() {
   var self          = this;
   self.shortenFloat = function(number, places) {
      return Number(number.toFixed(places));
   };
   self.msToDuration = function(ms) {
      return [
         Math.floor(ms  / (1000 * 60   * 60 * 24)),
         Math.floor((ms / (1000 * 60   * 60)) % 24),
         Math.floor((ms / (1000 * 60)) % 60),
         Math.floor((ms / 1000) % 60)
      ];
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
