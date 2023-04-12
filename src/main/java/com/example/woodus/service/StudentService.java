package com.example.woodus.service;

import com.example.woodus.model.Student;
import com.example.woodus.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Transactional
    public Long save(Student.RequestDto requestDto){
        return studentRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public List<Student> searchStudentById(Long id){
        return studentRepository.searchStudentById(id);
    }

    @Transactional
    public List<Student> searchStudentByCourseId(Long id){
        return studentRepository.searchStudentByCourseId(id);
    }
}
