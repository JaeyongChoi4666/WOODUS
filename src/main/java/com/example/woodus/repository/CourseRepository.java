package com.example.woodus.repository;

import com.example.woodus.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    String searchOneCourseQuery = "select * from course where id = :#{#requestDto.id}";
    String searchAllCourseQuery = "select * from course";

    @Transactional
    @Modifying
    @Query(value = searchOneCourseQuery, nativeQuery = true)
    int searchOneCourse(@Param("requestDto") Course.RequestDto requestDto);

    @Query(value = searchAllCourseQuery, nativeQuery = true)
    List<Course> searchAllCourse();
}
