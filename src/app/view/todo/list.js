define('app/view/todo/list',['require','module','exports',"magix"],function(require,module,exports){
var Magix = require('magix')

module.exports = Magix.View.extend({
    tmpl: "<div>todo list</div>",
    render: function() {
        this.setHTML(this.id, this.tmpl)
    }
})

});