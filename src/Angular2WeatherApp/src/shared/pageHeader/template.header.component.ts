import {Component, Input} from '@angular/core';

import {Constants} from '../index';

@Component({
    selector: 'weather-header',
    templateUrl: Constants.TEMPLATE_SHARED + 'pageHeader/template.header.component.html',
    styleUrls: [Constants.TEMPLATE_SHARED + 'pageHeader/template.header.component.css']

})
export class TemplateHeaderComponent {
 
}