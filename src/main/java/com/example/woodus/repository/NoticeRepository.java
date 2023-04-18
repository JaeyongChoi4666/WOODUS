package com.example.woodus.repository;

import com.example.woodus.model.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {
    //SQL part
    String searchAllQuery = "select * from notice order by id";
    String searchNoticeByIdQuery = "select * from notice where id = :#{id}";


    //METHOD part
    @Query(value = searchAllQuery, nativeQuery = true)
    List<Notice> searchAll();

    @Query(value = searchNoticeByIdQuery, nativeQuery = true)
    List<Notice> searchNoticeById(@Param("id") Long id);

}
