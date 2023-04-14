import { Component, } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CityNamesService } from 'src/app/srvices/citynames.service';


function prohibitedWordsValidator(prohibitedWords: RegExp): import("@angular/forms").ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = prohibitedWords.test(control.value);
    return forbidden ? {'prohibitedWords': {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent {

  cities: string[] = [];
  techIdeasForm;

  constructor(
    private cityNamesService: CityNamesService,
    private formBuilder: FormBuilder,) 
  {
    this.cities = this.cityNamesService.getcityNames();

    this.techIdeasForm = this.formBuilder.group({

      name: ["", Validators.compose([Validators.required, Validators.minLength(2), prohibitedWordsValidator(/tourist|nothing/gi), ])],
      age: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      city: ["", Validators.required],
      idea: ["", Validators.compose([Validators.required, Validators.minLength(100), prohibitedWordsValidator(/nothing/gi), ])],

    });
  }
  onSubmit() {
    console.log(this.techIdeasForm.value);
    this.techIdeasForm.reset();
  }

  get name() {
    return this.techIdeasForm.get('name');
  }

  get age() {
    return this.techIdeasForm.get('age');
  }

  get email() {
    return this.techIdeasForm.get('email');
  }

  get city() {
    return this.techIdeasForm.get('city');
  }

  get idea() {
    return this.techIdeasForm.get('idea');
  }

  

}
