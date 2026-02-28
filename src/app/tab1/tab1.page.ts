import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RickMortyService } from '../services/rick-morty';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonInfiniteScroll, IonInfiniteScrollContent
  ]
})
export class Tab1Page implements OnInit {
  characters: any[] = [];
  currentPage = 1;
  filteredCharacters: any[] = [];

  constructor(private rmService: RickMortyService) { }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(event?: any) {
    this.rmService.getCharacters(this.currentPage).subscribe(res => {
      this.characters.push(...res.results);
      this.filteredCharacters = [...this.characters];
      if (event) event.target.complete();
    });
  }

  loadMore(event: any) {
    this.currentPage++;
    this.loadCharacters(event);
  }
  search(event: any) {
    const query = event.detail.value.toLowerCase();
    if (query === '') {
      this.filteredCharacters = [...this.characters];
    } else {
      this.filteredCharacters = this.characters.filter(c =>
        c.name.toLowerCase().includes(query)
      );
    }
  }
}





