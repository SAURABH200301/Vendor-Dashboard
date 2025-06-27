import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { VendorService } from "../../services/vendor.service";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnChanges {
    @Input() title: string = 'Modal Title';
    @Input() isVisible: boolean = false;
    @Input() modalContent: any = {};

    @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();


    editForm!: FormGroup;
    constructor(private fb: FormBuilder,private vendorService: VendorService) { }

    ngOnInit() {
        this.editForm = this.fb.group({
            id: [''],
            first_name: [''],
            last_name: [''],
            handle: [''],
            status: [''],
            email: [''],
            role: [''],
            license_used: [''],
            teams: [[]]
        });
    }
    ngOnChanges(changes: SimpleChanges): void {
        const { isVisible } = changes;
        if (isVisible && isVisible.currentValue) {
            this.openModal();
        } else if (isVisible && !isVisible.currentValue) {
            this.closeModal();
        }
    }

    openModal() {
        const data = this.modalContent;
        this.editForm.patchValue({
            id: data.id,
            first_name: data.name?.first_name,
            last_name: data.name?.last_name,
            handle: data.name?.handle,
            status: data.status,
            email: data.email,
            role: data.role,
            license_used: data.license_used,
            teams: data.teams || []
        });
        this.isVisible = true;
    }

    closeModal() {
        this.isVisible = false;
        this.close.emit(false);
        this.editForm.reset();
    }
    updateData(){
        this.vendorService.editVendorDataById(this.editForm.value.id,this.editForm.value)
        this.closeModal()
    }
}