package com.devsuperior.biggamesurvey.services;

import com.devsuperior.biggamesurvey.dto.GameDTO;
import com.devsuperior.biggamesurvey.entities.Game;
import com.devsuperior.biggamesurvey.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    @Transactional(readOnly = true)
    public List<GameDTO> findAll() {
        List<Game> list = gameRepository.findAll();
        return list.stream().map(GameDTO::new).toList();
    }
}
