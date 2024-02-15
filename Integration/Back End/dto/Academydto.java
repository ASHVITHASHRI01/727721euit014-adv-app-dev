package com.home.home.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Academydto {
    private Long id;
    private String name;
    private String email;
    private String phonenumber;
    private String location;
    private String description;

}
