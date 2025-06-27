import { Component, Input, OnInit } from "@angular/core";
import Highcharts from 'highcharts';
import { ChartType, getChartOptions } from "../../../highChart.config";


@Component({
    selector: 'app-half-donut',
    standalone: false,
    // imports: [HighchartsChartModule],
    templateUrl: './half-donut.component.html',
    styleUrls: ['./half-donut.component.scss'],
})
export class HalfDonutChartComponent implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions!: Highcharts.Options;

    @Input() title: string = 'Default Chart';
    @Input() type: ChartType = 'bar';
    @Input() categories: string[] = [];
    @Input() series: Highcharts.SeriesOptionsType[] = [];
    @Input() plotOptions: Highcharts.PlotOptions = {}
    @Input() width: number = 500;
    @Input() height: string = '250vh';

    ngOnInit(): void {
        this.chartOptions = getChartOptions({
            type: this.type,
            title: this.title,
            categories: this.categories,
            series: this.series,
            height: this.height,
            plotOptions: this.plotOptions
        });
    }
}
