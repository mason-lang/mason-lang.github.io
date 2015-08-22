"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../at/at","./methods"],(exports,_64_0,methods_1)=>{
	exports._get=_ms.lazy(()=>{
		let _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(_64_0),fold=_ms.get(_$0,"fold"),_$1=_ms.getModule(methods_1),_43=_ms.get(_$1,"+"),_47=_ms.get(_$1,"/");
		let average=exports.average=function average(_64vals){
			_ms.checkContains(_ms.sub(_64,Number),_64vals,"@vals");
			let sum=0;
			let count=0;
			for(let _ of _64vals){
				sum=_43(sum,_);
				count=_43(1,count)
			};
			return _47(sum,count)
		};
		let sum=exports.sum=function sum(_64vals){
			_ms.checkContains(_ms.sub(_64,Number),_64vals,"@vals");
			return fold(_64vals,0,_43)
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvbWF0aC91dGlsLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBSUEsNEJBQVUsaUJBQUE7NkJBQU0sSUFBRTtHQUVqQixRQUFNO0dBQ04sVUFBUTtHQUNKLFFBQUEsS0FBQSxRQUNLO1FBQUQsSUFBRSxJQUFLO1VBQ0wsSUFBRSxFQUFFO0dBQUE7VUFDZCxJQUFFLElBQUk7RUFBQTtFQUVQLG9CQUFNLGFBQUE7NkJBQU0sSUFBRTtVQUViLEtBQUssUUFBTSxFQUFFO0VBQUEiLCJmaWxlIjoibWF0aC91dGlsLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
