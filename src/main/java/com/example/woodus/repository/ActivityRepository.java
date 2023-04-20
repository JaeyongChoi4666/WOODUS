package com.example.woodus.repository;

import com.example.woodus.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
    //SQL part
    String searchAllQuery = "select * from activity order by id";
    String searchByIdQuery = "select * from activity where id = :#{#id}";

    //METHOD part
    @Query(value = searchAllQuery, nativeQuery = true)
    List<Activity> searchAllActivity();

    @Query(value = searchByIdQuery, nativeQuery = true)
    List<Activity> searchActivityById(@Param("id")Long id);



}
