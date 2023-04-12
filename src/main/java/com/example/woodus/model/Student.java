package com.example.woodus.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity(name="student")
@NoArgsConstructor
@Getter
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long course_id;
    private String phone;
    private String address;

    @Builder
    public Student(
            Long id, String name, Long course_id,
            String phone, String address, String privacyAggr
    ){
        this.id=id;
        this.name=name;
        this.course_id=course_id;
        this.phone=phone;
        this.address=address;
    }

    @Getter
    @Setter
    public static class RequestDto{

        private String name;
        private Long course_id;
        private String phone;
        private String address;

        public Student toEntity(){
            return Student.builder()
                    .name(name)
                    .course_id(course_id)
                    .phone(phone)
                    .address(address)
                    .build();
        }
    }

    @Getter
    public static class ResponseDto{

        private Long id;
        private String name;
        private Long course_id;
        private String phone;
        private String address;

        public ResponseDto(Student student){
            this.id=student.getId();
            this.name=student.getName();
            this.course_id=student.getCourse_id();
            this.phone=student.getPhone();
            this.address=student.getAddress();
        }
    }

}
