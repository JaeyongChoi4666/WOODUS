package com.example.woodus.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@Entity(name = "activity")
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private String writer;
    private Long contents1_id;
    private Long contents2_id;
    private Long contents3_id;
    private Long contents4_id;
    private String regdate;

    @Builder
    public Activity(String title, String content, String writer, String regdate){
        this.title=title;
        this.content=content;
        this.writer=writer;
        this.regdate=regdate;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class RequestDto{
        private String title;
        private String content;
        private String writer;
        private String regdate;

        public Activity toEntity(){
            Date now = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            String str_now = formatter.format(now);

            return Activity.builder()
                    .title(title)
                    .content(content)
                    .writer(writer)
                    .regdate(str_now)
                    .build();
        }
    }

    @Getter
    public static class ResponseDto{
        private Long id;
        private String title;
        private String content;
        private String writer;
        private Long contents1_id;
        private Long contents2_id;
        private Long contents3_id;
        private Long contents4_id;
        private String regdate;

        public ResponseDto(Activity activity){
            this.id=activity.getId();
            this.title=activity.getTitle();
            this.content=activity.getContent();
            this.writer=activity.getWriter();
            this.contents1_id=activity.getContents1_id();
            this.contents2_id=activity.getContents2_id();
            this.contents3_id=activity.getContents3_id();
            this.contents4_id=activity.getContents4_id();
            this.regdate=activity.getRegdate();
        }
    }
}
