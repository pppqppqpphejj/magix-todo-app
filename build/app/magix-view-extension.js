define("app/magix-view-extension",["require","module","exports","magix","jquery","underscore","vue"],function(e,t,i){var n=e("magix"),r=e("jquery"),s=e("underscore"),a=e("vue");n.View.merge({setViewHTML:function(e){this._templateFn||(this._templateFn=s.template(this.tmpl)),this.setHTML(this.id,this._templateFn(e))},setVueHTML:function(e){var t=r.Deferred(),i=this;return i.beginUpdate(),this.vm=new a({el:document.getElementById(this.id),template:this.wrapEvent(this.tmpl),replace:!1,data:e,ready:function(){t.resolve(),i.endUpdate()}}),t.promise()}})});