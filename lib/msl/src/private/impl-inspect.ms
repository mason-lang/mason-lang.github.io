import
	global JSON
	..@.Set.Id-Set
	..Object @properties @all-properties
	..String indent
	..to-string inspect
	..Type.Poly impl!
	..Type.Type =>

todo impl*!
impl! inspect Object .\
	switch .toString
		Object.prototype.toString
			@props = @all-properties this
			enumerable-props = => Id-Set (@properties this)
			s = "#(.constructor.name)"
			for @props
				s := "#s\n\t#(indent (inspect-property this _ :enumerable-props))"
			s
		else
			.toString()

inspect-property = \obj key enumerable?
	desc = Object.getOwnPropertyDescriptor obj key

	prop-name = cond enumerable? key "[#(key.toString())]"

	str = case
		and desc.get desc.set
			"[Getter/Setter]"
		desc.get
			"[Getter]"
		desc.set
			"[Setter]"
		else
			inspect desc.value

	"#prop-name. #str"

inspect-primitive = .\
	cond this:Object "[#(.constructor.name) #this]" "#this"

impl! inspect Boolean inspect-primitive
impl! inspect Number inspect-primitive
impl! inspect String .\
	str = JSON.stringify this
	cond this:Object "[String #str]" str
impl! inspect Symbol .\
	cond this:Object "[Symbol #(inspect .valueOf())]" .toString()
