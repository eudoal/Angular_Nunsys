package com.nunsys.bootcamp.apiPociones.controllers;

import com.nunsys.bootcamp.apiPociones.models.Raza;
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
public class RazaController {


    //Metodo que devuelve la lista de pociones
    @GetMapping("/razas")
    public List<Raza> getAllRazas() {
        List<Raza> listaR = this.inicializarRazas();
        return listaR;
    }

    //Metodo que devuelve una pocion pasandole por parametro la id
    @GetMapping("/razas/{id}")
    public Raza getRaza(@PathVariable Integer id) {
        List<Raza> razas = new ArrayList<>();
        Raza raza;
        razas = this.inicializarRazas();
        Optional<Raza> matchingObject = razas.stream().filter(razaIterada -> razaIterada.getId() == id).findFirst();
        raza = matchingObject.get();
        return raza;
    }
    @GetMapping(
            value = "/razas/{bando}/{foto}",
            produces = MediaType.IMAGE_JPEG_VALUE
    )
    public @ResponseBody
    byte[] getImagen(@PathVariable String bando,
                     @PathVariable String foto) throws IOException {
        String rutaRaza = "static/imgs/razas/"+ bando +"/" + foto + ".png";
        InputStream inputStream = new ClassPathResource(rutaRaza).getInputStream();
        return IOUtils.toByteArray(inputStream);
    }
    private List<Raza> inicializarRazas() {
        List<Raza> listaR = new ArrayList<>();
        listaR.add(new Raza(1,"Drainei","draenei","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulv","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulvinar ornare lectus. Proin sagittis ante tristique venenatis porta. Curabitur dignissim, dui eu varius pellentesque, ligula arcu sagittis felis, id sodales leo urna bibendum orci. Praesent in ornare elit, imperdiet ornare erat. Etiam fermentum facilisis arcu, in eleifend orci finibus quis. Donec egestas sollicitudin rhoncus. Vestibulum massa ligula, accumsan quis eleifend sit amet, scelerisque sed lacus.",0));
        listaR.add(new Raza(2,"Elfo","elfo","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulv","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulvinar ornare lectus. Proin sagittis ante tristique venenatis porta. Curabitur dignissim, dui eu varius pellentesque, ligula arcu sagittis felis, id sodales leo urna bibendum orci. Praesent in ornare elit, imperdiet ornare erat. Etiam fermentum facilisis arcu, in eleifend orci finibus quis. Donec egestas sollicitudin rhoncus. Vestibulum massa ligula, accumsan quis eleifend sit amet, scelerisque sed lacus.",0));
        listaR.add(new Raza(3,"Enano","enano","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulv","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulvinar ornare lectus. Proin sagittis ante tristique venenatis porta. Curabitur dignissim, dui eu varius pellentesque, ligula arcu sagittis felis, id sodales leo urna bibendum orci. Praesent in ornare elit, imperdiet ornare erat. Etiam fermentum facilisis arcu, in eleifend orci finibus quis. Donec egestas sollicitudin rhoncus. Vestibulum massa ligula, accumsan quis eleifend sit amet, scelerisque sed lacus.",0));
        listaR.add(new Raza(4,"Humano","humano","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulv","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulvinar ornare lectus. Proin sagittis ante tristique venenatis porta. Curabitur dignissim, dui eu varius pellentesque, ligula arcu sagittis felis, id sodales leo urna bibendum orci. Praesent in ornare elit, imperdiet ornare erat. Etiam fermentum facilisis arcu, in eleifend orci finibus quis. Donec egestas sollicitudin rhoncus. Vestibulum massa ligula, accumsan quis eleifend sit amet, scelerisque sed lacus.",0));
        listaR.add(new Raza(5,"Elfo oscuro","elfo-oscuro","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulv","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulvinar ornare lectus. Proin sagittis ante tristique venenatis porta. Curabitur dignissim, dui eu varius pellentesque, ligula arcu sagittis felis, id sodales leo urna bibendum orci. Praesent in ornare elit, imperdiet ornare erat. Etiam fermentum facilisis arcu, in eleifend orci finibus quis. Donec egestas sollicitudin rhoncus. Vestibulum massa ligula, accumsan quis eleifend sit amet, scelerisque sed lacus.",1));
        listaR.add(new Raza(6,"Ogro","ogro","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulv","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulvinar ornare lectus. Proin sagittis ante tristique venenatis porta. Curabitur dignissim, dui eu varius pellentesque, ligula arcu sagittis felis, id sodales leo urna bibendum orci. Praesent in ornare elit, imperdiet ornare erat. Etiam fermentum facilisis arcu, in eleifend orci finibus quis. Donec egestas sollicitudin rhoncus. Vestibulum massa ligula, accumsan quis eleifend sit amet, scelerisque sed lacus.",1));
        listaR.add(new Raza(7,"Sanlayn","sanlayn","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulv","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulvinar ornare lectus. Proin sagittis ante tristique venenatis porta. Curabitur dignissim, dui eu varius pellentesque, ligula arcu sagittis felis, id sodales leo urna bibendum orci. Praesent in ornare elit, imperdiet ornare erat. Etiam fermentum facilisis arcu, in eleifend orci finibus quis. Donec egestas sollicitudin rhoncus. Vestibulum massa ligula, accumsan quis eleifend sit amet, scelerisque sed lacus.",1));
        listaR.add(new Raza(8,"Tauren","tauren","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulv","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis eros, condimentum vel libero sit amet, pulvinar ornare lectus. Proin sagittis ante tristique venenatis porta. Curabitur dignissim, dui eu varius pellentesque, ligula arcu sagittis felis, id sodales leo urna bibendum orci. Praesent in ornare elit, imperdiet ornare erat. Etiam fermentum facilisis arcu, in eleifend orci finibus quis. Donec egestas sollicitudin rhoncus. Vestibulum massa ligula, accumsan quis eleifend sit amet, scelerisque sed lacus.",1));
        return listaR;
    }

}
