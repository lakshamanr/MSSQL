import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-object-type-item',
  templateUrl: './object-type-item.component.html'
})
export class ObjectTypeItemComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() count: number | undefined;
  @Input() visible: boolean = true;
}