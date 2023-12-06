package com.vinodhlb.dataManagementbackend.repository;

import com.vinodhlb.dataManagementbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
}
