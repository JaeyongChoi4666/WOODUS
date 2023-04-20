package com.example.woodus.service;

import com.example.woodus.model.Image;
import com.example.woodus.model.Repair;
import com.example.woodus.repository.ImageRepository;
import com.example.woodus.repository.RepairRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RepairService {
    private final RepairRepository repairRepository;
    private final ImageRepository imageRepository;

    @Transactional
    public Long save(Repair.RequestDto requestDto){
        return repairRepository.save(requestDto.toEntity()).getId();
    }

    public int addImageAsBefore(Image image, Long repair_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setBeforeIdinRepair(pic_id,repair_id);

        return result;
    }

    public int addImageAsAfter(Image image, Long repair_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setAfterIdinRepair(pic_id,repair_id);

        return result;
    }

    @Transactional
    public List<Repair> searchAllRepair(){
        return repairRepository.searchAllRepair();
    }

    @Transactional
    public List<Repair> searchRepairById(Long id){
        return repairRepository.searchRepairById(id);
    }
}
