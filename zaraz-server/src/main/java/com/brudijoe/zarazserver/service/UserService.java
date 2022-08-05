package com.brudijoe.zarazserver.service;

import org.springframework.stereotype.Service;

import com.brudijoe.zarazserver.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

}
