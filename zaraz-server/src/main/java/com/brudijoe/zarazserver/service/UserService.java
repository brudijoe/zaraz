package com.brudijoe.zarazserver.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.brudijoe.zarazserver.model.User;
import com.brudijoe.zarazserver.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUser(String userId) {
        return userRepository.getUser(userId);
    }

    public List<User> getUsers() {
        return userRepository.getUsers();
    }

}
