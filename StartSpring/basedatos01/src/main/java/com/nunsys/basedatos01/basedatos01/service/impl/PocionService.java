package com.nunsys.basedatos01.basedatos01.service.impl;

import com.nunsys.basedatos01.basedatos01.domain.Pocion;
import com.nunsys.basedatos01.basedatos01.repository.PocionRepository;
import com.nunsys.basedatos01.basedatos01.service.mapper.IPocionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PocionService implements IPocionService {

    private PocionRepository pocionRepository;

    //Constructor de la clase (
    public PocionService(PocionRepository pocionRepository) {
        this.pocionRepository = pocionRepository;
    }

    @Override
    public List<Pocion> findall() {
        return this.pocionRepository.findAll();
    }

    @Override
    public Pocion save(Pocion pocion) {
        return this.pocionRepository.save(pocion);
    }

    @Override
    public void delete(long id) {
        Pocion pocion = this.pocionRepository.findById(id).get();
        this.pocionRepository.delete(pocion);
    }

    @Override
    public Pocion findById(Long id) {
        return this.pocionRepository.findById(id).get();
    }

    @Override
    public List<Pocion> findEpic(Boolean epica) {
        return this.pocionRepository.esEpica(epica);
    }

}
