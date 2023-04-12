package com.example.woodus.repository;

import com.example.woodus.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    //SQL part
    String searchStudentByIdQuery = "select * from student where id = :#{#id}";
    String searchStudentByCourseIdQuery = "select * from student where course_id = :#{#course_id} order by id desc";

    //METHOD part
    @Query(value = searchStudentByIdQuery, nativeQuery = true)
    List<Student> searchStudentById(@Param("id") Long id);

    @Query(value = searchStudentByCourseIdQuery, nativeQuery = true)
    List<Student> searchStudentByCourseId(@Param("course_id") Long id);
}
