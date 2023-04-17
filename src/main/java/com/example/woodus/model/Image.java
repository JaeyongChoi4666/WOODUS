package com.example.woodus.model;

import lombok.*;

import javax.persistence.*;

@Data
@Entity(name = "image")
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 512)
    private String name;

    @Column(length = 128)
    private String type;

    @Lob
    private byte[] pic_byte;

    public Image(String name, String type, byte[] pic_byte){
        this.name = name;
        this.type = type;
        this.pic_byte = pic_byte;
    }
}
