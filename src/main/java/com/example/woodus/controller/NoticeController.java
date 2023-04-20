package com.example.woodus.controller;

import com.example.woodus.model.Notice;
import com.example.woodus.service.NoticeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/api/notice")
public class NoticeController {

    private final NoticeService noticeService;

    @PostMapping("")
    public ResponseEntity<List<Notice>> NoticeCreate(@RequestBody Notice.RequestDto requestDto){
        Long result = noticeService.save(requestDto);

        if (result != null){
            return ResponseEntity.ok(this.noticeService.searchNoticeByid(result));
        }else{
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<Notice>> NoticeReadAll(){
        return ResponseEntity.ok(this.noticeService.searchAll());
    }

    @GetMapping("/{notice_id}")
    public ResponseEntity<List<Notice>> NoticeInfo(@PathVariable(name = "notice_id") Long notice_id){
        return ResponseEntity.ok(this.noticeService.searchNoticeByid(notice_id));
    }

}
