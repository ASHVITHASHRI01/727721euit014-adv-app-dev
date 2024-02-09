package com.connect.connect.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Enrolldto {
    private Long id;
    private String name;
    // private String lastname;
    private String gender;
    private Long phone;
    private String email;
    private int age;
  
    private String house;
    private String street;
    private String state;
    private String pincode;
}