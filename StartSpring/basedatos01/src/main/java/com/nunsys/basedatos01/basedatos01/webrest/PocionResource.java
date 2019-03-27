package com.nunsys.basedatos01.basedatos01.webrest;

import com.nunsys.basedatos01.basedatos01.domain.Pocion;
import com.nunsys.basedatos01.basedatos01.service.mapper.IPocionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PocionResource {

    private IPocionService pocionService;

    public PocionResource(IPocionService pocionService) {
        this.pocionService = pocionService;
    }

    @GetMapping("/pociones")
    public List<Pocion> getAllPociones(){
        List<Pocion> pociones = this.pocionService.findall();
        return pociones;
    }

    @PostMapping("/pociones")
    public Pocion createPocion(@RequestBody Pocion pocion){
        return  this.pocionService.save(pocion);
    }

    @PutMapping ("/pociones")
    public Pocion updatePocion (@RequestBody Pocion pocion) {
        return this.pocionService.save(pocion);
    }

    @DeleteMapping ("/pociones/{id}")
    public void deletePocion (@PathVariable Long id){
        this.pocionService.delete(id);
    }

    @GetMapping ("/pociones/{id}")
    public Pocion getPocion (@PathVariable Long id) {
        return this.pocionService.findById(id);
    }

    @GetMapping ("/pociones/epic")
    public List<Pocion> findEpic(){
        return this.pocionService.findEpic(true);
    }
}
