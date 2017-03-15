define('app/view/common/header',['require','module','exports',"magix"],function(require,module,exports){
 var Magix = require('magix')

 module.exports = Magix.View.extend({
     tmpl: "<header><h2>header</h2></header>",
     render: function() {
         this.setHTML(this.id, this.tmpl)
     }
 })

});