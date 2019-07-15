import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import TopicService from '../services/TopicService';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: TopicService) { }

  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  topics = []

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.courseId = this.route.snapshot.paramMap.get('cid');
      this.moduleId = this.route.snapshot.paramMap.get('mid');
      this.lessonId = this.route.snapshot.paramMap.get('lid');

      if (this.courseId != null && this.moduleId != null && this.lessonId != null) {

        this.service.findAllTopicsForLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }

    });


  }

  selectTopic(topic: any) {
    this.topicId = topic.id;
    this.router.navigate([
      '/',
      'courses',
      this.courseId,
      'modules',
      this.moduleId,
      'lessons',
      this.lessonId,
      'topics',
      this.topicId
    ]);
  }

}


