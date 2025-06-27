import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { VendorService } from "../../services/vendor.service";
import { GridColumn, GridData } from "../../model/vendorData.model";

@Component({
    selector: "app-team-members-list",
    templateUrl: "./team-members-list.component.html",
    styleUrls: ["./team-members-list.component.scss"],
    standalone: false,
})
export class TeamMembersListComponent implements OnInit {

    public gridHeaders: GridColumn[] = [];
    public tableData: GridData[] = [];
    public teamMembersListLength: number = 0;
    public isModalVisible: boolean = false;
    public modalTitle: string = '';
    public modalContent: any = {};
    checked: boolean = false;

    checkedRows: number[] = []; // Array of checked row IDs
    allChecked: boolean = false;

    constructor(public readonly vendorService: VendorService, private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.vendorService.getVendorColumns().subscribe((columns: GridColumn[]) => {
            this.gridHeaders = columns;
        });
        this.vendorService.getVendorData().subscribe((data: GridData[]) => {
            this.tableData = data;
            this.teamMembersListLength = data.length;
        });
    }
    trackByColumnKey(index: number, header: any) {
        return header.column_key;
    }
    trackByMemberId(index: number, member: any) {
        return member.id;
    }
    onDeleteMember = (id: string) => {
        this.vendorService.deleteVendorColumnById(id)
    }
    onEditMember = (row: any) => {
        this.isModalVisible = true;
        this.modalTitle = 'Edit Member';
        this.modalContent = row;
    }
    onCloseModal = () => {
        this.isModalVisible = false;
        this.modalTitle = '';
        this.modalContent = {};
    }
    isRowChecked(row: any): boolean {
        return row.checked;
    }

    toggleAllRows(event: any): void {
        this.allChecked = event.checked;
        if (this.allChecked) {
            this.tableData.forEach((row: any) => {
                row.checked = true;
            });
        } else {
            this.tableData.forEach((row: any) => {
                row.checked = false;
            });
        }
    }

    private updateAllCheckedState(): void {
        if (this.tableData.every(row => row.checked)) {
            this.allChecked = true;
        } else {
            this.allChecked = false;
        }
    }
}