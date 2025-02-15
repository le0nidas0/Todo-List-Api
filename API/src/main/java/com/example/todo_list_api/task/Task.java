package com.example.todo_list_api.task;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NotFound;

import java.time.LocalDateTime;

@Table (name = "task")
@Entity(name = "task")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
}

