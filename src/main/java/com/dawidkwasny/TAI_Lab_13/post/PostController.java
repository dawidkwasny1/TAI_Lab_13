package com.dawidkwasny.TAI_Lab_13.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController {
    private PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/posts")
    public List<Post> getAllPosts() {
        return postService.getAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/posts/{id}")
    public Post get(@PathVariable int id) {
        return postService.get(id);
    }
}
