package com.nunsys.basedatos01.basedatos01.service.mapper;

import com.nunsys.basedatos01.basedatos01.domain.Pocion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface IPocionService {

    public List<Pocion> findall();

    public Pocion save(Pocion pocion);

    public void delete(long id);

    public Pocion findById(Long id);

    public  List<Pocion> findEpic(Boolean epica);



}
