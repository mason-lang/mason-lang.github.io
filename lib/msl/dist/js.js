"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports"],exports=>{
	exports._get=_ms.lazy(()=>{
		let op=function op(op_45name){
			return Function("a","b",`return a ${op_45name} b`)
		};
		let unary_45op=function unary_45op(op_45name){
			return Function("_",`return ${op_45name} _`)
		};
		let js_45and=exports["js-and"]=op(`&`);
		let js_45caret=exports["js-caret"]=op(`^`);
		let js_60_60=exports["js<<"]=op("<<");
		let js_62_62=exports["js>>"]=op(">>");
		let js_62_62_62=exports["js>>>"]=op(">>>");
		let js_61_61_61=exports["js==="]=op("===");
		let js_61_61=exports["js=="]=op("==");
		let js_60=exports["js<"]=op("<");
		let js_62=exports["js>"]=op(">");
		let js_60_61=exports["js<="]=op("<=");
		let js_62_61=exports["js>="]=op(">=");
		let js_43=exports["js+"]=op("+");
		let js_45=exports["js-"]=op("-");
		let js_42=exports["js*"]=op("*");
		let js_47=exports["js/"]=op("/");
		let js_45mod=exports["js-mod"]=op(`%`);
		let js_45bar=exports["js-bar"]=op(`|`);
		let js_126=exports["js~"]=unary_45op(`~`);
		let js_33=exports["js!"]=unary_45op("!");
		let js_45sub=exports["js-sub"]=Function("obj","prop",`return obj[prop]`);
		let js_45set=exports["js-set"]=Function("obj","prop","val",`obj[prop] = val`);
		let js_45delete=exports["js-delete"]=Function("obj","prop",`delete obj[prop]`);
		let js_45in=exports["js-in"]=op("in");
		let js_45instanceof=exports["js-instanceof"]=op("instanceof");
		let js_45typeof=exports["js-typeof"]=(()=>{
			return unary_45op("typeof")
		})();
		let defined_63=exports["defined?"]=function defined_63(_){
			return ! id_61_63(_,void 0)
		};
		let null_63=exports["null?"]=function null_63(_){
			return js_61_61_61(_,null)
		};
		let exists_63=exports["exists?"]=function exists_63(_){
			return ! js_61_61(_,null)
		};
		let id_61_63=exports["id=?"]=(()=>{
			return Object.is
		})();
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvanMubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztFQUVBLE9BQU0sWUFBQTtVQUNMLFNBQVUsSUFBRyxJQUFHLFlBQVU7O0VBQzNCLGVBQVksb0JBQUE7VUFDWCxTQUFXLElBQUUsVUFBUTs7RUFFdEIsK0JBQVEsR0FBSTtFQUNaLG1DQUFVLEdBQUk7RUFDZCw2QkFBTSxHQUFJO0VBQ1YsNkJBQU0sR0FBSTtFQUNWLGlDQUFPLEdBQUk7RUFDWCxpQ0FBTyxHQUFJO0VBQ1gsNkJBQU0sR0FBSTtFQUNWLHlCQUFLLEdBQUk7RUFDVCx5QkFBSyxHQUFJO0VBQ1QsNkJBQU0sR0FBSTtFQUNWLDZCQUFNLEdBQUk7RUFDVix5QkFBSyxHQUFJO0VBQ1QseUJBQUssR0FBSTtFQUNULHlCQUFLLEdBQUk7RUFDVCx5QkFBSyxHQUFJO0VBQ1QsK0JBQVEsR0FBSTtFQUNaLCtCQUFRLEdBQUk7RUFDWiwwQkFBSyxXQUFVO0VBQ2YseUJBQUssV0FBVTtFQUNmLCtCQUFRLFNBQVUsTUFBSyxPQUFNO0VBQzdCLCtCQUFRLFNBQVUsTUFBSyxPQUFNLE1BQUs7RUFDbEMscUNBQVcsU0FBVSxNQUFLLE9BQU07RUFDaEMsNkJBQU8sR0FBSTtFQUNYLDZDQUFlLEdBQUk7RUFDbkIscUNBQ1UsS0FBQTtVQUNULFdBQVU7RUFBQTtFQUVYLG1DQUFZLG9CQUFBO1VBRVgsRUFBSSxTQUFNLEVBQUM7O0VBRVosNkJBQVMsaUJBQUE7VUFFUixZQUFPLEVBQUM7RUFBQTtFQUVULGlDQUFXLG1CQUFBO1VBRVYsRUFBSSxTQUFNLEVBQUM7RUFBQTtFQUVaLDZCQUNLLEtBQUE7VUFHSiIsImZpbGUiOiJqcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
