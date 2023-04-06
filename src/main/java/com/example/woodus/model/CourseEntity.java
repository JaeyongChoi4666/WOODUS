package com.example.woodus.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class CourseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Long fee;

    @Column(nullable = false)
    private Long limit;

    @Column(nullable = false)
    private String deadline;

    @Column(nullable = false)
    private String startDate;

    @Column(nullable = false)
    private String endDate;

    @Column(nullable = false)
    private String startTime;

    @Column(nullable = false)
    private String endTime;

    @Column(nullable = false)
    private String summary;

    @Column(nullable = false)
    private String place;

    @Column(nullable = false)
    private String week;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String notice;
}
