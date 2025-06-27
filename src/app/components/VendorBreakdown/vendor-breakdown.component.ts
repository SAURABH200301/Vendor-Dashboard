import { Component } from "@angular/core";

@Component({
    selector: 'app-vendor-breakdown',
    standalone: false,
    templateUrl: './vendor-breakdown.component.html',
    styleUrls: ['./vendor-breakdown.component.scss'],
})
export class VendorBreakdownComponent {
    signupData: Highcharts.SeriesOptionsType[] = [
        {
            name: 'High Risk',
            type: 'column',
            data: [100, 100, 100, 150, 120, 180, 140, 200, 180, 220, 240, 160],
            stack: 'vendors',
            color: '#4682A9'
        },
        {
            name: 'Medium Risk',
            type: 'column',
            data: [50, 50, 50, 75, 60, 90, 70, 100, 90, 110, 120, 80],
            stack: 'vendors',
            color: '#749BC2'
        },
        {
            name: 'Low Risk',
            type: 'column',
            data: [25, 25, 25, 35, 30, 45, 50, 45, 55, 60, 65, 40],
            stack: 'vendors',
            color: '#91C8E4'
        }
    ]
    categories: string[] = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    plotOptions: Highcharts.PlotOptions = {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            pointWidth: 20,
            borderRadius: 3,
            borderWidth: 0,
            grouping: false
        },
    }
}