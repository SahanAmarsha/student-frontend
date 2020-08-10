import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './display-student.component.html'
})
export class DisplayStudentComponent implements OnInit{
  studentsList = [];

  ngOnInit(): void {
    this.getAllStudents();
  }

  constructor(
    private studentService: StudentService
  ) {
  }


  // tslint:disable-next-line:typedef
   getAllStudents() {
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
}
