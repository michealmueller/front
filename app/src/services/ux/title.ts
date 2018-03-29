import { Title } from '@angular/platform-browser';

export class MindsTitle {

  private counter: number;
  private sep = ' | ';
  private default_title = 'Planet Concourse Virtual Worlds | Economies In Service To Life | Purpose Driven Social Networking Hub | Social Challenges-Contests- Experiences- Events Community |' +
      ' lS.I.M.S-Social Impact Management Systems | |Contests | Cultural Touchstone | Social Shopping | Cash for Causes';
  private text: string = '';

  static _(title: Title) {
    return new MindsTitle(title);
  }

  constructor(public title: Title) { }

  setTitle(value: string) {
    let title;

    if (value) {
      title = [value, this.default_title].join(this.sep);
    } else {
      title = this.default_title;
    }
    this.text = title;
    this.applyTitle();
  }


  setCounter(value: number) {
    this.counter = value;
    this.applyTitle();

  }

  applyTitle() {
    if (this.counter) {
      this.title.setTitle(`(${this.counter}) ${this.text}`);
    } else {
      this.title.setTitle(this.text);
    }

  }

}
