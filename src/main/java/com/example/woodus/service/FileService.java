package com.example.woodus.service;

import com.example.woodus.model.Image;
import com.example.woodus.repository.ImageRepository;
import org.springframework.stereotype.Service;

@Service
public class FileService {

    ImageRepository imageRepository;

    public FileService(ImageRepository imageRepository){
        this.imageRepository = imageRepository;
    }

    public int addImageAsThumbnail(Image image, Long course_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setThumbnailId(pic_id,course_id);

        return result;
    }

    public int addImageAsPoster(Image image, Long course_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setPosterId(pic_id,course_id);

        return result;
    }

    public Image getImageById(Long id){
        return imageRepository.findById(id).orElseThrow();
    }
}
