package com.example.woodus.model;

import lombok.*;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

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
    private Long thumbnail_id;
    private Long contents1_id;
    private Long contents2_id;
    private Long contents3_id;
    private Long contents4_id;
    private Long contents5_id;
    private String regdate;

    @Builder
    public Contribution(String title, String subtitle, String regdate){
        this.title=title;
        this.subtitle=subtitle;
        this.regdate=regdate;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class RequestDto{
        private String title;
        private String subtitle;
        private String regdate;

        public Contribution toEntity() {
            Date now = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            String str_now = formatter.format(now);

            return Contribution.builder()
                    .title(title)
                    .subtitle(subtitle)
                    .regdate(str_now)
                    .build();
        }
    }

    @Getter
    public static class ResponseDto{
        private Long id;
        private String title;
        private String subtitle;
        private Long thumbnail_id;
        private Long contents1_id;
        private Long contents2_id;
        private Long contents3_id;
        private Long contents4_id;
        private Long contents5_id;
        private String regdate;

        public ResponseDto(Contribution contribution){
            this.id=contribution.getId();
            this.title=contribution.getTitle();
            this.subtitle=contribution.getSubtitle();
            this.thumbnail_id=contribution.getThumbnail_id();
            this.contents1_id=contribution.getContents1_id();
            this.contents2_id=contribution.getContents2_id();
            this.contents3_id=contribution.getContents3_id();
            this.contents4_id=contribution.getContents4_id();
            this.contents5_id=contribution.getContents5_id();
            this.regdate=contribution.getRegdate();
        }
    }

}
