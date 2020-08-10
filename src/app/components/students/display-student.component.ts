import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './display-student.component.html'
})
export class DisplayStudentComponent implements OnInit{
  studentsList = [];
  isClicked = false;
  ngOnInit(): void {
    this.studentsList = [];
    this.isClicked = false;
    this.getAllStudents();
  }

  constructor(
    private studentService: StudentService
  ) {
  }


  getAllStudents(): void{
    try{
      this.studentService.getStudents().subscribe((res: any) => {
        // console.log('My response');
        // console.log(res);
        const students = res.students;
        const marks = res.marksForStudents;
        console.log(students.length);

        let studentName;
        let science;
        let english;
        let maths;
        let newMarks;
        let studentId;
        for (const student of students)
        {
          studentName = student.name;
          studentId = student.idNum;
          newMarks = marks.filter(mark => mark.studentId === studentId);
          science = newMarks.filter(mark => mark.subjectId === 's001')[0].mark;
          console.log(science);
          english = newMarks.filter(mark => mark.subjectId === 's002')[0].mark;
          maths = newMarks.filter(mark => mark.subjectId === 's003')[0].mark;
          this.studentsList.push({studentName, studentId, science, english, maths});
        }
        console.log(this.studentsList);
      });

    } catch (e) {
      alert('An Error Occured!');
    }


  }

  filter(): void {
    const newStudentList = [];
    if ( !this.isClicked )
    {
      let total = 0;
      for (const student of this.studentsList)
      {
        total = student.english + student.maths + student.science;
        console.log(student.english + '+' + student.maths + '+' + student.science + '+' + total);
        if (total > 250)
        {
          newStudentList.push(student);
        }
        total = 0;
      }
      if (newStudentList.length > 0)
      {
        this.studentsList = newStudentList;
      }
      this.isClicked = true;
    } else
    {
      this.ngOnInit();
    }

  }
}
