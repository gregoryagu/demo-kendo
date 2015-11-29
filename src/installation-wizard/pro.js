import {inject} from 'aurelia-dependency-injection';
import {WizardConfig} from 'installation-wizard/wizard-config';

@inject(WizardConfig)
export class Pro {

  constructor(wizardConfig) {
    this.wizardConfig = wizardConfig;
  }

  activate() {
    this.wizardConfig.title = 'Kendo pro';
  }

  select(hasCredentials) {
    this.wizardConfig.hasCredentials = hasCredentials;
  }
}