System.register("index", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "index";
  var Component,
      View,
      bootstrap,
      helloWorld;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      bootstrap = $__m.bootstrap;
    }],
    execute: function() {
      helloWorld = (function() {
        function helloWorld() {
          this.msg = "Hello World";
        }
        return ($traceurRuntime.createClass)(helloWorld, {}, {});
      }());
      Object.defineProperty(helloWorld, "annotations", {get: function() {
          return [new Component({selector: "hello-world"}), new View({templateUrl: "hello-world.html"})];
        }});
      bootstrap(helloWorld);
    }
  };
});
