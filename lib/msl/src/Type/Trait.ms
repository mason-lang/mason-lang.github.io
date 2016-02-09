import
	..js defined? exists?
	..private.bootstrap implContains msDef
	.Poly propagate-method-down! propagate-static-down!

Trait. class
	todo doc

	do
		todo contains? \_ ...
		implContains _ .\_
			|| Cast to Boolean so we return `false` and not `undefined`.
			and exists?_ (Boolean _.(.symbol-for-isa))

	construct params
		todo :Str
		.name := params.name
		todo :Array[Trait]
		.super-traits := []

		todo :Array[Impl-Type]
		.implementors:Array := case params.implementors
			defined?_
				|| Frozen implementors signals that this is a closed Trait.
				Object.freeze_
			else
				[]

		.symbol-for-isa := Symbol "isa-#(.name)"
		.prototype := Object.create null

		Object.defineProperty .prototype .symbol-for-isa
			{value. true writable. false enumerable. false configurable. false}

		for .implementors
			on-implementor! _ this
		if defined? params.super-traits
			for params.super-traits
				unchecked-trait! this _

can-subtype?. \_:Trait
	| Whether a Trait accepts new subtypes.
	not Object.isFrozen _.implementors

|| Making something an instance of Impl-Type is difficult because trait! checks that it's already an Impl-Type...
unchecked-trait!. !\implementor trt
	| trait! without any checks.
	| Necessary if trying to implement Impl-Type itself.
	trt.implementors.push implementor
	on-implementor! implementor trt

@concrete-implementors. \trt:Trait
	| List of Impl-Types inheriting from this.
	| Does not include inheriting Traits, but does include their implementors.
	todo return :@[Impl-Type]
	todo @for~
	@for trt.implementors
		case
			:Trait
				... @concrete-implementors_
			else
				. _

msDef 'trait \-name super-traits static-methods methods
	todo SYNTAX with new Trait (name. -name super-traits.)
	trt = new Trait
		name. -name
		super-traits.
	with trt
		assign-defs! _ static-methods
		assign-defs! _.prototype methods

trait-do! = !\implementor trt:Trait
	todo Assert no circular chains of trait!.
	todo implementor:Impl-Type
	assert can-subtype? trt throw "#trt is not open to new subtypes."
	forbid has-trait? implementor trt
	unchecked-trait! implementor trt

msDef 'traitDo trait-do!

msDef 'traitWithDefs !\implementor trt:Trait static-methods methods
	trait-do! implementor trt
	assign-defs! implementor static-methods
	assign-defs! implementor.prototype methods

has-trait?. \implementor trt:Trait
	| Whether one Impl-Type is a subtype of a Trait.
	| implementor may itself be a Trait.
	todo implementor:Impl-Type
	case implementor
		:Trait
			_.super-traits.some \super-trait
				or (=? super-trait trt) (has-trait? super-trait trt)
		else
			implementor.prototype:trt

region Private
	@p-all = &(Object.getOwnPropertyNames_.concat Object.getOwnPropertySymbols_)

	on-implementor! = !\_ trt
		if :Trait
			_.super-traits.push trt
		inherit-methods! _ trt

	inherit-methods! = !\implementor trt
		rec! = !\trt
			for @p-all trt.prototype
				propagate-method-down! implementor _ trt.prototype.(_)
			|| Do not take non-enumerable properties from the trait.
			for Object.keys trt
				todo Better way to ignore these properties? Make them non-enumerable?
				switch _
					'name 'super-traits 'implementors 'symbol-for-isa 'prototype
						pass
					else
						propagate-static-down! implementor _ trt.(_)
			|| Do take symbols...
			todo neater (++)
			for Object.getOwnPropertySymbols trt
				propagate-static-down! implementor _ trt.(_)
			for trt.super-traits
				rec! _
		rec! trt

	assign-defs! = !\assignee definitions
		| Copy properties from definitions to assignee, *not* calling getters.
		def! = !\_
			Object.defineProperty assignee _ (Object.getOwnPropertyDescriptor definitions _)
		for Object.getOwnPropertyNames definitions
			def! _
		for Object.getOwnPropertySymbols definitions
			def! _
