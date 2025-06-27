import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";


@Component({
    selector:'app-loader',
     templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
})

export class LoaderComponent implements OnChanges{
    @Input() loaderVisible: boolean=false;
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes["loaderVisible"])
    }
}