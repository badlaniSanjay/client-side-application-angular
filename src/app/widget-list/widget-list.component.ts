import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import WidgetService from '../services/WidgetService';


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: WidgetService) { }

  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  widgetId = '';
  widgets = []

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.courseId = this.route.snapshot.paramMap.get('cid');
      this.moduleId = this.route.snapshot.paramMap.get('mid');
      this.lessonId = this.route.snapshot.paramMap.get('lid');
      this.topicId = this.route.snapshot.paramMap.get('tid');

      if (this.courseId != null && this.moduleId != null && this.lessonId != null && this.topicId != null) {

        this.service.findAllWidgetsForTopic(this.topicId)
          .then(widgets => this.widgets = widgets);
      }

    });


  }

  selectWidget(widget: any) {
    this.widgetId = widget.id;
  }

}
