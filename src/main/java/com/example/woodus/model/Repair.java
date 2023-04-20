package com.example.woodus.model;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@Entity(name = "repair")
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Repair {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private String writer;
    private Long before_id;
    private Long after_id;
    private String regdate;

    @Builder
    public Repair(String title, String content, String writer, String regdate){
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

        public Repair toEntity(){
            Date now = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            String str_now = formatter.format(now);

            return Repair.builder()
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
        private Long before_id;
        private Long after_id;
        private String regdate;

        public ResponseDto(Repair repair){
            this.id=getId();
            this.title=getTitle();
            this.content=getContent();
            this.writer=getWriter();
            this.before_id=getBefore_id();
            this.after_id=getAfter_id();
            this.regdate=getRegdate();
        }
    }
}
