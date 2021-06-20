import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

const FILES_API = '/api/files/'

@Injectable()
export class FilesService {

  constructor(private http: HttpClient) {
  }

  getRequestFile(fileName: string): Observable<any> {
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: {'content-type': 'application/json'}
    }
    return this.http.get(FILES_API + fileName, httpOptions)
  }
}
