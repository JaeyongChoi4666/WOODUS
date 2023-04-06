package com.example.woodus.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseResponse {

    private Long id;
    private String name;
    private Long fee;
    private Long limit;
    private String deadline;
    private String startDate;
    private String endDate;
    private String startTime;
    private String endTime;
    private String summary;
    private String place;
    private String week;
    private String type;
    private String notice;
}
