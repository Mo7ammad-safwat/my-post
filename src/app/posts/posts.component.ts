import { Component, OnInit } from '@angular/core';
import { PostService } from '../shere/post.service';
import { DataPost } from '../shere/datapost.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  posts: DataPost[] = [
    {
      id: 1,
      title: 'Post 1',
      body: 'This is post 1',
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'This is post 2',
    },
  ];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    //   this.postService.getPosts().subscribe((data) => {
    //     this.posts = data;
    //   });
  }
}
