package com.home.home.controller;

import com.home.home.dto.Academydto;
import com.home.home.service.Academyservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/academy")
@CrossOrigin(origins="*")
public class Academycontroller {

    private final Academyservice academyservice;

    public Academycontroller(Academyservice academyservice) {
        this.academyservice = academyservice; 
    }

    @GetMapping
    public ResponseEntity<List<Academydto>> getAllServices() {
        List<Academydto> services = academyservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Academydto> getServiceByName(@PathVariable String username) {
        Academydto service = academyservice.getServiceByName(username);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Academydto> createService(@RequestBody Academydto service) {
        Academydto createdService = academyservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{username}")
    public ResponseEntity<Academydto> updateServiceByName(@PathVariable String username, @RequestBody Academydto updatedService) {
        Academydto updatedServiceDto = academyservice.updateServiceByName(username, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String username) {
        academyservice.deleteServiceByName(username);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}