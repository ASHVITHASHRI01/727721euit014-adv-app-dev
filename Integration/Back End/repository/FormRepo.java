package com.home.home.repository;

import com.home.home.entity.Formentity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepo extends JpaRepository<Formentity, Long> {
    Formentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}
