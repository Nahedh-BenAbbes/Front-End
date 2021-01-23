import { Component, OnInit} from '@angular/core';
declare var $: any;
import {NgbDate, NgbCalendar,NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dar-Darek';
   //this is for the button show and hide more/less
   VoirPlus:boolean = true;
   visible:boolean = false;
 
   ChargerPlus:boolean=true;
   vis:boolean=false;

  show=true;

 //this is for the date in the bar 
   hoveredDate: NgbDate | null = null;
   fromDate: NgbDate | null;
   toDate: NgbDate | null;

   constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }


//this is logic function for the "voir plus" button show and hide content
onclick() {
  this.VoirPlus = !this.VoirPlus //not equal to condition
  this.visible = !this.visible
}

//this is logic function for the "voir plus" button show and hide content
charger() {
  this.ChargerPlus = !this.ChargerPlus //not equal to condition
  this.vis = !this.vis
}
 
toogleShow() {
  this.show = !this.show
}
registerShow() {
  this.show = !this.show
}

}



