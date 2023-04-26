import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { main } from "@popperjs/core";
import { Observable, forkJoin, map } from "rxjs";
import { Member } from "src/app/models/Member";




@Injectable({providedIn: 'root'})
export class MemberService {
    private apiServerUrl = 'http://localhost:9090';


    constructor(private http: HttpClient){}
  
    

     getMembersList(): Observable<Member[]> {
  return this.http.get<Member[]>(`${this.apiServerUrl}/Members/all`); }
  
      
     getProjectMembersList(): Observable<Member[]> {
      return this.http.get<Member[]>(`${this.apiServerUrl}/Members//P_Projet`); }
  
      
     getMembersMarketingList(): Observable<Member[]> {
      return this.http.get<Member[]>(`${this.apiServerUrl}/Members/P_Marketing`); }
      
      
     getMembersResponsableList(): Observable<Member[]> {
      return this.http.get<Member[]>(`${this.apiServerUrl}/Members/Responsable`); }
      
      getMembersDevList(): Observable<Member[]> {
        return this.http.get<Member[]>(`${this.apiServerUrl}/Members/P_Dev`); }
        
      

      getMember(id: number): Observable<Member> {
        return this.http.get<Member>(`${this.apiServerUrl}/Members/find/${id}`);
      }
    
      createMember(member: Member): Observable<Member> {
        return this.http.post<Member>(`${this.apiServerUrl}/Members/add`, member);
      }
    
      updateMember(id: number, member: Member): Observable<Member> {
        return this.http.put<Member>(`${this.apiServerUrl}/Members/update/${id}`, member);
      }
    
      deleteMember(id: number): Observable<any> {
        return this.http.delete(`${this.apiServerUrl}/Members/delete/${id}`, { responseType: 'text' });
      }
    



    }
  
  

  
  
  