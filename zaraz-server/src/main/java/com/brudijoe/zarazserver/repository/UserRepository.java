package com.brudijoe.zarazserver.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.brudijoe.zarazserver.model.User;

@Repository
public class UserRepository {

    private List<User> users = new ArrayList<>();

    public void addUser(User user) {
        users.add(user);
    }

    // TODO getUser, deleteUser, editUser

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return "UserRepository [users=" + users + "]";
    }

}
