"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../../hash-code","./../../js","./../../polys","./../at","./../q","./Id-Map","./Map"],(exports,hash_45code_0,js_1,polys_2,_64_3,_63_4,Id_45Map_5,Map_6)=>{
	exports._get=_ms.lazy(()=>{
		let hash_45code=_ms.getDefaultExport(hash_45code_0),_$0=_ms.getModule(js_1),defined_63=_ms.get(_$0,"defined?"),_$1=_ms.getModule(polys_2),del_45sub_33=_ms.get(_$1,"del-sub!"),set_45sub_33=_ms.get(_$1,"set-sub!"),_$2=_ms.getModule(_64_3),empty=_ms.get(_$2,"empty"),empty_33=_ms.get(_$2,"empty!"),iterator=_ms.get(_$2,"iterator"),_64map=_ms.get(_$2,"@map"),_$3=_ms.getModule(_63_4),_63None=_ms.get(_$3,"?None"),Opt_45_62_63=_ms.get(_$3,"Opt->?"),_63some=_ms.get(_$3,"?some"),Id_45Map=_ms.getDefaultExport(Id_45Map_5),Map=_ms.getDefaultExport(Map_6),_$4=_ms.getModule(Map_6),_63get=_ms.get(_$4,"?get");
		let Hash_45Map=exports.default=(()=>{
			let _=class Hash_45Map{
				static [_ms.symbol(empty)](){
					let _this=this;
					return new (_this)(new (global.Map)())
				}
				constructor(val){
					let _this=this;
					_ms.checkInstance(Id_45Map,val,"val");
					this.val=val
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
								if(_ms.eq(_.key,key)){
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
											if(_ms.eq(next.key,key)){
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
			_ms.traitDo(_,Map);
			return _
		})();
		let Bucket=class Bucket{
			constructor(key,val_33,next_33){
				let _this=this;
				this.key=key;
				_this["val!"]=val_33;
				_this["next!"]=next_33
			}
		};
		let opt_45bucket_45entry=function opt_45bucket_45entry(opt_45bucket,key){
			let cur=opt_45bucket;
			return (()=>{
				for(;;){
					if(! defined_63(cur)){
						return void 0
					};
					if(_ms.eq(cur.key,key)){
						return cur
					};
					cur=cur["next!"]
				}
			})()
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvQC9NYXAvSGFzaC1NYXAubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFhQSwrQkFBZ0I7O0lBR2QsbUJBQUMsU0FDUTs7WUFBUixLQUFJLE9BQUssS0FBSTs7SUFFTCxZQUFBLElBQ1c7O3VCQUROOzs7SUFHZixhQUFDLFlBQ2E7O0tBQVQsUUFBQSxVQUFVLG1CQUNhO01BQTFCLFFBQU07TUFFSCxPQUFBO09BQUssS0FBQSxXQUFTLEtBQ0c7UUFBbEI7T0FBQTtjQUNLLENBQUMsUUFBUTtXQUNSOzs7O0lBRVYsWUFBQyxTQUFPLElBQ0c7O0tBQVYsV0FBUyxjQUFVLFlBQVU7S0FDN0IsVUFBUSxxQkFBaUIsT0FBTztZQUVoQyxPQUFNLGFBQU8sT0FBUSxHQUNDO2FBQXJCOzs7SUFFRixZQUFDLGVBQVksSUFBSSxJQUNHOztLQUFuQixTQUFPLFlBQVU7S0FDakIsV0FBUyxjQUFTO0tBQ2I7TUFBQSxNQUFBLHFCQUFpQixPQUFPO01BQzVCLEdBQUEsV0FBUyxHQUNBO09BQ1IsVUFBVTtNQUFBLE9BRVA7T0FDSCxjQUFTLEtBQUssS0FBSSxRQUFPLElBQUksSUFBSTtNQUFBO0tBQUE7SUFBQTtJQUVwQyxZQUFDLGVBQVcsSUFDRzs7S0FBZCxTQUFPLFlBQVU7S0FDakIsV0FBUyxjQUFTO1lBQ2I7TUFBQSxNQUFBO01BQ0osR0FBQSxXQUFTLEdBQ0E7Y0FDSjtRQUFILFVBQUcsTUFBTSxLQUNHO1NBQU47VUFBTSxNQUFOO1VBQ0osR0FBQSxXQUFTLEdBQ0E7V0FBUixjQUFTLElBQUk7VUFBQSxPQUVWO1dBQUgsaUJBQVk7VUFBQTtTQUFBO2dCQUNkLFFBQU07ZUFFSDtTQUFILFFBQU07Z0JBRUg7aUJBQUE7V0FBRixTQUFPO1dBQ0EsS0FBQSxXQUFTLE1BQ0k7WUFBbkIsT0FBTTtXQUFBO1dBQ0osVUFBRyxTQUFTLEtBQ0c7WUFBakIsYUFBYTtZQUNiLE9BQU0sUUFBTTs7ZUFDTjtVQUFBO1NBQUE7UUFBQTtPQUFBO01BQUEsT0FFUDtjQUFIO01BQUE7S0FBQTtJQUFBO0lBRUgsWUFBQyxZQUNVOztLQUFWOzs7aUJBL0RvQjs7O0VBa0VyQixXQUNjO0dBQUgsWUFBQSxJQUFLLE9BQUssUUFDSzs7O0lBQXhCLGNBQVM7SUFDVCxlQUFVO0dBQUE7RUFBQTtFQUlaLHlCQUFvQiw4QkFBQSxhQUFXLElBQ0c7R0FBakMsUUFBTTtVQUVIO1dBQUE7S0FBSyxLQUFBLFdBQVMsS0FDRztNQUFsQixPQUFNOztLQUNKLFVBQUcsUUFBUSxLQUNHO01BQWhCLE9BQU07S0FBQTtTQUNBIiwiZmlsZSI6ImF0L01hcC9IYXNoLU1hcC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
