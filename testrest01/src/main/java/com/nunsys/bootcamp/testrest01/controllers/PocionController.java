package com.nunsys.bootcamp.testrest01.controllers;

import com.nunsys.bootcamp.testrest01.models.Pocion;
import org.apache.commons.io.IOUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import sun.nio.ch.IOUtil;

import java.awt.*;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PocionController {


    @GetMapping("/pociones")
    public List<Pocion> getAllPociones(){
        List<Pocion> listaPociones = this.inicializarPociones();
        return listaPociones;
    }

    private List<Pocion> inicializarPociones() {
        List<Pocion> lista = new ArrayList<>();
        lista.add(new Pocion(1,"maná","Obtines 25pts de Maná",false));
        lista.add(new Pocion(2,"vida","Obtines 25pts de vida",false));
        lista.add(new Pocion(3,"magia","Obtines 25pts de magia",false));
        lista.add(new Pocion(4,"invisibilidad","Obtines 25pts de invisibilidad",true));
        lista.add(new Pocion(5,"fuerza","Obtines 25pts de Maná",true));
        return lista;

    }

    @GetMapping("/pociones/{id}")
    public Pocion getpocion(@PathVariable Integer id) {
        List<Pocion> pociones = new ArrayList<>();
        Pocion pocion;

        pociones = inicializarPociones();
        Optional<Pocion> matchingObject = pociones.stream().filter(pocionIterada -> pocionIterada.getId() == id).findFirst();
        pocion = matchingObject.get();

        return pocion;
    }
    @GetMapping(
            value = "/pociones/{id}/obtenerImagen",
            produces = MediaType.IMAGE_JPEG_VALUE
    )
    public @ResponseBody byte[] getImagePocion(@PathVariable Integer id) throws IOException {
        String rutaPocion = "static/img/pociones/t_0" + id.toString() + ".PNG";

        InputStream inputStream = new ClassPathResource(rutaPocion).getInputStream();
        return IOUtils.toByteArray(inputStream);
    }

}
