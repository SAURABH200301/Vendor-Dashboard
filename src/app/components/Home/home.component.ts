import { Component } from "@angular/core";
import { VendorService } from "../../services/vendor.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public readonly vendorService: VendorService) { }
  ngOnInit() {
    this.vendorService.fetchVendorData();
  }
}