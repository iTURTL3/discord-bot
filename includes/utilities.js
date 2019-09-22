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
   self.msToDurationString = function(ms) {
      var string   = '';
      var duration = self.msToDuration(ms);
      if ( duration['0'] > 0 ) {
         string += duration['0'] + 'd';
      }
      if ( duration['1'] > 0 ) {
         string += ' ' + duration['1'] + 'h';
      }
      if ( duration['2'] > 0 ) {
         string += ' ' + duration['2'] + 'm';
      }
      if ( duration['3'] > 0 ) {
         string += ' ' + duration['3'] + 's';
      }
      return string;
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
   self.arraySelect = function(array, verification, callback) {
      for ( var i = array.length - 1, selected = []; i >= 0; i-- ) {
         if ( verification(array[i]) ) {
            selected.push(callback ? callback(array[i]) : array[i]);
         }
      }
      return selected.reverse();
   };
   self.arrayShuffle = function(array) {
      for ( var i = 0, length = array.length, swap = 0, temp = false; i < length; i++ ) {
         swap        = Math.floor(Math.random() * (i + 1));
         temp        = array[swap];
         array[swap] = array[i];
         array[i]    = temp;
      }
      return array;
   };
   self.arrayFind = function(array, verification) {
      for ( var i = array.length - 1; i >= 0; i-- ) {
         if ( verification(array[i]) ) {
            return array[i];
         }
      }
   };
   self.randomArrayValue = function(array) {
      return self.arrayShuffle(array)['0'];
   };
   self.pagination = function(items, perPage, pageNumber) {
      var pages = Math.ceil(items.length / perPage);
      var page  = Math.max(1, Math.min(pages, pageNumber || 1));
      var chunk = self.arrayChunk(items, perPage)[page - 1];
      return {
         'pages': pages,
         'page':  page,
         'items': chunk
      };
   };
};
