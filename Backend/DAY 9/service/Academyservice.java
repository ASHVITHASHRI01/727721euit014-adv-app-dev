package com.home.home.service;

import com.home.home.dto.Academydto;
import com.home.home.entity.Academyentity;
import com.home.home.mapper.Academymapper;
import com.home.home.repository.AcademyRepo;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class  Academyservice {

    private final AcademyRepo academyRepo;

    public Academyservice(AcademyRepo academyRepo) {
        this.academyRepo = academyRepo;
    }

    public List<Academydto> getAllServices() {
        List<Academyentity> services = academyRepo.findAll();
        return services.stream()
                .map(Academymapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Academydto getServiceByName(String name) {
        Academyentity academyentity = academyRepo.findByName(name);
        return Academymapper.maptoServicedto(academyentity);
    }

    public Academydto createService(Academydto academydto) {
        Academyentity serviceentity = Academymapper.maptoServiceentity(academydto);
        serviceentity = academyRepo.save(serviceentity);
        return Academymapper.maptoServicedto(serviceentity);
    }

    public Academydto updateServiceByName(String name, Academydto updatedServicedto) {
        Academyentity existingService = academyRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setPhonenumber(updatedServicedto.getPhonenumber());
            existingService.setLocation(updatedServicedto.getLocation());
            existingService.setDescription(updatedServicedto.getDescription());
            

            existingService = academyRepo.save(existingService);
            return Academymapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    @Transactional // Add @Transactional annotation
    public void deleteServiceByName(String name) {
        academyRepo.deleteByName(name);
    }
}
