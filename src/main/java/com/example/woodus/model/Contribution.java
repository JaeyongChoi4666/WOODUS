package com.example.woodus.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;


@Data
@Entity(name = "contribution")
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Contribution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String subtitle;
    @Column
    @CreationTimestamp
    private LocalDateTime regdate;
    private Long thumbnail_id;
    private Long contents1_id;
    private Long contents2_id;
    private Long contents3_id;
    private Long contents4_id;
    private Long contents5_id;

    @Builder
    public Contribution(Long id ,String title, String subtitle){
        this.id=id;
        this.title=title;
        this.subtitle=subtitle; 
    }

}
