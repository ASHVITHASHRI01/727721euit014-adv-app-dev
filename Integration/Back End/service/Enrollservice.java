package com.home.home.service;

import com.home.home.dto.Enrolldto;
import com.home.home.entity.Enrollentity;
import com.home.home.mapper.Enrollmapper;
import com.home.home.repository.EnrollRepo;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class  Enrollservice {

    private final EnrollRepo enrollRepo;

    public Enrollservice(EnrollRepo enrollRepo) {
        this.enrollRepo = enrollRepo;
    }

    public List<Enrolldto> getAllServices() {
        List<Enrollentity> services = enrollRepo.findAll();
        return services.stream()
                .map(Enrollmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Enrolldto getServiceByName(String username) {
        Enrollentity enrollentity = enrollRepo.findByUsername(username);
        return Enrollmapper.maptoServicedto(enrollentity);
    }

    public Enrolldto createService(Enrolldto enrolldto) {
        Enrollentity serviceentity = Enrollmapper.maptoServiceentity(enrolldto);
        serviceentity = enrollRepo.save(serviceentity);
        return Enrollmapper.maptoServicedto(serviceentity);
    }

    public Enrolldto updateServiceByName(String username, Enrolldto updatedServicedto) {
        Enrollentity existingService = enrollRepo.findByUsername(username);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setPhonenumber(updatedServicedto.getPhonenumber());
            existingService.setDate(updatedServicedto.getDate());
            existingService.setServicetype(updatedServicedto.getServicetype());
            

            existingService = enrollRepo.save(existingService);
            return Enrollmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    @Transactional // Add @Transactional annotation
    public void deleteServiceByName(String username) {
        enrollRepo.deleteByUsername(username);
    }
}
