import { Injectable } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Injectable()
export class AppAttributesService {

  constructor() { }

  private selectedCard: CardComponent;

  getSelectedCard(): CardComponent {
    return this.selectedCard;
  }

  setSelectedCard(newCard: CardComponent) {
    this.selectedCard = newCard;
  }

}
