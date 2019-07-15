import {Injectable} from '@angular/core';

@Injectable()
export default class ModuleService {

  server = 'http://localhost:8080';

  findAllModulesForCourse = (courseId) =>
    fetch(this.server + '/api/courses/' + courseId + '/modules')
      .then(response => response.json());

  findAllModules = () =>
    fetch(this.server + '/api/modules')
      .then(response => response.json());

  findModuleById = (moduleId) =>  fetch(this.server + '/api/modules/' + moduleId)
    .then(response => response.json());
}
