import {Component, OnInit, ViewChild} from '@angular/core'
import {MatTableDataSource} from '@angular/material/table'
import {Request} from '../../models/request'
import {FilesService} from '../../services/files.service'
import {Notifications} from '../../utils/notification'
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'
import {RequestService} from '../../services/request.service'
import {Router} from '@angular/router'

declare const $: any

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort

  @ViewChild(MatPaginator) paginator: MatPaginator

  request: Request
  requests: Request[] = []
  dataSource: MatTableDataSource<Request>
  displayedColumns: string[] = ['document', 'name', 'surname', 'email', 'code', 'certificate', 'receipt', 'status']

  constructor(
    private filesService: FilesService,
    private requestService: RequestService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getRequests()
    this.initializeDataSource()
  }

  initializeDataSource() {
    this.dataSource = new MatTableDataSource<Request>(this.requests)
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

  downloadFile(fileName: string) {
    this.filesService.getRequestFile(fileName)
      .subscribe({
          next: data => {
            const downloadURL = window.URL.createObjectURL(data)
            const link = document.createElement('a')
            link.href = downloadURL
            link.download = fileName
            link.click()
          },
          error: error => {
            Notifications.showNotification('Lo sentimos ha ocurrido un error obteniendo el archivo, probablemente esta corrupto', 'danger')
            console.log(error)
          }
        }
      )
  }

  seeModal(row: Request) {
    if (row.status === 'PENDIENTE') {
      $('#status').modal('show')
      this.request = row
    }
  }

  denyRequest() {
    this.requestService.denyRequest(this.request.document)
      .subscribe({
        next: data => {
          $('#status').modal('hide')
          this.requests.find(value => value === this.request).status = 'RECHAZADO'
          this.initializeDataSource()
          Notifications.showNotification('Solicitud rechazada', 'info')
        },
        error: error => {
          Notifications.showNotification('Ha ocurrido un error, intente nuevamente', 'danger')
          console.log(error)
        }
      })
  }

  beginReport() {
    $('#status').modal('hide')
    this.router.navigate(['/report', {id: this.request.document, name: this.request.name}]).then()
  }

  private getRequests() {
    this.requestService.getAllRequests()
      .subscribe({
        next: data => {
          this.requests = data
          this.initializeDataSource()
        },
        error: error => {
          Notifications.showNotification(error.error, 'danger')
          console.log(error)
        }
      })
  }
}
