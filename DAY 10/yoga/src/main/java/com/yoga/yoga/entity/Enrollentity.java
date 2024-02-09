package com.yoga.yoga.entity;




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
@Table(name = "register")
public class Enrollentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "Name",nullable = false)              
    private String name;

    @Column(name = "Gender",nullable = false)
    private String gender;
    
    @Column(name = "Phone number",nullable = false)
    private Long phone ;

    @Column(name = "Email ",nullable = false)
    private String email;

    @Column(name = "Age ",nullable = false)
    private int age;


    @Column(name = "House Number",nullable = false)
    private String house;

    @Column(name = "Street Name",nullable = false)
    private String street;

    @Column(name = "State",nullable = false)
    private String state;

    @Column(name = "Pincode",nullable = false)
    private String pincode;

}