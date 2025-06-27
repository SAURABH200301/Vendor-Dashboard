import { Component } from "@angular/core";
import { CardComponent } from "../Card/card.component";
import { HalfDonutChartComponent } from "../Charts/HalfDonut/half-donut.component";



@Component({
    selector: 'app-vendor-monitor',
    standalone: false,
    // imports: [CardComponent, HalfDonutChartComponent],
    templateUrl: './vendor-monitor.component.html',
    styleUrls: ['./vendor-monitor.component.scss'],
})
export class VendorMonitorComponent {
    signupData: Highcharts.SeriesOptionsType[] = [
        {
            type: 'pie',
            name: 'Vendors Monitored',
            data: [
                { name: '', y: 80, color: '#B3C5F9' },
                { name: '', y: 20, color: '#365CF5' },
            ],
        },
    ]
    plotOptions: Highcharts.PlotOptions = {
        pie: {
            innerSize: '60%',         
            startAngle: -90,         
            endAngle: 90,             
            center: ['50%', '75%'],   
            size: '100%',
            dataLabels: {
                enabled: true,
                distance: 20,
                format: '{point.name}: {point.y}%',
            },
        },
    }
}