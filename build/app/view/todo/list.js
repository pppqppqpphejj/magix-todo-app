define("app/view/todo/list",["require","module","exports","magix","jquery","app/service/service"],function(t,e,a){var r=t("magix"),o=t("jquery"),d=t("app/service/service");e.exports=r.View.extend({tmpl:'<div><form class="form-inline" mx-submit="search()"><div class="form-group"><label>关键字:</label><input type="text" class="form-control" v-model="keyword"></div><button class="btn btn-default" type="submit">搜索</button></form><table class="table table-striped"><thead><tr><th>ID</th><th>名称</th><th>操作</th></tr></thead><tbody><tr v-for="todo in todos"><td>{{todo.id}}</td><td>{{todo.name}}</td><td><a href="javascript:;" class="mr10" mx-click="deleteItem({id: {{todo.id}}})">删除</a></td></tr></tbody></table></div>',init:function(){this.observe("keyword")},render:function(){var t=this,e=r.Router.parse();this.data={keyword:e.params.keyword},(new d).all([{name:"todo-list",urlParams:{keyword:this.data.keyword}}],function(e,a){if(e)this.data.err=e;else{var r=a.get("data",{}),o=r.data.todos;t.data.todos=o.filter(function(e){return e.name.search(t.data.keyword)!=-1})}t.setVueHTML(t.data)})},"search<submit>":function(t){t.preventDefault(),r.Router.to({keyword:this.data.keyword})},"deleteItem<click>":function(t){var e=this,a=t.params;o.ajax({url:"/api/todo/delete.json",data:{id:a.id}}).done(function(t){t.info.ok?alert("删除成功"):alert("删除失败"),e.render()})}})});