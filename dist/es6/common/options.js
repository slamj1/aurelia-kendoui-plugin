export function pruneOptions(options) {
	// Implicitly setting options to "undefined" for a kendo control can break things.
	// this function prunes the supplied options object and removes values that
	// aren't set to something explicit (i.e. not null)

  let returnOptions = {};

  for (let prop in options) {
    if (options.hasOwnProperty(prop) && options[prop] !== null) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}
