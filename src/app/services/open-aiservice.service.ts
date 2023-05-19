import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  private apiUrl = 'https://api.openai.com'; // Aggiorna con l'URL corretto dell'API di OpenAI GPT-3
  private apiKey = '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'; 

  constructor(private http: HttpClient) { }

  verifyArticle(url: string): Observable<any> {
    const prompt = `Verifica se l'articolo all'URL ${url} è vero o falso.`;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };

    const body = {
      'prompt': prompt,
      'max_tokens': 1
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}