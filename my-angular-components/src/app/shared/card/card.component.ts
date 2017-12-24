import { Component, OnInit, Inject } from '@angular/core';
import { AppAttributesService } from '../services/app-attributes.service';
import { Input } from '@angular/core';
import { User } from '../../../domain/entity/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user: User;

  constructor(
    private appAttributesService: AppAttributesService) { }

  ngOnInit() {
  }

  handleClick() {
    this.appAttributesService.setSelectedUser(this.user);
  }

  isSelected(): boolean {
    return this.appAttributesService.getSelectedUser() === this.user;
  }

}
