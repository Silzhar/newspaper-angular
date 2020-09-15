import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { NewsGeneratorComponent } from './newspaper/news-generator/news-generator.component';
import { NewsViewerComponent } from './newspaper/news-viewer/news-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewspaperComponent,
    NewsGeneratorComponent,
    NewsViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
