package com.home.home.controller;

import com.home.home.dto.Coursedto;
import com.home.home.service.Courseservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
// @RequestMapping("/course")
@RequestMapping("/api/v1/auth/courses")
@CrossOrigin(origins="*")
public class Coursecontroller {

    private final Courseservice courseservice;

    public Coursecontroller(Courseservice courseservice) {
        this.courseservice = courseservice; 
    }

    @GetMapping
    public ResponseEntity<List<Coursedto>> getAllServices() {
        List<Coursedto> services = courseservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Coursedto> getServiceByName(@PathVariable String username) {
        Coursedto service = courseservice.getServiceByName(username);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Coursedto> createService(@RequestBody Coursedto service) {
        Coursedto createdService = courseservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{username}")
    public ResponseEntity<Coursedto> updateServiceByName(@PathVariable String username, @RequestBody Coursedto updatedService) {
        Coursedto updatedServiceDto = courseservice.updateServiceByName(username, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String username) {
        courseservice.deleteServiceByName(username);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}