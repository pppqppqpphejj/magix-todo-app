define('app/view/common/footer',['require','module','exports',"magix"],function(require,module,exports){
 var Magix = require('magix')

 module.exports = Magix.View.extend({
     tmpl: "<header><h2>footer</h2></header>",
     render: function() {
         this.setHTML(this.id, this.tmpl)
     }
 })

});