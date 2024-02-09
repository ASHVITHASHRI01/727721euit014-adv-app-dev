package com.yoga.yoga.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yoga.yoga.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}