import { Component } from '@angular/core';
import { OpenAIService } from './services/open-aiservice.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>La mia applicazione Angular</h1>
    <button (click)="verifyArticle()">Verifica articolo</button>
  `
})
export class AppComponent {
  constructor(private openAIService: OpenAIService) { }

  verifyArticle() {
    const articleUrl = 'https://www.repubblica.it/cronaca/2023/05/19/news/inondazione_emilia_romagna_ambiente_governo_otto_miliardi_non_spesi-400737466/'; // Aggiorna con l'URL dell'articolo che desideri verificare

    this.openAIService.verifyArticle(articleUrl).subscribe(
      response => {
        console.log(response);
        // Elabora la risposta qui e mostra i risultati all'utente
      },
      error => {
        console.error(error);
      }
    );
  }
}