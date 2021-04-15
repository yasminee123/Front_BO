import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private Url = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  getCatalogue() {
    let data = this.http.get<any>(this.Url+'api/CatalogueVue/all');
    return data;
  }

  getAllArticles() {
    let data = this.http.get<any>(this.Url+'api/ArticleVue/distArt');
    return data;
  }

  getArticleDetails(id:string){
    let data = this.http.get<any>(this.Url+'api/ArticleVue/Articles/'+id)
    return data
  }
}

