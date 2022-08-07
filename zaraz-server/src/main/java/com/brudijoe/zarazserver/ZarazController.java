package com.brudijoe.zarazserver;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brudijoe.zarazserver.model.User;
import com.brudijoe.zarazserver.service.UserService;

@RestController
@RequestMapping("/zaraz")
@CrossOrigin
public class ZarazController {

    private final UserService userService;

    public ZarazController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }

}
