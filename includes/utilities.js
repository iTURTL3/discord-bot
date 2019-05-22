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
   self.arrayChunk = function(array, size) {
      for ( var i = 0, length = array.length, chunks = []; i < length; i += size ) {
         chunks.push(array.slice(i, i + size));
      }
      return chunks;
   };
   self.pagination = function(items, perPage, pageNumber) {
      var pages = Math.ceil(items.length / perPage);
      var page  = Math.max(1, Math.min(pages, pageNumber || 1));
      var items = self.arrayChunk(items, perPage)[page - 1];
      return {
         'pages': pages,
         'page':  page,
         'items': items
      };
   };
};
