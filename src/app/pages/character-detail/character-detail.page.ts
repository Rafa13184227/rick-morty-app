import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from 'src/app/services/rick-morty';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonBackButton,
  IonButtons, IonThumbnail
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonBackButton,
    IonButtons, IonThumbnail
  ]
})
export class CharacterDetailPage implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private rmService: RickMortyService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.rmService.getCharacterDetails(Number(id)).subscribe(data => {
      this.character = data;
    });
  }
}
