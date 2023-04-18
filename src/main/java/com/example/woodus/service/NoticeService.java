package com.example.woodus.service;

import com.example.woodus.model.Notice;
import com.example.woodus.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class NoticeService {

    private final NoticeRepository noticeRepository;

    @Transactional
    public Long save(Notice.RequestDto requestDto){
        return noticeRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public List<Notice> searchAll(){
        return noticeRepository.searchAll();
    }

    @Transactional
    public List<Notice> searchNoticeByid(Long id){
        return noticeRepository.searchNoticeById(id);
    }
}
