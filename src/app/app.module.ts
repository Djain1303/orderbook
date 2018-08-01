import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenderFilterColorDirective } from './directives/gender-filter-color.directive';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftPaneComponent,
    DashboardComponent,
    GenderFilterColorDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
