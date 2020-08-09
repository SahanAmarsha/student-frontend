import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit{

  myForm: FormGroup;

  // tslint:disable-next-line:typedef
  onSubmit()
  {
    if (this.myForm.value.science > 100 || this.myForm.value.science < 0)
    {
      alert('Please enter a valid mark for science');
    } else if (this.myForm.value.maths > 100 || this.myForm.value.maths < 0)
    {
      alert('Please enter a valid mark for mathematics');
    } else if (this.myForm.value.english > 100 || this.myForm.value.english < 0)
    {
      alert('Please enter a valid mark for english');
    } else
    {
      console.log('Student created Successful');
      this.myForm.reset();
    }

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.myForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      science: new FormControl(null, Validators.required),
      maths: new FormControl(null, Validators.required),
      english: new FormControl(null, Validators.required)
    });
  }



}
