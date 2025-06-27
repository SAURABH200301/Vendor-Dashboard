import { Component, Input } from '@angular/core';
import Highcharts from 'highcharts';
import { ChartType, getChartOptions } from '../../../highChart.config';

@Component({
    selector: 'app-bar-chart',
    standalone: false,
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions!: Highcharts.Options;

    @Input() title: string = 'Default Bar Chart';
    @Input() type: ChartType = 'bar';
    @Input() categories: string[] = [];
    @Input() series: Highcharts.SeriesOptionsType[] = [];
    @Input() plotOptions: Highcharts.PlotOptions = {}
    @Input() width: number = 500;
    @Input() height: string = '300vh';

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
