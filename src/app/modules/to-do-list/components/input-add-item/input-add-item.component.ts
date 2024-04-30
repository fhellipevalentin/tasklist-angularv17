import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';

//Interfaces
import { IListItems } from '../../interface/IListItemsInterface';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;

  @Output() public outPutListItems = new EventEmitter<IListItems>()
  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges
      this.inputText.nativeElement.value = ''; // limpa o input

      const currentDate = new Date();
      const timesTamp = currentDate.getTime();
      const id = `ID ${timesTamp}`; // isso aqui é só pra criar um id qualquer

      this.outPutListItems.emit({
        id,
        checked: false,
        value
      })

      console.log({
        id,
        checked: false,
        value
      });
      return this.inputText.nativeElement.focus();
    }
  }
}
