package com.home.home.service;

import com.home.home.dto.Formdto;
import com.home.home.entity.Formentity;
import com.home.home.mapper.Formmapper;
import com.home.home.repository.FormRepo;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class  Formservice {

    private final FormRepo formRepo;

    public Formservice(FormRepo formRepo) {
        this.formRepo = formRepo;
    }

    public List<Formdto> getAllServices() {
        List<Formentity> services = formRepo.findAll();
        return services.stream()
                .map(Formmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Formdto getServiceByName(String name) {
        Formentity formentity = formRepo.findByName(name);
        return Formmapper.maptoServicedto(formentity);
    }

    public Formdto createService(Formdto formdto) {
        Formentity serviceentity = Formmapper.maptoServiceentity(formdto);
        serviceentity = formRepo.save(serviceentity);
        return Formmapper.maptoServicedto(serviceentity);
    }

    public Formdto updateServiceByName(String name, Formdto updatedServicedto) {
        Formentity existingService = formRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setGender(updatedServicedto.getGender());
            existingService.setPhone(updatedServicedto.getPhone());
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setAge(updatedServicedto.getAge());
            existingService.setDate(updatedServicedto.getDate());
            existingService.setHouse(updatedServicedto.getHouse());
            existingService.setStreet(updatedServicedto.getStreet());
            existingService.setState(updatedServicedto.getState());
            existingService.setPincode(updatedServicedto.getPincode());

            existingService = formRepo.save(existingService);
            return Formmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    @Transactional // Add @Transactional annotation
    public void deleteServiceByName(String name) {
        formRepo.deleteByName(name);
    }
}
