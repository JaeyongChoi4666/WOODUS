package com.example.woodus.controller;

import com.example.woodus.model.*;
import com.example.woodus.service.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/api")
public class ApiController {

    private final CourseService courseService;

    //1.교육과정(신규)을 등록
    @PostMapping("/course")
    public Long CourseCreate(@RequestBody Course.RequestDto requestDto){

        Long result = courseService.save(requestDto);
        return result;
        //id로 찾아서 response형식으로 리턴 작업
    }

    //2. 교육과정(모집중)을 조회
    @GetMapping("/course/present")
    public ResponseEntity<List<Course>> CourseReadPresent(){
        return ResponseEntity.ok(this.courseService.searchAllCourse());
    }

    //3. 교육과정(종료)을 조회
    @GetMapping("/course/over")
    public ResponseEntity<List<Course>> CourseReadOver(){
        return ResponseEntity.ok(this.courseService.searchAllCourse());
    }

    //4. 교육과정 세부내용 조회
    @GetMapping("/course/{course_id}")
    public ResponseEntity<Course> CourseInfo(@PathVariable(name="course_id") Long course_id ){

        return ResponseEntity.ok(this.courseService.searchById(course_id));
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
