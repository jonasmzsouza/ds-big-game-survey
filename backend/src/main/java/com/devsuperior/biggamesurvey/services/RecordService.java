package com.devsuperior.biggamesurvey.services;

import com.devsuperior.biggamesurvey.dto.RecordDTO;
import com.devsuperior.biggamesurvey.dto.RecordInsertDTO;
import com.devsuperior.biggamesurvey.entities.Game;
import com.devsuperior.biggamesurvey.entities.Record;
import com.devsuperior.biggamesurvey.repositories.GameRepository;
import com.devsuperior.biggamesurvey.repositories.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class RecordService {

    @Autowired
    private RecordRepository recordRepository;

    @Autowired
    private GameRepository gameRepository;

    @Transactional(readOnly = true)
    public RecordDTO insert(RecordInsertDTO dto) {
        Record entity = new Record();
        entity.setName(dto.getName());
        entity.setAge(dto.getAge());
        entity.setMoment(Instant.now());

        Game game = gameRepository.getReferenceById(dto.getGameId());
        entity.setGame(game);

        entity = recordRepository.save(entity);
        return new RecordDTO(entity);
    }

    @Transactional(readOnly = true)
    public Page<RecordDTO> findByMoments(Instant minDate, Instant maxDate, PageRequest pageRequest) {
        return recordRepository.findByMoments(minDate, maxDate, pageRequest).map(RecordDTO::new);
    }
}
