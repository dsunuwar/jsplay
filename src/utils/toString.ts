/**
 * use this function as default toString callback function
 * @param item - should not be an object
 */
export function defaultToString(item) {
	if (item === null) {
		return 'NULL';
	} else if (item === undefined) {
		return 'UNDEFINED';
	} else if (typeof item === 'string' || item instanceof String) {
		return `${item}`;
	}
	return item.toString();
}
