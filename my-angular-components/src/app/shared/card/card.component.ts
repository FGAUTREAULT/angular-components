import { Component, OnInit } from '@angular/core';
import { AppAttributesService } from '../services/app-attributes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private appAttributesService: AppAttributesService) { }

  ngOnInit() {
  }

  handleClick() {
    this.appAttributesService.setSelectedCard(this);
  }

  isSelected(): boolean {
    return this.appAttributesService.getSelectedCard() === this;
  }

}
