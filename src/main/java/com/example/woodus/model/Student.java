package com.example.woodus.model;

import lombok.*;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@Entity(name="student")
@NoArgsConstructor
@Getter
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stu_id;
    private String stu_name;
    private Long course_id;
    private String stu_phone;
    private String stu_address;
    private String regdate;

    @Builder
    public Student(
            Long stu_id, String stu_name, Long course_id,
            String stu_phone, String stu_address, String regdate
    ){
        this.stu_id=stu_id;
        this.stu_name=stu_name;
        this.course_id=course_id;
        this.stu_phone=stu_phone;
        this.stu_address=stu_address;
        this.regdate=regdate;
    }

    @Getter
    @Setter
    public static class RequestDto{

        private String stu_name;
        private Long course_id;
        private String stu_phone;
        private String stu_address;
        private String regdate;

        public Student toEntity(){
            Date now = new Date();
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            String str_now = formatter.format(now);

            return Student.builder()
                    .stu_name(stu_name)
                    .course_id(course_id)
                    .stu_phone(stu_phone)
                    .stu_address(stu_address)
                    .regdate(str_now)
                    .build();
        }
    }

    @Getter
    public static class ResponseDto{

        private Long stu_id;
        private String stu_name;
        private Long course_id;
        private String stu_phone;
        private String stu_address;
        private String regdate;


        public ResponseDto(Student student){
            this.stu_id=student.getStu_id();
            this.stu_name=student.getStu_name();
            this.course_id=student.getCourse_id();
            this.stu_phone=student.getStu_phone();
            this.stu_address=student.getStu_address();
            this.regdate=student.getRegdate();
        }
    }

}
