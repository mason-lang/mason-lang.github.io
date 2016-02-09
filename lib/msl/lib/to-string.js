"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./private/bootstrap","./Type/Poly"],(exports,bootstrap_0,Poly_1)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(bootstrap_0),msDef=_ms.get(_$0,"msDef"),Poly=_ms.getDefaultExport(Poly_1);
		let to_45string=exports.default=new (Poly)((()=>{
			let built={};
			built.name="to-string";
			let allow_45null_63=built["allow-null?"]=true;
			let impl_45symbol=built["impl-symbol"]="toString";
			let _default=built.default=function _default(){
				let _this=this;
				return (()=>{
					switch(_this){
						case null:{
							return "null"
						}
						case void 0:{
							return "undefined"
						}
						default:return inspect_45object(_this)
					}
				})()
			};
			return built
		})());
		let inspect_45seen=new (Set)();
		let inspect=exports.inspect=new (Poly)((()=>{
			let built={};
			built.name="inspect";
			let allow_45null_63=built["allow-null?"]=true;
			let wrap=built.wrap=function wrap(impl,arg,opts){
				return (()=>{
					if(inspect_45seen.has(arg)){
						return "<recursive>"
					} else {
						inspect_45seen.add(arg);
						return (()=>{
							let _=impl.call(arg,opts);
							inspect_45seen.delete(arg);
							return _
						})()
					}
				})()
			};
			let _default=built.default=to_45string.default;
			return built
		})());
		let inspect_45object=function inspect_45object(){
			return `<object with no prototype>`
		};
		msDef("inspect",inspect);
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvdG8tc3RyaW5nLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBS0EsZ0NBQVcsS0FBSSxNQUNJLEtBQUE7O2NBQWxCO0dBQ0EseUNBQWE7R0FDYix1Q0FBYztHQUNkLDJCQUNXLG1CQUFBOztXQUFIO1lBQUE7TUFDTixLQUFBLEtBQ0k7Y0FBRjtNQUFBO01BQ0YsS0FBQSxPQUNTO2NBQVA7TUFBQTtNQUVFLGVBQUgsaUJBQWU7S0FBQTtJQUFBO0dBQUE7OztFQUVuQixtQkFBZSxLQUFJO0VBRW5CLDRCQUFTLEtBQUksTUFDSSxLQUFBOztjQUFoQjtHQUNBLHlDQUFhO0dBQ2Isb0JBQU8sY0FBQSxLQUFLLElBQUksS0FDSTtXQUNmO0tBQUgsR0FBQSxtQkFBaUIsS0FDRzthQUFsQjtLQUFBLE9BRUU7TUFBSCxtQkFBaUI7YUFDWixLQUNrQjthQURsQixVQUFVLElBQUk7T0FDbEIsc0JBQW9COzs7Ozs7R0FDeEIsMkJBQVM7OztFQUdWLHFCQUNrQiwyQkFBQTtVQUFoQjs7RUFFRixNQUFPLFVBQVEiLCJmaWxlIjoidG8tc3RyaW5nLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
