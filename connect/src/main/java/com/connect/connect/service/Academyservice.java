// package com.connect.connect.service;

// import com.connect.connect.dto.Academydto;
// import com.connect.connect.entity.Academyentity;
// import com.connect.connect.repository.Academyrepo;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import java.util.List;
// import java.util.stream.Collectors;

// @Service
// public class Academyservice {
//     @Autowired
//     private Academyrepo repo;

//     public String add(Academyentity m) {
// 		repo.save(m);
// 		return "Added";
// 	}
	
// 	public List <Academyentity> getDetails(){
// 		return repo.findAll();
// 	}
// 	public Academyentity updateDetails(Academyentity m) {
// 		return repo.saveAndFlush(m);
// 	}
// 	public void deleteDetails(int id) {
// 		repo.deleteById(id);
// 	}
// }