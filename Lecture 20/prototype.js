//** Prottypal Inheritance */

var parent = {
    value: "parentValue",
    obj: {
        objValue: "parentObjectValue"
    },
    walk: function(){
        console.log("walking!");
    }
};

var child = Object.create(parent);

console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("***CHANGED: child.value: 'childValue'");
console.log("***CHANGED: child.obj.objValue: 'child.obj.objValue'");
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

console.log("child.obj === parent.obj ?", child.obj === parent.obj);

var grandChild = Object.create(child);
console.log("Grandchild: ", grandChild);
grandChild.walk();
console.log("Grandchild value: ", grandChild.value);
