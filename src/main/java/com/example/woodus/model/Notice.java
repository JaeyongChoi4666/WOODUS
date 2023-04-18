package com.example.woodus.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity(name = "notice")
@NoArgsConstructor
@Getter
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(length = 512)
    private String content;
    private String writer;
    private String regdate;

    @Builder
    public Notice(Long id, String title, String content, String writer, String regdate){
        this.id=id;
        this.title=title;
        this.content=content;
        this.writer=writer;
        this.regdate=regdate;
    }

    @Getter
    @Setter
    public static class RequestDto{
        private String title;
        private String content;
        private String writer;
        private String regdate;

        public Notice toEntity(){
            Date now = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            String str_now = formatter.format(now);

            return Notice.builder()
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
        private String regdate;

        public ResponseDto(Notice notice){
            this.id=notice.getId();
            this.title=notice.getTitle();
            this.content=notice.getContent();
            this.writer=notice.getWriter();
            this.regdate=notice.getRegdate();
        }
    }
}
