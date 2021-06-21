import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Request} from '../models/request'
import {Subject} from '../models/subject'

const REQUEST_API = '/api/subject/'

@Injectable()
export class SubjectService {

  constructor(private http: HttpClient) {
  }

  saveSubject(pensumCode: string, subject: Subject, document: File): Observable<any> {
    let headers: { 'Content-Type': undefined }
    const formData: FormData = new FormData()
    formData.append('document', document, 'MICROCURRICULO-' + subject.code + '.pdf')
    formData.append('data', JSON.stringify(subject))
    return this.http.post<any>(REQUEST_API + pensumCode, formData, {'headers': headers})
  }
}
