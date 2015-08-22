"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../js","./../../math/methods","./../../methods","./../../Type/Kind","./../../Type/Type","./../at","./../at-Type","./../Set/Set","./Seq","./../../math/Number"],(exports,compare_0,js_1,methods_2,methods_3,Kind_4,Type_5,_64_6,_64_45Type_7,Set_8,Seq_9,Number_10)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_60_61_63=_ms.get(_$0,"<=?"),_60_63=_ms.get(_$0,"<?"),_$1=_ms.getModule(js_1),js_45set=_ms.get(_$1,"js-set"),js_45sub=_ms.get(_$1,"js-sub"),_$2=_ms.getModule(methods_2),_43=_ms.get(_$2,"+"),_$3=_ms.getModule(methods_3),set_45sub_33=_ms.get(_$3,"set-sub!"),_$4=_ms.getModule(Kind_4),kind_33=_ms.get(_$4,"kind!"),self_45kind_33=_ms.get(_$4,"self-kind!"),_$5=_ms.getModule(Type_5),_61_62=_ms.get(_$5,"=>"),_64=_ms.getDefaultExport(_64_6),_$6=_ms.getModule(_64_6),_45_33=_ms.get(_$6,"-!"),_45_45_33=_ms.get(_$6,"--!"),count=_ms.get(_$6,"count"),each_33=_ms.get(_$6,"each!"),empty_33=_ms.get(_$6,"empty!"),empty_63=_ms.get(_$6,"empty?"),_64_45Type=_ms.getDefaultExport(_64_45Type_7),_$7=_ms.getModule(_64_45Type_7),empty=_ms.get(_$7,"empty"),from_45stream=_ms.get(_$7,"from-stream"),Set=_ms.getDefaultExport(Set_8),Seq=_ms.getDefaultExport(Seq_9),_$8=_ms.getModule(Seq_9),_60_43_43_33=_ms.get(_$8,"<++!"),_43_43_62_33=_ms.get(_$8,"++>!"),_64indexes=_ms.get(_$8,"@indexes"),_63nth=_ms.get(_$8,"?nth"),_63_60pop_33=_ms.get(_$8,"?<pop!"),_63pop_62_33=_ms.get(_$8,"?pop>!"),_$9=_ms.lazyGetModule(Number_10),Nat=_ms.lazyProp(_$9,"Nat");
		self_45kind_33(Array,_64_45Type,(()=>{
			let built=new (global.Map)();
			_ms.setSub(built,empty,()=>{
				return []
			});
			_ms.setSub(built,from_45stream,stream=>{
				return (()=>{
					let _=[];
					each_33(stream,_ms.methodBound(_,"push"));
					return _
				})()
			});
			return built
		})());
		kind_33(Array,Seq,(()=>{
			let built=new (global.Map)();
			_ms.setSub(built,count,function(){
				let _this=this;
				return _this.length
			});
			_ms.setSub(built,_63nth,function(n){
				let _this=this;
				return (_60_63(n,count(_this))?_ms.some((()=>{
					return js_45sub(_this,n)
				})()):_ms.None)
			});
			_ms.setSub(built,_60_43_43_33,function(added){
				let _this=this;
				_ms.checkContains(_64,added,"added");
				return _this.unshift(...added)
			});
			_ms.setSub(built,_43_43_62_33,function(added){
				let _this=this;
				_ms.checkContains(_64,added,"added");
				return _this.push(...added)
			});
			_ms.setSub(built,_63_60pop_33,function(){
				let _this=this;
				return (empty_63(_this)?_ms.None:_ms.some((()=>{
					return _this.shift()
				})()))
			});
			_ms.setSub(built,_63pop_62_33,function(){
				let _this=this;
				return (empty_63(_this)?_ms.None:_ms.some((()=>{
					return _this.pop()
				})()))
			});
			_ms.setSub(built,empty_33,function(){
				let _this=this;
				for(;;){
					if(! _this.length){
						break
					};
					_this.pop()
				}
			});
			_ms.setSub(built,set_45sub_33,function(n,val){
				let _this=this;
				_ms.checkContains(_ms.unlazy(Nat),n,"n");
				js_45set(_this,n,val)
			});
			_ms.setSub(built,_45_33,function(em){
				let _this=this;
				for(let _ of _64indexes(_this)){
					if(_61_63(_ms.sub(_this,_),em)){
						_this.splice(_,1);
						break
					}
				}
			});
			_ms.setSub(built,_45_45_33,function(_64deleted){
				let _this=this;
				_64deleted=_61_62(Set,_64deleted);
				filter_33(_this,em=>{
					return (()=>{
						let _=_ms.contains(_64deleted,em);
						if(_){
							_45_45_33(_64deleted,[em])
						};
						return _
					})()
				})
			});
			return built
		})());
		let filter_33=exports["filter!"]=function filter_33(arr,keep_45if_63){
			let read_45idx=0;
			let write_45idx=0;
			for(;;){
				if(_60_61_63(arr.length,read_45idx)){
					break
				};
				let here=_ms.sub(arr,read_45idx);
				if(keep_45if_63(here)){
					_ms.setSub(arr,write_45idx,here,"mutate");
					write_45idx=_43(1,write_45idx)
				};
				read_45idx=_43(1,read_45idx)
			};
			arr.length=write_45idx
		};
		let fill=exports.fill=function fill(count,filler){
			_ms.checkContains(Number,count,"count");
			_ms.checkContains(Function,filler,"filler");
			return (()=>{
				let _=new (Array)(count);
				for(let i of _64indexes(_)){
					_ms.setSub(_,i,filler(i),"init")
				};
				return _
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9TZXEvQXJyYXkubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFnQkEsZUFBVyxNQUFNLFdBQ00sS0FBQTs7b0JBQXRCLE1BQ1U7V0FBVDtHQUFBO29CQUVELGNBQWdCO1dBQ1YsS0FDRTtXQURGO0tBQ0osUUFBTSx1QkFBUTs7Ozs7O0VBRWpCLFFBQU0sTUFBTSxJQUNHLEtBQUE7O29CQUFkLE1BQ1c7UUF3Q0Y7V0FBQTs7b0JBdENULE9BQVUsU0FBQTtRQXNDRDtXQXJDTCxDQUFBLE9BQUcsRUFBRyxNQXFDRCxzQkFwQ1k7WUFBbkIsU0FvQ08sTUFwQ0s7SUFBQTs7b0JBRWQsYUFBVSxTQUFBO1FBa0NEO3NCQWxDTztXQWtDUCxjQWpDQyxHQUFHO0dBQUE7b0JBRWIsYUFBVSxTQUFBO1FBK0JEO3NCQS9CTztXQStCUCxXQTlCRixHQUFHO0dBQUE7b0JBRVYsYUFDWTtRQTJCSDtXQTNCRCxDQUFBLFNBMkJDLDhCQTFCVTtZQTBCVjs7O29CQXhCVCxhQUNZO1FBdUJIO1dBdkJELENBQUEsU0F1QkMsOEJBdEJVO1lBc0JWOzs7b0JBcEJULFNBQ2E7UUFtQko7SUFmTCxPQUFBO0tBQUssS0FlQSxhQWRPO01BQWI7S0FBQTtLQWNNOzs7b0JBWFQsYUFBZSxTQUFBLEVBQU07UUFXWjs7SUFWUixTQVVRLE1BVkksRUFBRTtHQUFBO29CQUVmLE9BQVMsU0FBQTtRQVFBO0lBUEosUUFBQSxLQUFBLFdBT0ksT0FOUztLQUFiLEdBQUEsZUFNSSxNQU5LLEdBQUUsSUFDRTtNQUtULGFBTEcsRUFBQztNQUNWO0tBQUE7SUFBQTtHQUFBO29CQUVILFVBQVUsU0FBQTtRQUVEO2VBREksT0FBRyxJQUFJO0lBQ25CLFVBQVEsTUFBTTtZQUNSLEtBQ1c7eUJBRFIsV0FBSDtNQUNBLEdBQUEsRUFDQTtPQUNILFVBQUksV0FBUyxDQUFDO01BQUE7Ozs7Ozs7RUFHbkIsaUNBQVcsbUJBQUEsSUFBSTtHQUNkLGVBQVc7R0FDWCxnQkFBWTtHQUdULE9BQUE7SUFBQyxHQUFBLFVBQUksV0FBVyxZQUNRO0tBQXpCO0lBQUE7SUFFRCxpQkFBTyxJQUFJO0lBQ1IsR0FBQSxhQUFTLE1BQ0k7Z0JBQWYsSUFBSSxZQUFjO2lCQUNMLElBQUUsRUFBRTtJQUFBO2VBRU4sSUFBRSxFQUFFO0dBQUE7R0FFakIsV0FBYztFQUFBO0VBR2Ysc0JBQU8sY0FBQSxNQUFhO3FCQUFQO3FCQUFjO1VBRXJCLEtBQ2U7VUFEZixLQUFJLE9BQU07SUFDVixRQUFBLEtBQUssV0FBUyxHQUNBO2dCQUFoQixFQUFDLEVBQUssT0FBTyIsImZpbGUiOiJhdC9TZXEvQXJyYXkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
