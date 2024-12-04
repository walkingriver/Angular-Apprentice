import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(
    routerState: RouterStateSnapshot
  ) {
    const title = this.buildTitle(routerState);

    if (title) {
      console.log(title);
      this.title.setTitle(`A10Dance | ${title}`);
    } else {
      console.log('Title not set');
      this.title.setTitle('A10Dance');
    }
  }
}
