import {Component, View, bootstrap} from "angular2/angular2";

@Component({
  selector: "hello-world"
})

@View({
  templateUrl: "hello-world.html"
})

class helloWorld {

  constructor() {
    this.msg = "Hello World"
  }

}

bootstrap(helloWorld);
