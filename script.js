//your JS code here. If required.
const student = {
	name : "John Doe"
}
Object.prototype.getKeys = function() {
    return Object.keys(this);
};
/*
Yes, Object.keys(this) is a function call in the context of the getKeys method you’ve defined. To clarify:

Object.keys is a built-in JavaScript function that takes an object as an argument and returns an array of that object's own enumerable property names (keys).
this refers to the object on which the getKeys method was called.
*/