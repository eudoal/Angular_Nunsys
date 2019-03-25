
package com.nunsys.bootcamp.apiPociones.controllers;

import com.nunsys.bootcamp.apiPociones.models.Pocion;
import org.apache.commons.io.IOUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PocionController {

    @GetMapping("/pociones")
    public List<Pocion> getAllPociones() {
        List<Pocion> listaP = this.inicializarPociones();
        return listaP;
    }

    @GetMapping("/pociones/{id}")
    public Pocion getPocion(@PathVariable Integer id) {
        List<Pocion> pociones = new ArrayList<>();
        Pocion pocion;
        pociones = this.inicializarPociones();
        Optional<Pocion> matchingObject = pociones.stream().filter(pocionIterada -> pocionIterada.getId() == id).findFirst();
        pocion = matchingObject.get();
        return pocion;
    }



    @GetMapping(
            value = "/pociones/{id}/obtenerImagen",
            produces = MediaType.IMAGE_JPEG_VALUE
    )
    public @ResponseBody byte[] getImagePocion(@PathVariable Integer id) throws IOException {
        String rutaPocion = "static/imgs/t_0" + id.toString() + ".PNG";
        InputStream inputStream = new ClassPathResource(rutaPocion).getInputStream();
        return IOUtils.toByteArray(inputStream);
    }
    //Metodo para inicializar la lista de pociones
    private List<Pocion> inicializarPociones() {
        List<Pocion> listaPociones = new ArrayList<>();

        listaPociones.add(new Pocion(1, "Mana", "Obtienes 25pt de mana", false));
        listaPociones.add(new Pocion(2, "Vida", "Obtienes 25pt de vida", false));
        listaPociones.add(new Pocion(3, "Energia", "Obtienes 25pt de energia", true));
        listaPociones.add(new Pocion(4, "Invisibilidad", "Obtienes 25pt de invisibilidad", false));
        listaPociones.add(new Pocion(5, "Fuerza", "Obtienes 25pt de fuerza", true));
        return listaPociones;
    }

}
