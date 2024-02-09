package com.connect.connect.controller;

import com.connect.connect.dto.Enrolldto;
import com.connect.connect.entity.Enrollentity;
import com.connect.connect.service.Enrollservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequestMapping("/api/v1/user")

@RestController

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