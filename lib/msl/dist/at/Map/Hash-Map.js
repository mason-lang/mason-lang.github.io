"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../compare","./../../hash-code","./../../js","./../../methods","./../../Type/Kind","./../at","./../at-Type","./../q","./Id-Map","./Map","./Map-Type"],(exports,compare_0,hash_45code_1,js_2,methods_3,Kind_4,_64_5,_64_45Type_6,_63_7,Id_45Map_8,Map_9,Map_45Type_10)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),hash_45code=_ms.getDefaultExport(hash_45code_1),_$1=_ms.getModule(js_2),defined_63=_ms.get(_$1,"defined?"),_$2=_ms.getModule(methods_3),del_45sub_33=_ms.get(_$2,"del-sub!"),set_45sub_33=_ms.get(_$2,"set-sub!"),_$3=_ms.getModule(Kind_4),self_45kind_33=_ms.get(_$3,"self-kind!"),_$4=_ms.getModule(_64_5),empty_33=_ms.get(_$4,"empty!"),iterator=_ms.get(_$4,"iterator"),_64map=_ms.get(_$4,"@map"),_$5=_ms.getModule(_64_45Type_6),empty=_ms.get(_$5,"empty"),_$6=_ms.getModule(_63_7),_63None=_ms.get(_$6,"?None"),Opt_45_62_63=_ms.get(_$6,"Opt->?"),_63some=_ms.get(_$6,"?some"),Id_45Map=_ms.getDefaultExport(Id_45Map_8),Map=_ms.getDefaultExport(Map_9),_$7=_ms.getModule(Map_9),_63get=_ms.get(_$7,"?get"),Map_45Type=_ms.getDefaultExport(Map_45Type_10);
		let Hash_45Map=exports.default=(()=>{
			let _=class Hash_45Map{
				static [_ms.symbol(empty)](){
					let _this=this;
					return new (_this)(new (global.Map)())
				}
				constructor(val){
					let _this=this;
					_ms.checkContains(Id_45Map,val,"val");
					_ms.newProperty(this,"val",val)
				}
				*[_ms.symbol(iterator)](){
					let _this=this;
					for(let bucket of _this.val.values()){
						let cur=bucket;
						for(;;){
							if(! defined_63(cur)){
								break
							};
							(yield [cur.key,cur["val!"]]);
							cur=cur["next!"]
						}
					}
				}
				[_ms.symbol(_63get)](key){
					let _this=this;
					let bucket=_this.val.get(hash_45code(key));
					let entry=opt_45bucket_45entry(bucket,key);
					return _64map(Opt_45_62_63(entry),_=>{
						return _["val!"]
					})
				}
				[_ms.symbol(set_45sub_33)](key,val){
					let _this=this;
					let hash=hash_45code(key);
					let bucket=_this.val.get(hash);
					{
						let _=opt_45bucket_45entry(bucket,key);
						if(defined_63(_)){
							_["val!"]=val
						} else {
							_this.val.set(hash,new (Bucket)(key,val,bucket))
						}
					}
				}
				[_ms.symbol(del_45sub_33)](key){
					let _this=this;
					let hash=hash_45code(key);
					let bucket=_this.val.get(hash);
					return (()=>{
						let _=bucket;
						if(defined_63(_)){
							return (()=>{
								if(_61_63(_.key,key)){
									{
										let _=bucket["next!"];
										if(defined_63(_)){
											_this.val.set(key,_)
										} else {
											_this.val.delete(hash)
										}
									};
									return _63some(_["val!"])
								} else {
									let cur=bucket;
									return (()=>{
										for(;;){
											let next=cur["next!"];
											if(! defined_63(next)){
												return _63None
											};
											if(_61_63(next.key,key)){
												cur["next!"]=next["next!"];
												return _63some(next["val!"])
											};
											cur=next
										}
									})()
								}
							})()
						} else {
							return _63None
						}
					})()
				}
				[_ms.symbol(empty_33)](){
					let _this=this;
					_this.val.clear()
				}
			};
			_ms.kindDo(_,Map);
			self_45kind_33(_,Map_45Type);
			return _
		})();
		let Bucket=class Bucket{
			constructor(key,val_33,next_33){
				let _this=this;
				_ms.newProperty(this,"key",key);
				_ms.newProperty(_this,"val!",val_33);
				_ms.newProperty(_this,"next!",next_33)
			}
		};
		let opt_45bucket_45entry=function opt_45bucket_45entry(opt_45bucket,key){
			let cur=opt_45bucket;
			return (()=>{
				for(;;){
					if(! defined_63(cur)){
						return void 0
					};
					if(_61_63(cur.key,key)){
						return cur
					};
					cur=cur["next!"]
				}
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvSGFzaC1NYXAubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFpQkEsK0JBQWdCLEtBR2I7O3VCQUdEO1NBa0VDO1lBakVBLEtBaUVBLE9BakVVLEtBQUk7O0lBRU4sWUFBQTtTQStEUjt1QkEvRGE7OztpQkFHZjtTQTRERTtLQTNERyxRQUFBLFVBMkRILG1CQTFEMEI7TUFBMUIsUUFBTTtNQUVILE9BQUE7T0FBSyxLQUFBLFdBQVMsS0FDRztRQUFsQjtPQUFBO2NBQ0ssQ0FBQyxRQUFRO1dBQ1I7Ozs7Z0JBRVYsU0FBTTtTQW1ESjtLQWxERCxXQWtEQyxjQWxEa0IsWUFBVTtLQUM3QixVQUFRLHFCQUFpQixPQUFPO1lBRWhDLE9BQU0sYUFBTyxPQUFTO2FBQ3BCOzs7Z0JBRUgsZUFBVyxJQUFJO1NBNENiO0tBM0NELFNBQU8sWUFBVTtLQUNqQixXQTBDQyxjQTFDaUI7S0FDYjtNQUFBLE1BQUEscUJBQWlCLE9BQU87TUFDNUIsR0FBQSxXQUFTLEdBQ0E7T0FDUCxVQUFTO01BQUEsT0FFUDtPQW9DSixjQW5DVSxLQUFNLEtBQUksUUFBTyxJQUFJLElBQUk7TUFBQTtLQUFBO0lBQUE7Z0JBRXJDLGVBQVU7U0FpQ1I7S0FoQ0QsU0FBTyxZQUFVO0tBQ2pCLFdBK0JDLGNBL0JpQjtZQUNiO01BQUEsTUFBQTtNQUNKLEdBQUEsV0FBUyxHQUNBO2NBQ0o7UUFBSCxHQUFBLE9BQUksTUFBSyxLQUNHO1NBQU47VUFBTSxNQUFOO1VBQ0osR0FBQSxXQUFTLEdBQ0E7V0F3QmIsY0F4QmMsSUFBSztVQUFBLE9BRVg7V0FzQlIsaUJBdEJpQjtVQUFBO1NBQUE7Z0JBQ2QsUUFBTztlQUVKO1NBQUgsUUFBTTtnQkFFSDtpQkFBQTtXQUFGLFNBQU87V0FDQSxLQUFBLFdBQVMsTUFDSTtZQUFuQixPQUFNO1dBQUE7V0FDSixHQUFBLE9BQUcsU0FBUyxLQUNHO1lBQWpCLGFBQWE7WUFDYixPQUFNLFFBQU07O2VBQ047VUFBQTtTQUFBO1FBQUE7T0FBQTtNQUFBLE9BRVA7Y0FBSDtNQUFBO0tBQUE7SUFBQTtnQkFFSDtTQU9FO0tBQUE7OztnQkF4RWtCO0dBR25CLGVBQVksRUFBQzs7O0VBa0VkLFdBQ2M7R0FBSCxZQUFBLElBQUssT0FBSztRQUVuQjs7b0JBQUEsYUFEUTtvQkFDUixjQUFTO0dBQUE7RUFBQTtFQUlYLHlCQUFvQiw4QkFBQSxhQUFXO0dBQzlCLFFBQU07VUFFSDtXQUFBO0tBQUssS0FBQSxXQUFTLEtBQ0c7TUFBbEIsT0FBTTs7S0FDSixHQUFBLE9BQUcsUUFBUSxLQUNHO01BQWhCLE9BQU07S0FBQTtTQUNBIiwiZmlsZSI6ImF0L01hcC9IYXNoLU1hcC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
