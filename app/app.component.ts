import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html'
})

export class AppComponent{

	specialMessage: string;

	coolFunction(value: string){
		if(value){
			alert(value);
		}else{
			alert("no value passed");
		}
	}

	ngOnInit(){
		this.specialMessage = "This is a special message passed from component";
	}

};
