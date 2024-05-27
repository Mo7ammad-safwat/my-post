import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  
  // private apiUrl = 'https://dummyjson.com/posts/1';

  // constructor(private http: HttpClient) {}

  // getPosts(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }
}
