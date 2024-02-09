package com.yoga.yoga.repository;


import com.yoga.yoga.entity.Enrollentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Enrollrepo extends JpaRepository<Enrollentity, Integer> {
    
    // Other methods...
}