package tech.getarrays.clubsmanager.service;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tech.getarrays.clubsmanager.model.Actors.User;
import tech.getarrays.clubsmanager.repo.UserRepository;

import java.util.Optional;

@Service
@Transactional
public class UserService {
    @Autowired
    UserRepository repository;



    public void update(Long id,User User){
        Optional<User> userr = repository.findById(id);
        if(userr.isPresent()){
            User user = userr.get();
            user.setEmail(User.getEmail());
            user.setRole(User.getRole());
            user.setFbUrl(User.getFbUrl());
            user.setName(User.getName());
            repository.save(user);

        }

    }

    public Optional<User> login(String email){
        System.out.println(email);
        return repository.findByEmail(email);
    }

    public void delete(Long id){
        Optional<User> user=repository.findById(id);
        user.ifPresent(u -> repository.delete(u));
    }

    public Optional<User> findUserByEmail (String email){

        return repository.findByEmail(email);
    }




}
