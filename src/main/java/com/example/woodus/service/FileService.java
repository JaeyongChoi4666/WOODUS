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

    public Long addImage(Image image){
        return imageRepository.addImage(image);
    }
}
