import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import LessonService from "../services/LessonService";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: LessonService) { }

  courseId = '';
  moduleId = '';
  lessonId = '';
  lessons = []

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.courseId = this.route.snapshot.paramMap.get('cid');
      this.moduleId = this.route.snapshot.paramMap.get('mid');
      this.lessonId = this.route.snapshot.paramMap.get('lid');

      if (this.courseId != null && this.moduleId != null) {

        this.service.findAllLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }

      });


  }

  selectLesson(lesson: any) {
    this.lessonId = lesson.id;
    this.router.navigate([
      '/',
      'courses',
      this.courseId,
      'modules',
      this.moduleId,
      'lessons',
      this.lessonId
    ]);
  }
}
