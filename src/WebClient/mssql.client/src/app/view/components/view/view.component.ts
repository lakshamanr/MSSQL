import { Component, OnInit } from '@angular/core';
import { ViewDetails, ViewMetaData } from '../../model/view.model';
import { ViewService } from '../../service/services/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 
  public selectedViewMetaData: ViewMetaData | null = null; 
  selectedViewName: string = 'HumanResources.vEmployee';
  iblnShowEditBox: boolean;
  editedDescription: string = '';  // Local copy for editing
  constructor(private viewService: ViewService) {}

  ngOnInit(): void {
    this.loadViewMetaData(this.selectedViewName)
   } 
     loadViewMetaData(viewName: string): void {
      this.viewService.getViewMetaData(viewName).subscribe((data) => {
        this.selectedViewMetaData = data; 
    });
  }
  /**
  * Enables edit mode and creates a local copy of the description.
  */
  EditView(event: Event): void {
    event.preventDefault();
    if (this.selectedViewMetaData.viewDetails.length) {
      this.editedDescription = this.selectedViewMetaData.viewDetails[0].viewExtendedProperties;
      this.iblnShowEditBox = true;
    }
  }

  /**
   * Cancels editing without modifying the original value.
   */
  CancelViewMsDesciption(event: Event): void {
    event.preventDefault();
    this.iblnShowEditBox = false;
  }

  /**
   * Saves the modified description and updates the backend.
   */
  SaveViewMsDesciption(event: Event): void {
    event.preventDefault();
    if (this.selectedViewMetaData.viewDetails.length) {
      const updatedDescription = this.editedDescription;

      // Call API to save the new description
      this.viewService.updateViewDescription(this.selectedViewName, updatedDescription).subscribe(
        () => {
          console.log('Description updated successfully');

          // Update the original data
          this.selectedViewMetaData!.viewDetails[0].viewExtendedProperties = updatedDescription;

          // Hide edit box
          this.iblnShowEditBox = false;
        },
        (error) => {
          console.error('Error updating description:', error);
        }
      );
    }
  }

}
