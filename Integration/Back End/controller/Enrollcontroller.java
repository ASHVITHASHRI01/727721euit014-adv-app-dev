package com.home.home.controller;

import com.home.home.dto.Enrolldto;
import com.home.home.service.Enrollservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins="*")
public class Enrollcontroller {

    private final Enrollservice enrollservice;

    public Enrollcontroller(Enrollservice enrollservice) {
        this.enrollservice = enrollservice; 
    }

    @GetMapping
    public ResponseEntity<List<Enrolldto>> getAllServices() {
        List<Enrolldto> services = enrollservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Enrolldto> getServiceByName(@PathVariable String username) {
        Enrolldto service = enrollservice.getServiceByName(username);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Enrolldto> createService(@RequestBody Enrolldto service) {
        Enrolldto createdService = enrollservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{username}")
    public ResponseEntity<Enrolldto> updateServiceByName(@PathVariable String username, @RequestBody Enrolldto updatedService) {
        Enrolldto updatedServiceDto = enrollservice.updateServiceByName(username, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String username) {
        enrollservice.deleteServiceByName(username);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}