package com.example.woodus.controller;

import com.example.woodus.model.Activity;
import com.example.woodus.model.Image;
import com.example.woodus.service.ActivityService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.zip.Deflater;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/api/activity")
public class ActivityController {
    private final ActivityService activityService;

    @PostMapping("")
    public ResponseEntity<List<Activity>> createActivity(
            @RequestParam("title")String title,
            @RequestParam("content")String content,
            @RequestParam("writer")String writer,
            @RequestParam(value = "imageFile_contents1", required = false) MultipartFile contents1_file,
            @RequestParam(value = "imageFile_contents2", required = false)MultipartFile contents2_file,
            @RequestParam(value = "imageFile_contents3", required = false)MultipartFile contents3_file,
            @RequestParam(value = "imageFile_contents4", required = false)MultipartFile contents4_file
            )throws IOException {
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String str_now = formatter.format(now);

        Activity.RequestDto input = new Activity.RequestDto(title,content,writer,str_now);
        Long activity_id = activityService.save(input);

        if(contents1_file != null){
            Image contents1 = new Image(contents1_file.getOriginalFilename(),contents1_file.getContentType(),compressBytes(contents1_file.getBytes()));
            activityService.addImageAsContents1(contents1, activity_id);
        }
        if(contents2_file != null){
            Image contents2 = new Image(contents2_file.getOriginalFilename(),contents2_file.getContentType(),compressBytes(contents2_file.getBytes()));
            activityService.addImageAsContents2(contents2, activity_id);
        }
        if(contents3_file != null){
            Image contents3 = new Image(contents3_file.getOriginalFilename(),contents3_file.getContentType(),compressBytes(contents3_file.getBytes()));
            activityService.addImageAsContents3(contents3, activity_id);
        }
        if(contents4_file != null){
            Image contents4 = new Image(contents4_file.getOriginalFilename(),contents4_file.getContentType(),compressBytes(contents4_file.getBytes()));
            activityService.addImageAsContents4(contents4, activity_id);
        }

        return ResponseEntity.ok(this.activityService.searchActivityById(activity_id));
    }

    @GetMapping("")
    public ResponseEntity<List<Activity>> searchAllActivity(){
        return ResponseEntity.ok(this.activityService.searchAllActivity());
    }

    @GetMapping("/{activity_id}")
    public ResponseEntity<List<Activity>> searchActivityById(@PathVariable(name="activity_id") Long activity_id){
        return ResponseEntity.ok(this.activityService.searchActivityById(activity_id));
    }

    public static byte[] compressBytes(byte[] data){
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer,0,count);

            try{
                outputStream.close();
            }catch (IOException e){ }
        }
        return outputStream.toByteArray();
    }
}
