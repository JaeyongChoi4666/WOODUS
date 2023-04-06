package com.example.woodus.controller;

import com.example.woodus.model.CourseRequest;
import com.example.woodus.model.CourseResponse;
import com.example.woodus.model.StudentRequest;
import com.example.woodus.model.StudentResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {

    //1.교육과정(신규)을 등록
    @PostMapping("/course")
    public ResponseEntity<CourseResponse> CourseCreate(@RequestBody CourseRequest request){

        return null;
    }

    //2. 교육과정(모집중)을 조회
    @GetMapping("/course/present")
    public ResponseEntity<List<CourseResponse>> CourseReadPresent(Long id){

        return null;
    }

    //3. 교육과정(종료)을 조회
    @GetMapping("/course/over")
    public ResponseEntity<List<CourseResponse>> CourseReadOver(Long id){

        return null;
    }

    //4. 교육과정 세부내용 조회
    @GetMapping("/course/{course_id}")
    public ResponseEntity<CourseResponse> CourseInfo(@PathVariable(name="course_id") Long course_id ){

        return null;
    }

    //5.교육희망자 신규 신청
    @PostMapping("/student")
    public ResponseEntity<StudentResponse> StudentCreate(@RequestBody StudentRequest request){

        return null;
    }

    //6.교육과정별 신청자 세부정보 조회
    @GetMapping("/student/{course_id}")
    public ResponseEntity<List<StudentResponse>> StudentInfo(@RequestBody StudentRequest request){

        return null;
    }

}
