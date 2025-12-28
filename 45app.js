// Prototype in js
/** A jacascript object is an entity having state & behavior(properties and method).
 * JS objects jave a special property called prototype.
 * We can set prototype using _ _proto _ _
 */

const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary:50000,
};

const gautam = {
    salary: 45000,
};

karanArjun.__proto__ = employee;
gautam.__proto__= employee;