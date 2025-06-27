import { Injectable } from "@angular/core";
import { AppApiService } from "./app-api.service";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class VendorService {
    private vendorDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    private vendorColumnsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    vendorData$: Observable<any[]> = this.vendorDataSubject.asObservable();
    vendorColumns$: Observable<any[]> = this.vendorColumnsSubject.asObservable();

    isLoaderVisible: boolean = false;
    constructor(private apiService: AppApiService) { }
    public fetchVendorData() {
        this.isLoaderVisible = true;
        this.apiService.getVendorData().subscribe({
            next: (data) => {
                const gridData = data?.grid_data.map((item: any) => {
                    return {
                        ...item,
                        checked: false
                    }
                });
                this.vendorDataSubject.next(gridData || []);
                this.vendorColumnsSubject.next(data?.grid_columns || []);
                this.isLoaderVisible = false;
            },
            error: (error) => {
                this.isLoaderVisible = false;
                console.error("Error fetching vendor data", error);
            }
        })
    }

    getVendorData(): Observable<any[]> {
        return this.vendorData$;
    }
    getVendorColumns(): Observable<any[]> {
        return this.vendorColumns$;
    }

    deleteVendorColumnById(id: string): void {
        const currentData = this.vendorDataSubject.getValue();
        const updatedData = currentData.filter(col => col.id !== id);
        this.vendorDataSubject.next(updatedData);
    }

    editVendorDataById(id: string, updatedColumn: any): void {
        const currentColumns = this.vendorDataSubject.getValue();
        const updatedColumns = currentColumns.map(col =>
            col.id === id ? { ...col, ...updatedColumn } : col
        );
        this.vendorDataSubject.next(updatedColumns);
    }
}