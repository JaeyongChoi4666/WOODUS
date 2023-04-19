package com.example.woodus.service;

import com.example.woodus.model.Contribution;
import com.example.woodus.model.Image;
import com.example.woodus.repository.ContributionRepository;
import com.example.woodus.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContributionService {
    private final ContributionRepository contributionRepository;
    private final ImageRepository imageRepository;

    @Transactional
    public Long save(Contribution.RequestDto requestDto){
        return contributionRepository.save(requestDto.toEntity()).getId();
    }

    public int addImageAsThumbnail(Image image, Long contribution_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setThumbnailIdinContribution(pic_id, contribution_id);

        return result;
    }

    public int addImageAsContents1(Image image, Long contribution_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setContents1IdinContribution(pic_id, contribution_id);

        return result;
    }
    public int addImageAsContents2(Image image, Long contribution_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setContents2IdinContribution(pic_id, contribution_id);

        return result;
    }
    public int addImageAsContents3(Image image, Long contribution_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setContents3IdinContribution(pic_id, contribution_id);

        return result;
    }
    public int addImageAsContents4(Image image, Long contribution_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setContents4IdinContribution(pic_id, contribution_id);

        return result;
    }
    public int addImageAsContents5(Image image, Long contribution_id){
        Long pic_id = imageRepository.addImage(image);
        int result = imageRepository.setContents5IdinContribution(pic_id, contribution_id);

        return result;
    }



    @Transactional
    public List<Contribution> searchAllContribution(){
        return contributionRepository.searchAllContribution();
    }

    @Transactional
    public List<Contribution> searchContributionById(Long id){
        return contributionRepository.searchContributionById(id);
    }
}
