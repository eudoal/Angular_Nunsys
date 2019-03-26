
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
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class PocionController {

    //Metodo que devuelve la lista de pociones
    @GetMapping("/pociones")
    public List<Pocion> getAllPociones() {
        List<Pocion> listaP = this.inicializarPociones();
        return listaP;
    }

    //Metodo que devuelve una pocion pasandole por parametro la id
    @GetMapping("/pociones/{id}")
    public Pocion getPocion(@PathVariable Integer id) {
        List<Pocion> pociones = new ArrayList<>();
        Pocion pocion;
        pociones = this.inicializarPociones();
        Optional<Pocion> matchingObject = pociones.stream().filter(pocionIterada -> pocionIterada.getId() == id).findFirst();
        pocion = matchingObject.get();
        return pocion;
    }

    //Metodo para el top 3 pociones
    @GetMapping("pociones/top3")
    public List<Pocion> getTop3Pociones(){
        List<Pocion> pociones = new ArrayList<>();
        List<Pocion> top3 = new ArrayList<>();
        pociones = this.inicializarPociones();
        top3 = pociones.stream().limit(3).collect(Collectors.toList());
        return top3;
    }

    // Metodo para solo las epicas
    @GetMapping("pociones/epic")
    public List<Pocion> getEpicPociones(){
        List<Pocion> pociones = new ArrayList<>();
        List<Pocion> epic = new ArrayList<>();

        pociones = this.inicializarPociones();
        for (int i = 0; i < pociones.size(); i++) {
            if (pociones.get(i).isEpica()){
                epic.add(pociones.get(i));
            }
        }
        return epic;
    }
    // Metodo para devuelve la imagen
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

        listaPociones.add(new Pocion(1, "Mana", "Obtienes 25pt de mana", true));
        listaPociones.add(new Pocion(2, "Vida", "Obtienes 25pt de vida", false));
        listaPociones.add(new Pocion(3, "Energia", "Obtienes 25pt de energia", true));
        listaPociones.add(new Pocion(4, "Invisibilidad", "Obtienes 25pt de invisibilidad", false));
        listaPociones.add(new Pocion(5, "Fuerza", "Obtienes 25pt de fuerza", true));
        return listaPociones;
    }

}
