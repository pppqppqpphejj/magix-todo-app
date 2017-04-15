define('app/view/todo/add',['require','module','exports',"magix"],function(require,module,exports){
var Magix = require('magix')

module.exports = Magix.View.extend({
    tmpl: "<div>todo add</div>",
    render: function() {
        this.setHTML(this.id, this.tmpl)
    }
})

});