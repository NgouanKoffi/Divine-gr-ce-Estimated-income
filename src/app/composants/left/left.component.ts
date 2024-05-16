import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent {
  propertyTypes = [
    { id: 'studio', name: 'Studio', price: 50 },
    { id: 'apartment', name: 'Apartment', price: 100 },
    { id: 'villa', name: 'Villa', price: 200 }
  ];

  bedroomsOptions: { id: string, name: string, price: number }[] = [];

  selectedPropertyType: string = '';
  selectedBedroom: string = '';

  @Output() formValidityChanged = new EventEmitter<boolean>();

  updateBedrooms(propertyType: string) {
    if (propertyType === 'studio') {
      this.bedroomsOptions = [{ id: '1', name: '1', price: 20 }];
    } else if (propertyType === 'apartment') {
      this.bedroomsOptions = Array.from({ length: 4 }, (_, i) => ({ id: `${i + 1}`, name: `${i + 1}`, price: (i + 1) * 25 }));
    } else if (propertyType === 'villa') {
      this.bedroomsOptions = Array.from({ length: 6 }, (_, i) => ({ id: `${i + 5}`, name: `${i + 5}`, price: (i + 5) * 30 }));
    } else {
      this.bedroomsOptions = [];
    }
  }

  constructor(
    private navigationService: NavigationService,
    private sharedDataService: SharedDataService
  ) {}

  validateForm(): boolean {
    const area = (document.getElementById('area') as HTMLSelectElement).value;
    const propertyType = this.selectedPropertyType;
    const bedroom = this.selectedBedroom;
    const checkinDate = (document.getElementById('checkin-date') as HTMLInputElement).value;
    const checkoutDate = (document.getElementById('checkout-date') as HTMLInputElement).value;

    let isValid = true;

    if (!area) {
      document.getElementById('area')?.classList.add('border-red-500');
      isValid = false;
    } else {
      document.getElementById('area')?.classList.remove('border-red-500');
    }

    if (!propertyType) {
      document.getElementById('property-type')?.classList.add('border-red-500');
      isValid = false;
    } else {
      document.getElementById('property-type')?.classList.remove('border-red-500');
    }

    if (!bedroom) {
      document.getElementById('bedrooms')?.classList.add('border-red-500');
      isValid = false;
    } else {
      document.getElementById('bedrooms')?.classList.remove('border-red-500');
    }

    if (!checkinDate) {
      document.getElementById('checkin-date')?.classList.add('border-red-500');
      isValid = false;
    } else {
      document.getElementById('checkin-date')?.classList.remove('border-red-500');
    }

    if (!checkoutDate) {
      document.getElementById('checkout-date')?.classList.add('border-red-500');
      isValid = false;
    } else {
      document.getElementById('checkout-date')?.classList.remove('border-red-500');
    }

    this.formValidityChanged.emit(isValid);
    return isValid;
  }

  calculateRevenue() {
    if (!this.validateForm()) {
      this.sharedDataService.estimatedRevenue = 0;
      return;
    }

    const areaPrice = parseInt((document.getElementById('area') as HTMLSelectElement).value, 10);
    const propertyType = this.propertyTypes.find(type => type.id === this.selectedPropertyType);
    const bedroom = this.bedroomsOptions.find(bed => bed.id === this.selectedBedroom);
    const checkinDate = new Date((document.getElementById('checkin-date') as HTMLInputElement).value);
    const checkoutDate = new Date((document.getElementById('checkout-date') as HTMLInputElement).value);
    const days = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 3600 * 24);

    if (propertyType && bedroom && !isNaN(days) && days > 0) {
      const total = (areaPrice + propertyType.price + bedroom.price) * days;
      this.sharedDataService.estimatedRevenue = total;
    } else {
      this.sharedDataService.estimatedRevenue = 0;
    }
  }

  goToRightComponent() {
    if (this.validateForm()) {
      this.navigationService.showRightComponent();
    }
  }
}
