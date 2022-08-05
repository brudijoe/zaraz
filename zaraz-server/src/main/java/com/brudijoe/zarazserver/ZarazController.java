package com.brudijoe.zarazserver;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/zaraz")
@CrossOrigin
public class ZarazController {

    @GetMapping("/list")
    public String greeString() {
        return "Hallo User";
    }

}
