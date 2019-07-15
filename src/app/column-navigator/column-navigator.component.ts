import { Component, OnInit } from '@angular/core';
import CourseService from '../services/CourseService';

@Component({
  selector: 'app-column-navigator',
  templateUrl: './column-navigator.component.html',
  styleUrls: ['./column-navigator.component.css']
})
export class ColumnNavigatorComponent implements OnInit {

  constructor(private service: CourseService) { }

  courses = []
  selectedCourse = {
    modules: []
  }
  selectedModule = {
    lessons: []
  }
  selectedLesson = {
    topics : []
  }
  selectedTopic = {
    widgets :[]
  }
  selectedWidget = {
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses)
  }

  selectCourse = course =>
    this.selectedCourse = course

  selecteModule = module =>
    this.selectedModule = module

  selectLesson = lesson =>
    this.selectedLesson = lesson

  selectTopic = topic =>
    this.selectedTopic = topic

  selectWidget = widget =>
    this.selectedWidget = widget

}
