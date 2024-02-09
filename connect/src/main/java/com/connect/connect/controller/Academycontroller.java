// package com.connect.connect.controller;

// import com.connect.connect.dto.Academydto;
// import com.connect.connect.entity.Academyentity;
// import com.connect.connect.service.Academyservice;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// @RequestMapping("/api/v1/user")

// @RestController

// public class Academycontroller {
//     @Autowired
//     private Academyservice s;
//     @GetMapping("/getUser")
// 	public List <Academyentity>showDetails(){
// 		return s.getDetails();
// 	}
// 	@PostMapping("/postUser")
// 	public String addDetails(@RequestBody Academyentity m) {
// 		s.add(m);
// 		return "Added user ";
// 	}
// 	@PutMapping("/updateUser")
// 	public Academyentity update(@RequestBody Academyentity m) {
// 		return s.updateDetails(m);
// 	}
// 	@DeleteMapping("/deleteUser/{id}")
// 	public String deleteInfo(@PathVariable("id") int id){
// 		s.deleteDetails(id);
// 		return "Deleted";
// 	}

// }