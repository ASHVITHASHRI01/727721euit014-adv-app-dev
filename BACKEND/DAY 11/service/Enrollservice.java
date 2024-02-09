package com.yoga.yoga.service;

import com.yoga.yoga.dto.Enrolldto;
import com.yoga.yoga.entity.Enrollentity;
import com.yoga.yoga.repository.Enrollrepo;

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