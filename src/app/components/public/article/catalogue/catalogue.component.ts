import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleVue } from 'src/app/interfaces/article-vue';
import { ArticlesService } from 'src/app/services/articles.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  cat: Article[] = [] //from api 
  s: Article[] = [] //pour le catalogue
  ss: ArticleVue[] = [] //pour les articles
  art: ArticleVue[] = [] //from api
  id: number[] = []
  parent = true
  parentId: any
  p: number = 1;
  totalRecords: number=0
  crumbs: string[] = []
  closeResult = '';
  first: number = 0;
  constructor(private ser: ArticlesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getParent();
  }

  getChild(id: number, pid: number) {
    this.parent = false
    //les fils qu'on va afficher
    this.s = this.cat.filter(item => item.parentId == id);
    let article = this.cat.filter(item => item.Id == id)
    let name = article[0].name
    this.crumbs.push(name)
    this.ss = this.art.filter(item => item.iN1 == id || item.iN2 == id || item.iN3 == id || item.iN4 == id);
    if (this.ss.length == 0)
      this.showInfo();
    this.id.push(pid)
    this.totalRecords = this.ss.length
  }

  OnClickPrevious() {
    this.parentId = this.id.pop()
    this.crumbs.pop()
    this.s = this.cat.filter(item => item.parentId == this.parentId);
    this.ss = this.art.filter(item => item.iN1 == this.parentId || item.iN2 == this.parentId || item.iN3 == this.parentId || item.iN4 == this.parentId)
    this.totalRecords= this.ss.length
    if (this.id.length == 0)
      this.getParent()
  }

  getParent() {
    this.ser.getCatalogue().subscribe(
      res => {
        this.cat = res;
        this.s = this.cat.filter(item => item.parentId == 0);
        this.parent = true
      },
      err => console.log(err)
    )
    this.ser.getAllArticles().subscribe(
      res => {
        this.art = res,
        this.ss = res,
        this.totalRecords = this.ss.length
      },
      err => console.log(err)
    )
  }

  showInfo() {
    this.toastr.error("Pas d'articles disponibles", 'Nous sommes désolés', {
      timeOut: 3000,
    });
  }

  onPageChange(event:any) {
    console.log(event.totalRecords)
}

  

}
