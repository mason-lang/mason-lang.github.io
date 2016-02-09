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
		let js_45bar=exports["js-bar"]=op(`|`);
		let js_126=exports["js~"]=unary_45op(`~`);
		let js_45delete=exports["js-delete"]=Function("obj","prop",`delete obj[prop]`);
		let js_45in=exports["js-in"]=op("in");
		let js_45typeof=exports["js-typeof"]=unary_45op("typeof");
		let defined_63=exports["defined?"]=function defined_63(_){
			return ! Object.is(_,void 0)
		};
		let null_63=exports["null?"]=function null_63(_){
			return Object.is(_,null)
		};
		let exists_63=exports["exists?"]=function exists_63(_){
			return ! (Object.is(_,null)||Object.is(_,void 0))
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvanMubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztFQUVBLE9BQU0sWUFBQSxVQUNPO1VBQVosU0FBVSxJQUFHLElBQUcsWUFBVTs7RUFDM0IsZUFBWSxvQkFBQSxVQUNPO1VBQWxCLFNBQVUsSUFBRyxVQUFROztFQUV0QiwrQkFBUSxHQUFJO0VBQ1osbUNBQVUsR0FBSTtFQUNkLDZCQUFNLEdBQUk7RUFDViw2QkFBTSxHQUFJO0VBQ1YsaUNBQU8sR0FBSTtFQUNYLCtCQUFRLEdBQUk7RUFDWiwwQkFBSyxXQUFVO0VBQ2YscUNBQVcsU0FBVSxNQUFLLE9BQU07RUFDaEMsNkJBQU8sR0FBSTtFQUNYLHFDQUFXLFdBQVU7RUFFckIsbUNBQVcsb0JBQUEsRUFDQztVQUNYLFlBQVEsRUFBRTs7RUFFWCw2QkFBUSxpQkFBQSxFQUNDO29CQUNKLEVBQUU7RUFBQTtFQUVQLGlDQUFVLG1CQUFBLEVBQ0M7VUFDVixFQUFJLFdBQVEsRUFBRSxpQkFBVSxFQUFFIiwiZmlsZSI6ImpzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
