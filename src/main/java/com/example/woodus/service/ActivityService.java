package com.example.woodus.service;

import com.example.woodus.model.Activity;
import com.example.woodus.model.Contribution;
import com.example.woodus.model.Image;
import com.example.woodus.repository.ActivityRepository;
import com.example.woodus.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActivityService {
    private final ActivityRepository activityRepository;
    private final ImageRepository imageRepository;

    @Transactional
    public Long save(Activity.RequestDto requestDto){
        return activityRepository.save(requestDto.toEntity()).getId();
    }

    public int addImageAsContents1(Image image, Long activity_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setContent1IdinActivity(pic_id, activity_id);

        return result;
    }
    public int addImageAsContents2(Image image, Long activity_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setContent2IdinActivity(pic_id, activity_id);

        return result;
    }
    public int addImageAsContents3(Image image, Long activity_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setContent3IdinActivity(pic_id, activity_id);

        return result;
    }
    public int addImageAsContents4(Image image, Long activity_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setContent4IdinActivity(pic_id, activity_id);

        return result;
    }

    @Transactional
    public List<Activity> searchAllActivity(){
        return activityRepository.searchAllActivity();
    }

    @Transactional
    public List<Activity> searchActivityById(Long id){
        return activityRepository.searchActivityById(id);
    }
}
