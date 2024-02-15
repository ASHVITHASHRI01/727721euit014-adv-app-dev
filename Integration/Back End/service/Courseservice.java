package com.home.home.service;

import com.home.home.dto.Coursedto;
import com.home.home.entity.Courseentity;
import com.home.home.mapper.Coursemapper;
import com.home.home.repository.CourseRepo;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class  Courseservice {

    private final CourseRepo courseRepo;

    public Courseservice(CourseRepo courseRepo) {
        this.courseRepo = courseRepo;
    }

    public List<Coursedto> getAllServices() {
        List<Courseentity> services = courseRepo.findAll();
        return services.stream()
                .map(Coursemapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Coursedto getServiceByName(String name) {
        Courseentity courseentity = courseRepo.findByName(name);
        return Coursemapper.maptoServicedto(courseentity);
    }

    public Coursedto createService(Coursedto coursedto) {
        Courseentity serviceentity = Coursemapper.maptoServiceentity(coursedto);
        serviceentity = courseRepo.save(serviceentity);
        return Coursemapper.maptoServicedto(serviceentity);
    }

    public Coursedto updateServiceByName(String name, Coursedto updatedServicedto) {
        Courseentity existingService = courseRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setDuration(updatedServicedto.getDuration());
            existingService.setFees(updatedServicedto.getFees());
            // existingService.setLocation(updatedServicedto.getLocation());
            // existingService.setDescription(updatedServicedto.getDescription());
            

            existingService = courseRepo.save(existingService);
            return Coursemapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    @Transactional // Add @Transactional annotation
    public void deleteServiceByName(String name) {
        courseRepo.deleteByName(name);
    }
}
