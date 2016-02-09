import
	global setTimeout
	..Type.primitive Num

$sleep. \time-ms:Num
	new Promise !\resolve
		setTimeout resolve time-ms
