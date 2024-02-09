package com.yoga.yoga.controller;


import com.yoga.yoga.dto.Enrolldto;
import com.yoga.yoga.entity.Enrollentity;
import com.yoga.yoga.service.Enrollservice;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("/api/v1/user")
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class Enrollcontroller {
    @Autowired
    private Enrollservice s;
    @GetMapping("/getUser")
	public List <Enrollentity>showDetails(){
		return s.getDetails();
	}
	@PostMapping("/postUser")
	public String addDetails(@RequestBody Enrollentity m) {
		s.add(m);
		return "Added user ";
	}
	@PutMapping("/updateUser")
	public Enrollentity update(@RequestBody Enrollentity m) {
		return s.updateDetails(m);
	}
	@DeleteMapping("/deleteUser/{id}")
	public String deleteInfo(@PathVariable("id") int id){
		s.deleteDetails(id);
		return "Deleted";
	}

}