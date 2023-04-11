package com.example.woodus.service;

import com.example.woodus.model.Course;
import com.example.woodus.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CourseService {

    private final CourseRepository courseRepository;

    @Transactional
    public Long save(Course.RequestDto requestDto){
        return courseRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public List<Course.ResponseDto> findAll(){
        return courseRepository.findAll().stream().map(Course.ResponseDto::new).collect(Collectors.toList());
    }

    @Transactional
    public List<Course> searchAllCourse(){
        return courseRepository.searchAllCourse();
//        return courseRepository.searchAllCourse().stream().map(Course.ResponseDto::new).collect(Collectors.toList());
    }

    public Course searchById(Long id){
        return courseRepository.getReferenceById(id);
    }
}
