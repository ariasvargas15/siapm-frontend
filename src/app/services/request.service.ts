import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Request} from '../models/request'

const REQUEST_API = '/api/request/'

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) {
  }

  sendRequest(receipt: File, certificate: File, request: Request): Observable<any> {
    console.log(request)
    console.log(receipt.size)
    console.log(certificate.size)
    let headers: { 'Content-Type': undefined }
    const formData: FormData = new FormData()
    formData.append('receipt', receipt, request.document + 'receipt.pdf')
    formData.append('certificate', certificate, request.document + 'certificate.pdf')
    formData.append('data', JSON.stringify(request))
    formData.forEach(
      value => console.log(value)
    )
    return this.http.post<any>(REQUEST_API, formData, {'headers': headers})
  }

  getAllRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(REQUEST_API)
  }
}
