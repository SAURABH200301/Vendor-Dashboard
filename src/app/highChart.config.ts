import * as Highcharts from 'highcharts';

export type ChartType = 'line' | 'column' | 'pie' | 'bar' | 'area';

export interface ChartInput {
  type: ChartType;
  width?: string|number;
  height?: string |number;
  title?: string;
  categories?: string[];
  series: Highcharts.SeriesOptionsType[];
  plotOptions?: Highcharts.PlotOptions;
}

export function getChartOptions(config: ChartInput): Highcharts.Options {
  return {
    chart: {
      type: config.type,
      height: config.height || '200vh',
    },
    title: {
      text: config.title || 'Untitled Chart',
    },
    xAxis: {
      categories: config.categories || [],
      title: { text: null },
    },
    yAxis: {
      title: { text: 'Security Rating' },
    },
    plotOptions: config.plotOptions,
    series: config.series,
    credits: { enabled: false },
    legend: { enabled: true },
  };
}
