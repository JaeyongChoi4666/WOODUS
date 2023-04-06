package com.example.woodus.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentRequest {

    private String name;
    private Long course_id;
    private String phone;
    private String address;

}
