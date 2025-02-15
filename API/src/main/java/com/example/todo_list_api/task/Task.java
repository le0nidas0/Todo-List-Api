package com.example.todo_list_api.task;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NotFound;

import java.time.LocalDateTime;

@Table(name = "task")
@Entity(name = "task")
@EqualsAndHashCode(of = "id")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    // Construtores
    public Task() {
    }

    public Task(Long id, String title, String description, TaskStatus status, LocalDateTime createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
