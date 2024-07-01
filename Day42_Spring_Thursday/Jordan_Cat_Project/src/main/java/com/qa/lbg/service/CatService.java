package com.qa.lbg.service;

import com.qa.lbg.domain.Cat;
import com.qa.lbg.repos.CatRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CatService {

    private CatRepo repo;

    public CatService(CatRepo repo) {
        this.repo = repo;
    }

    public ResponseEntity<Cat> createCat(Cat newCat) {
        Cat created = this.repo.save(newCat);

        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    public List<Cat> getAll() {
        return this.repo.findAll();
    }

    public ResponseEntity<?> getCat(Integer id) {
        if (!this.repo.existsById(id))
            return new ResponseEntity<>("No cat found with id: " + id, HttpStatus.NOT_FOUND);

        Cat found = this.repo.findById(id).get();
        // missing not found logic
        return ResponseEntity.ok(found);
    }

    public ResponseEntity<?> updateCat(Integer id,
                                       String name,
                                       String colour,
                                       Integer age,
                                       String nature,
                                       Integer lives) {

        Optional<Cat> found = this.repo.findById(id);

        if (found.isEmpty()) return new ResponseEntity<>("No cat found with id: " + id, HttpStatus.NOT_FOUND);

        Cat toUpdate = found.get();

        if (name != null) toUpdate.setName(name);
        if (colour != null) toUpdate.setColour(colour);
        if (age != null) toUpdate.setAge(age);
        if (nature != null) toUpdate.setNature(nature);
        if (lives != null) toUpdate.setLives(lives);

        Cat updated = this.repo.save(toUpdate);

        return ResponseEntity.ok(updated);
    }

    public ResponseEntity<?> removeCat(Integer id) {
        if (!this.repo.existsById(id))
            return new ResponseEntity<>("No cat found with id: " + id, HttpStatus.NOT_FOUND);

        Cat found = this.repo.findById(id).get();

        this.repo.deleteById(id);

        return ResponseEntity.ok(found);
    }
}