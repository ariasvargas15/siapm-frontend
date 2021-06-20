import {Component, OnInit, ViewChild} from '@angular/core'
import {MatSort} from '@angular/material/sort'
import {MatPaginator} from '@angular/material/paginator'
import {MatTableDataSource} from '@angular/material/table'
import {Notifications} from '../../utils/notification'
import {Pensum} from '../../models/pensum'
import {PensumService} from '../../services/pensum.service'
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'

declare const $: any

@Component({
  selector: 'app-pensum-list',
  templateUrl: './pensum-list.component.html',
  styleUrls: ['./pensum-list.component.css']
})
export class PensumListComponent implements OnInit {

  @ViewChild('formAdd') ngAddForm: NgForm

  @ViewChild(MatSort) sort: MatSort

  @ViewChild(MatPaginator) paginator: MatPaginator

  newPensum: Pensum = new Pensum()
  pensums: Pensum[] = []
  dataSource: MatTableDataSource<Pensum>
  displayedColumns: string[] = ['code', 'career', 'active']

  addForm = new FormGroup({
    code: new FormControl('', [
      Validators.required,
    ]),
    career: new FormControl('', [
      Validators.required,
    ]),
  })


  constructor(private pensumService: PensumService) {
  }

  ngOnInit(): void {
    this.getPensums()
    this.initializeDataSource()
  }

  initializeDataSource() {
    this.dataSource = new MatTableDataSource<Pensum>(this.pensums)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  addPensum() {
    this.ngAddForm.reset()
    this.ngAddForm.resetForm()
    this.newPensum = new Pensum()
  }

  save() {
    if (this.addForm.valid) {
      console.log(this.newPensum)
      this.pensumService.createPensum(this.newPensum)
        .subscribe({
          next: data => {
            $('#add').modal('hide')
            this.pensums.push(data)
            this.initializeDataSource()
            Notifications.showNotification('Pensum creado correctamente', 'success')
          },
          error: error => {
            Notifications.showNotification('Este pensum ya existe', 'danger')
            console.log(error)
          }
        })
    }
  }

  private getPensums() {
    this.pensumService.getAllPensums()
      .subscribe({
        next: data => {
          this.pensums = data
          this.initializeDataSource()
        },
        error: error => {
          Notifications.showNotification(error.error, 'danger')
          console.log(error)
        }
      })
  }
}
