package com.example.woodus.repository;

import com.example.woodus.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    //SQL part
    String searchPresentCourseQuery = "select * from course where deadline >= date_format(now(), '%Y-%m-%d')";
    String searchOverCourseQuery = "select * from course where deadline < date_format(now(), '%Y-%m-%d')";
    String searchCourseByIdQuery = "select * from course where id = :#{#id}";

    //METHOD part
    @Query(value = searchPresentCourseQuery, nativeQuery = true)
    List<Course> searchPresentCourse();

    @Query(value = searchOverCourseQuery, nativeQuery = true)
    List<Course> searchOverCourse();

    @Query(value = searchCourseByIdQuery, nativeQuery = true)
    List<Course> searchCourseById(@Param("id") Long id);


}
