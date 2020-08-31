function key(){
	var a =  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0
              , a = "x" == t ? e : 3 & e | 8;
            return a.toString(16)
        });
	var l = String.fromCharCode((a[0].charCodeAt() + a[0].charCodeAt()) % 10 + 99);

	return a += l;
}
