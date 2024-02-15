package com.home.home.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "form")


public class Formentity {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "gender",nullable = false)
    private String gender;

    @Column(name = "phonenumber",nullable = false)
    private String phone;

    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "age",nullable = false)
    private String age;

    @Column(name = "date",nullable = false)
    private String date;

    @Column(name = "housenumber",nullable = false)
    private String house;

    @Column(name = "streetname",nullable = false)
    private String street;

    @Column(name = "state",nullable = false)
    private String state;

    @Column(name = "pincode",nullable = false)
    private String pincode;

}



