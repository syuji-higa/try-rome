(function(res) {
	if (typeof module !== "undefined") {
		module.exports = res;
	}
	return res;
})(
(function(global) {
  'use strict';
  // demo-rome/src/name.ts
function ___R$demo$rome$src$name_ts$getName() {
		return "Higa";
	}


  // demo-rome/src/entry.ts
const ___R$demo$rome$src$entry_ts = {};
	const ___R$$priv$demo$rome$src$entry_ts$call = () => {
		return "Hello " + ___R$demo$rome$src$name_ts$getName() + " !";
	};

	console.log(___R$$priv$demo$rome$src$entry_ts$call());


  return ___R$demo$rome$src$entry_ts;
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this));
//# sourceMappingURL=entry.ts.map