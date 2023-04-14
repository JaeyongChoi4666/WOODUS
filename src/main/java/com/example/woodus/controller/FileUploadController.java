package com.example.woodus.controller;

import com.example.woodus.model.Course;
import com.example.woodus.model.Image;
import com.example.woodus.service.CourseService;
import com.example.woodus.service.FileService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/images")
public class FileUploadController {

    private final FileService fileService;
    private final CourseService courseService;

    @PostMapping("/register")
    public ResponseEntity<List<Course>> uploadImage(
            @RequestParam("imageFile_thumbnail")MultipartFile thumbnail_file,
            @RequestParam("imageFile_poster")MultipartFile poster_file,
            @RequestParam("course_id")Long course_id
    ) throws IOException {
        Image thumbnail = new Image(thumbnail_file.getOriginalFilename(),thumbnail_file.getContentType(),compressBytes(thumbnail_file.getBytes()));
        Image poster = new Image(poster_file.getOriginalFilename(),poster_file.getContentType(),compressBytes(poster_file.getBytes()));

        int res_thumbnail_id   = fileService.addImageAsThumbnail(thumbnail, course_id);
        int res_poster_id      = fileService.addImageAsPoster(poster, course_id);

        if (res_thumbnail_id == res_poster_id){
            return ResponseEntity.ok(this.courseService.searchCourseById(course_id));
        }else{
            return ResponseEntity.badRequest().build();
        }
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

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id, HttpServletRequest request){
        try{
            Image image = fileService.getImageById(id);
            image.setPic_byte(decompressBytes(image.getPic_byte()));
            byte[] response_pic = image.getPic_byte();
            if(response_pic.length > 0){
                HttpHeaders header = new HttpHeaders();
                header.set("Content-Type",image.getType());
                return new ResponseEntity<byte[]>(response_pic, header, HttpStatus.OK);
            }
        }catch (Exception e){
        }
        return null;
    }

    public static byte[] decompressBytes(byte[] data){
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try{
            while(!inflater.finished()){
                int count = inflater.inflate(buffer);
                outputStream.write(buffer,0,count);
            }
            outputStream.close();
        }catch (IOException | DataFormatException ignored){}

        return outputStream.toByteArray();
    }
}
