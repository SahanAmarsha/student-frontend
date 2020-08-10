import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../services/student.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit{

  myForm: FormGroup;

  constructor(
    private studentService: StudentService
  ) { }

  // tslint:disable-next-line:typedef
  async onSubmit()
  {
    const newStudent =
      {
        idNum: this.myForm.value.id,
        name: this.myForm.value.name,
        science: this.myForm.value.science,
        maths: this.myForm.value.maths,
        english: this.myForm.value.english
      };

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

      try{
        await this.studentService.addStudent(newStudent).subscribe((res: any) => {
          if (!res.ok)
          {
            alert(res.message);
          } else
          {
            this.myForm.reset();
            alert(res.message);
          }

        });
      } catch (e) {
        alert(e);
      }

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
