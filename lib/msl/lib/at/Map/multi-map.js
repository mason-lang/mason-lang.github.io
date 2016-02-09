"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../control","./../../Type/Pred-Type","./../at","./Map"],(exports,control_0,Pred_45Type_1,_64_2,Map_3)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(control_0),opr=_ms.get(_$0,"opr"),_$1=_ms.getModule(Pred_45Type_1),Class=_ms.get(_$1,"Class"),Opt=_ms.get(_$1,"Opt"),_64=_ms.getDefaultExport(_64_2),_$2=_ms.getModule(_64_2),_43_43_33=_ms.get(_$2,"++!"),empty=_ms.get(_$2,"empty"),Map=_ms.getDefaultExport(Map_3),_$3=_ms.getModule(Map_3),get_45or_45add_33=_ms.get(_$3,"get-or-add!");
		let add_45to_45_64_33=exports["add-to-@!"]=function add_45to_45_64_33(map,key,added,_64_45type){
			_ms.checkInstance(Map,map,"map");
			_ms.checkInstance(_64,added,"added");
			_ms.checkInstance(_ms.sub(Opt,_ms.sub(Class,_64)),_64_45type,"@-type");
			let _=get_45or_45add_33(map,key,_ms.lazy(()=>(()=>{
				return empty(opr(_64_45type,Array))
			})()));
			return _43_43_33(_,added)
		};
		let group=exports.group=function group(_64value,group_45by){
			_ms.checkInstance(_64,_64value,"@value");
			_ms.checkInstance(Function,group_45by,"group-by");
			let map=empty(Map);
			for(let _ of _64value){
				let key=group_45by(_);
				add_45to_45_64_33(map,key,[_])
			};
			return map
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvbXVsdGktbWFwLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBTUEsMkNBQVksMkJBQUEsSUFBUSxJQUFJLE1BQVEsV0FDb0I7cUJBRHBDO3FCQUFjOzZCQUFTLFlBQUksTUFBTTtHQUdoRCxNQUFJLGtCQUFZLElBQUksaUJBQ0ssS0FBQTtXQUF4QixNQUFPLElBQUksV0FBTztHQUFBO1VBQ25CLFVBQUksRUFBRTtFQUFBO0VBRVAsd0JBQVEsZUFBQSxTQUFTLFdBQ2lCO3FCQURuQjtxQkFBVztHQUd6QixRQUFNLE1BQU07R0FDUixRQUFBLEtBQUEsU0FDTTtJQUFULFFBQU0sV0FBUztJQUNmLGtCQUFVLElBQUksSUFBSSxDQUFDO0dBQUE7VUFDcEI7RUFBQSIsImZpbGUiOiJhdC9NYXAvbXVsdGktbWFwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
