"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../at/at"],(exports,_64_0)=>{
	exports._get=_ms.lazy(()=>{
		let _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(_64_0),fold=_ms.get(_$0,"fold");
		let average=exports.average=function average(_64vals){
			_ms.checkInstance(_ms.sub(_64,Number),_64vals,"@vals");
			let sum=0;
			let count=0;
			for(let _ of _64vals){
				sum=(sum+_);
				count=(1+count)
			};
			return (sum/count)
		};
		let sum=exports.sum=function sum(_64vals){
			_ms.checkInstance(_ms.sub(_64,Number),_64vals,"@vals");
			return fold(_64vals,0,_ms.plus)
		};
		let product=exports.product=function product(_64vals){
			_ms.checkInstance(_ms.sub(_64,Number),_64vals,"@vals");
			return fold(_64vals,1,_ms.times)
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvbWF0aC91dGlsLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBR0EsNEJBQVUsaUJBQUEsUUFDZTs2QkFEVCxJQUFFO0dBRWpCLFFBQU07R0FDTixVQUFRO0dBQ0osUUFBQSxLQUFBLFFBQ0s7UUFBRCxDQUFFLElBQUk7VUFDSixDQUFFLEVBQUU7R0FBQTtVQUNkLENBQUUsSUFBSTtFQUFBO0VBRVAsb0JBQU0sYUFBQSxRQUNlOzZCQURULElBQUU7VUFDYixLQUFLLFFBQU07O0VBRVosNEJBQVUsaUJBQUEsUUFDZTs2QkFEVCxJQUFFO1VBQ2pCLEtBQUssUUFBTSIsImZpbGUiOiJtYXRoL3V0aWwuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
