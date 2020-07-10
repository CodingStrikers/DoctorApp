import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:any="http://localhost:4539/";

  constructor(private http:HttpClient) { }

  public DoctordataService(docdata:any):Observable<any>{
    return this.http.post(this.url+"doc",docdata);
  }
  public ProfileService(profdata:any):Observable<any>{
    return this.http.post(this.url+"prof",profdata);
  }  
  public SpcialityService(specialdata:any):Observable<any>{
    return this.http.post(this.url+"specdata",specialdata); 
  }
  public SignupDetService(signupdata:any):Observable<any>{
    return this.http.post(this.url+"datasign",signupdata);
  }
  public LoginDetPatService(logindatapat:any):Observable<any>{
    return this.http.post(this.url+"dataloginp",logindatapat);
  }
  public LoginDetDocService(logindatadoc:any):Observable<any>{
    return this.http.post(this.url+"datalogind",logindatadoc);
  }
  public LocalCheckService(locals:any):Observable<any>{
    return this.http.post(this.url+"lcheck",locals);
  }
  public AppointService(appoi:any):Observable<any>{
    return this.http.post(this.url+"appodata",appoi);
  }
  public ProfileServiceDLogin(det:any):Observable<any>{
    return this.http.post(this.url+"docdetail",det);
  }
  public DocchangeSevice(doccha:any):Observable<any>{
    return this.http.post(this.url+"chandoc",doccha);
  }
  public DocloginpatdetService(patinfo:any):Observable<any>{
    return this.http.post(this.url+"doclogpat",patinfo);
  }
  public AcceptapService(acceptd:any):Observable<any>{
    return this.http.post(this.url+"accept",acceptd);
  }
  public RejectapService(rejectd:any):Observable<any>{
    return this.http.post(this.url+"reject",rejectd);
  }
  public DelAppDataService(deldata:any):Observable<any>{
    return this.http.post(this.url+"delapp",deldata);
  }
}