package com.example.woodus.controller;

import com.example.woodus.model.*;
import com.example.woodus.service.CourseService;
import com.example.woodus.service.StudentService;
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
    private final StudentService studentService;

    //1.교육과정(신규)을 등록
    @PostMapping("/course")
    public ResponseEntity<List<Course>> CourseCreate(@RequestBody Course.RequestDto requestDto){
        Long result = courseService.save(requestDto);

        if (result != null){
            return ResponseEntity.ok(this.courseService.searchCourseById(result));
        }else {
            return ResponseEntity.badRequest().build();
        }
    }

    //2. 교육과정(모집중)을 조회
    @GetMapping("/course/present")
    public ResponseEntity<List<Course>> CourseReadPresent(){
        return ResponseEntity.ok(this.courseService.searchPresentCourse());
    }

    //3. 교육과정(종료)을 조회
    @GetMapping("/course/over")
    public ResponseEntity<List<Course>> CourseReadOver(){
        return ResponseEntity.ok(this.courseService.searchOverCourse());
    }

    //4. 교육과정 세부내용 조회
    @GetMapping("/course/{course_id}")
    public ResponseEntity<List<Course>> CourseInfo(@PathVariable(name="course_id") Long course_id){
        return ResponseEntity.ok(this.courseService.searchCourseById(course_id));
    }

    //5.교육희망자 신규 신청
    @PostMapping("/student")
    public ResponseEntity<List<Student>> StudentCreate(@RequestBody Student.RequestDto requestDto){
        Long result = studentService.save(requestDto);

        if (result != null){
            return ResponseEntity.ok(this.studentService.searchStudentById(result));
        }
        return ResponseEntity.badRequest().build();
    }

    //6.교육과정별 신청자 세부정보 조회
    @GetMapping("/student/{course_id}")
    public ResponseEntity<List<Student>> StudentInfo(@PathVariable(name="course_id") Long course_id){
        return ResponseEntity.ok(this.studentService.searchStudentByCourseId(course_id));
    }

}
