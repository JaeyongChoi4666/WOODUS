package com.example.woodus.model;

import lombok.*;

import javax.persistence.*;

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
    private String contents;

    @Builder
    public Notice(Long id, String title, String contents){
        this.id=id;
        this.title=title;
        this.contents=contents;
    }

    @Getter
    @Setter
    public static class RequestDto{
        private String title;
        private String contents;

        public Notice toEntity(){
            return Notice.builder().title(title).contents(contents).build();
        }
    }

    @Getter
    public static class ResponseDto{
        private Long id;
        private String title;
        private String contents;

        public ResponseDto(Notice notice){
            this.id=notice.getId();
            this.title=notice.getTitle();
            this.contents=notice.getContents();
        }
    }
}
