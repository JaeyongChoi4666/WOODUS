package com.example.woodus.controller;

import com.example.woodus.model.Image;
import com.example.woodus.model.Repair;
import com.example.woodus.service.RepairService;
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
@RequestMapping("/api/repair")
public class RepairController {
    private RepairService repairService;


    @PostMapping("")
    public ResponseEntity<List<Repair>> createRepair(
            @RequestParam("title")String title,
            @RequestParam("content")String content,
            @RequestParam("writer")String writer,
            @RequestParam("imageFile_before")MultipartFile before_file,
            @RequestParam("imageFile_after")MultipartFile after_file
            )throws IOException {
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String str_now = formatter.format(now);

        Repair.RequestDto input = new Repair.RequestDto(title,content,writer, str_now);
        Long repair_id = repairService.save(input);

        Image before = new Image(before_file.getOriginalFilename(),before_file.getContentType(),compressBytes(before_file.getBytes()));
        Image after = new Image(after_file.getOriginalFilename(),after_file.getContentType(),compressBytes(after_file.getBytes()));

        repairService.addImageAsBefore(before,repair_id);
        repairService.addImageAsAfter(after, repair_id);

        return ResponseEntity.ok(this.repairService.searchRepairById(repair_id));
    }

    @GetMapping("")
    public ResponseEntity<List<Repair>> searchAllRepair(){
        return ResponseEntity.ok(this.repairService.searchAllRepair());
    }

    @GetMapping("/{repair_id}")
    public ResponseEntity<List<Repair>> searchRepairById(@PathVariable(name="repair_id") Long repair_id){
        return ResponseEntity.ok(this.repairService.searchRepairById(repair_id));
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
