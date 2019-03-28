package com.nunsys.basedatos01.basedatos01.repository;

import com.nunsys.basedatos01.basedatos01.domain.Pocion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PocionRepository extends JpaRepository<Pocion, Long> {

    List<Pocion> esEpica(boolean epica);
}
