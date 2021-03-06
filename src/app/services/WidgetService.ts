import {Injectable} from '@angular/core';

@Injectable()
export default class WidgetService {

  // server = 'http://localhost:8080';
  server  = 'https://fierce-sea-47240.herokuapp.com';

  findAllWidgetsForTopic = topicId =>
    fetch(this.server + '/api/topics/'+ topicId + '/widgets')
      .then(response => response.json());

  findAllWidgets = () =>
    fetch(this.server + '/api/widgets')
      .then(response => response.json());

  findWidgetById = (widgetId) =>  fetch(this.server + '/api/widgets/' + widgetId)
    .then(response => response.json());
}
