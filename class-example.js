/**
 * Class and inheritance
 */

 class Mesh {
     constructor(geometry) {
         this.geometry = geometry
     }
     update(y = 12) {
         console.log(y);
     }
 }

 class SkinnedMesh extends Mesh {
     constructor(geometry, materials) {
         super(geometry, materials);
         this.idMatrix = SkinnedMesh.defaultMatrix();
         this.bones = [];
         this.boneMatrices = [];
     }

     update(x) {
         super.update(x)
     }
     static defaultMatrix() {
         return 3;
     }
 }

 // Classes can be either defined in a Statement or an Expression
var c = class C {};

// The class to be extended can also be an Expression
var d = class D extends (class E {}) {};

var mesh = new SkinnedMesh('any', 'any');
mesh.update(10);
