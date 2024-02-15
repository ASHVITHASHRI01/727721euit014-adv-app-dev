package com.home.home.controller;

import com.home.home.dto.Formdto;
import com.home.home.service.Formservice;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/form")
@CrossOrigin(origins="*")
public class Formcontroller {
    @Autowired
    private final Formservice formservice;

    public Formcontroller(Formservice formservice) {
        this.formservice = formservice; 
    }

    @GetMapping
    public ResponseEntity<List<Formdto>> getAllServices() {
        List<Formdto> services = formservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Formdto> getServiceByName(@PathVariable String username) {
        Formdto service = formservice.getServiceByName(username);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/postform")
    public ResponseEntity<Formdto> createService(@RequestBody Formdto service) {
        Formdto createdService = formservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{username}")
    public ResponseEntity<Formdto> updateServiceByName(@PathVariable String username, @RequestBody Formdto updatedService) {
        Formdto updatedServiceDto = formservice.updateServiceByName(username, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String username) {
        formservice.deleteServiceByName(username);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}