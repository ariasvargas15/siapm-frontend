import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Pensum} from '../models/pensum'

const PENSUM_API = '/api/pensum/'

@Injectable()
export class PensumService {

  constructor(private http: HttpClient) {
  }

  getActivePensum(): Observable<Pensum> {
    return this.http.get<Pensum>(PENSUM_API + 'active')
  }

  createPensum(newPensum: Pensum): Observable<any> {
    const headers = {'content-type': 'application/json'}
    return this.http.post<any>(PENSUM_API + 'add', newPensum, {'headers': headers})
  }
}
