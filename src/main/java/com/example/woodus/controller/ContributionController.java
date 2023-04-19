package com.example.woodus.controller;

import com.example.woodus.model.Contribution;
import com.example.woodus.model.Image;
import com.example.woodus.service.ContributionService;
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
@RequestMapping("/contribution")
public class ContributionController {
    private final ContributionService contributionService;

    @PostMapping("")
    public ResponseEntity<List<Contribution>> createContribution(
            @RequestParam("title")String title,
            @RequestParam("subtitle")String subtitle,
            @RequestParam("imageFile_thumbnail")MultipartFile thumbnail_file,
            @RequestParam("imageFile_contents1")MultipartFile contents1_file,
            @RequestParam("imageFile_contents2")MultipartFile contents2_file,
            @RequestParam("imageFile_contents3")MultipartFile contents3_file,
            @RequestParam("imageFile_contents4")MultipartFile contents4_file,
            @RequestParam("imageFile_contents5")MultipartFile contents5_file
            )throws IOException {
        Date now = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String str_now = formatter.format(now);

        Contribution.RequestDto input = new Contribution.RequestDto(title, subtitle, str_now);
        Long contribution_id = contributionService.save(input);

        Image thumbnail = new Image(thumbnail_file.getOriginalFilename(),thumbnail_file.getContentType(),compressBytes(thumbnail_file.getBytes()));
        Image contents1 = new Image(contents1_file.getOriginalFilename(),contents1_file.getContentType(),compressBytes(contents1_file.getBytes()));
        Image contents2 = new Image(contents2_file.getOriginalFilename(),contents2_file.getContentType(),compressBytes(contents2_file.getBytes()));
        Image contents3 = new Image(contents3_file.getOriginalFilename(),contents3_file.getContentType(),compressBytes(contents3_file.getBytes()));
        Image contents4 = new Image(contents4_file.getOriginalFilename(),contents4_file.getContentType(),compressBytes(contents4_file.getBytes()));
        Image contents5 = new Image(contents5_file.getOriginalFilename(),contents5_file.getContentType(),compressBytes(contents5_file.getBytes()));

        contributionService.addImageAsThumbnail(thumbnail, contribution_id);
        if (contents1 != null){contributionService.addImageAsContents1(contents1,contribution_id);}
        if (contents2 != null){contributionService.addImageAsContents2(contents2,contribution_id);}
        if (contents3 != null){contributionService.addImageAsContents3(contents3,contribution_id);}
        if (contents4 != null){contributionService.addImageAsContents4(contents4,contribution_id);}
        if (contents5 != null){contributionService.addImageAsContents5(contents5,contribution_id);}

        return ResponseEntity.ok(this.contributionService.searchContributionById(contribution_id));
    }

    @GetMapping("")
    public ResponseEntity<List<Contribution>> searchAllContribution(){
        return ResponseEntity.ok(this.contributionService.searchAllContribution());
    }

    @GetMapping("/{contribution_id}")
    public ResponseEntity<List<Contribution>> searchContributionById(@PathVariable(name="contribution_id") Long contribution_id){
        return ResponseEntity.ok(this.contributionService.searchContributionById(contribution_id));
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
