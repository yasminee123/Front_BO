import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleVue } from 'src/app/interfaces/article-vue';
import { ArticlesService } from 'src/app/services/articles.service';


@Component({
  selector: 'app-fiche-article',
  templateUrl: './fiche-article.component.html',
  styleUrls: ['./fiche-article.component.scss']
})
export class FicheArticleComponent implements OnInit {
  Articles: ArticleVue[] = []
  CodeArticle: any
  Designation: any
  constructor(private route: ActivatedRoute, private ser: ArticlesService) { }

  ngOnInit(): void {
    let idArticle = this.route.snapshot.params.id

    this.ser.getArticleDetails(idArticle).subscribe(
      res => {
        this.Articles = res,
        this.CodeArticle=this.Articles[0].CodeArt
        this.Designation=this.Articles[0].Designation
      },
      err => console.log(err)
    )
  }

}
