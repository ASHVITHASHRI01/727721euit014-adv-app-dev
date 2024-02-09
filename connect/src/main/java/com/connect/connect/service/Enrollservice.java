package com.connect.connect.service;

import com.connect.connect.dto.Enrolldto;
import com.connect.connect.entity.Enrollentity;
import com.connect.connect.repository.Enrollrepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class Enrollservice {
    @Autowired
    private Enrollrepo repo;

    public String add(Enrollentity m) {
		repo.save(m);
		return "Added";
	}
	
	public List <Enrollentity> getDetails(){
		return repo.findAll();
	}
	public Enrollentity updateDetails(Enrollentity m) {
		return repo.saveAndFlush(m);
	}
	public void deleteDetails(int id) {
		repo.deleteById(id);
	}
}