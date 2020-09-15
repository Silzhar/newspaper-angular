import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../newspaper.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-news-generator',
  templateUrl: './news-generator.component.html',
  styleUrls: ['./news-generator.component.scss']
})
export class NewsGeneratorComponent implements OnInit {
  @Output() articleCreated: EventEmitter<Article> = new EventEmitter<Article>();

  public createArticleFormGroup: FormGroup = null;

  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    // AYUDITA
    this.createArticleFormGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(20)]],
      author: ['', [Validators.required, Validators.maxLength(20)]],
      url: ['', [Validators.required, Validators.maxLength(100)]],
      text: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
    });
  }

  public ngOnInit(): void {

  }

  public onUserTryToSubmit() {
    // El usuario ha pulsado en enviar
    this.submitted = true;

    if (this.createArticleFormGroup.valid) {
      // Creamos un artículo y lo emitimos
      const article: Article = {
        id: null, // Los ids son consecutivos, deberá asignarselos el padre
        title: this.createArticleFormGroup.get('title').value,
        author: this.createArticleFormGroup.get('author').value,
        url: this.createArticleFormGroup.get('url').value,
        text: this.createArticleFormGroup.get('text').value,
      };
      this.articleCreated.emit(article);

      // Reseteamos todos los campos y el indicador de envío
      this.createArticleFormGroup.reset();
      this.submitted = false;
    } else {
      console.log('Contiene errores :(');
    }
  }
}
