import { Component, OnInit } from '@angular/core';
import CourseService from "../services/CourseService";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseService) { }

  courses = []

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}


