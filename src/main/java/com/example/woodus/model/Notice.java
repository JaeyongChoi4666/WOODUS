package com.example.woodus.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    @Column
    @CreationTimestamp
    private LocalDateTime regdate;

    @Builder
    public Notice(Long id, String title, String content){
        this.id=id;
        this.title=title;
        this.content=content;
    }

    @Getter
    @Setter
    public static class RequestDto{
        private String title;
        private String content;

        public Notice toEntity(){
            return Notice.builder().title(title).content(content).build();
        }
    }

    @Getter
    public static class ResponseDto{
        private Long id;
        private String title;
        private String content;

        public ResponseDto(Notice notice){
            this.id=notice.getId();
            this.title=notice.getTitle();
            this.content=notice.getContent();
        }
    }
}
