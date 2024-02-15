package com.home.home.repository;

// import com.home.home.entity.Bookingentity;
import com.home.home.entity.Enrollentity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollRepo extends JpaRepository<Enrollentity, Long> {
    Enrollentity findByUsername(String username);
    void deleteByUsername(String username);
    // Other methods...
}
