import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailedMember} from "../../model/detailed-member";
import {Member} from "../../model/member";

const API_URL = `${environment.api_url}`

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) {
  }

  getMembersByBoardId(id: any): Observable<DetailedMember[]> {
    return this.httpClient.get<DetailedMember[]>(`${API_URL}boards/${id}/members`);
  }

  addNewMembers(members: Member[]): Observable<Member[]> {
    return this.httpClient.post<Member[]>(`${API_URL}members/all`, members);
  }
}
