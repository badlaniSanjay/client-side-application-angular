import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import ModuleService from "../services/ModuleService";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ModuleService) { }

  courseId = '';
  moduleId = '';
  modules = [];
  selectedModule = {};

  ngOnInit() {
    this.route.params.subscribe(
      params =>
      {
        this.courseId = this.route.snapshot.paramMap.get('cid');
        this.moduleId = this.route.snapshot.paramMap.get('mid');
        this.service.findAllModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);
      });
  }

  selectModule(module: any) {
    this.selectedModule = module;
    this.router.navigate([
      '/',
      'courses',
      this.courseId,
      'modules',
      module.id
    ]);
  }
}
