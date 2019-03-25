package com.nunsys.bootcamp.apiPociones.models;

public class Pocion {
    private int id;
    private String nombre;
    private String descripcion;
    private boolean epica;

    public Pocion() {
    }

    //Constructor pasandole todos los parametros incluido la id
    public Pocion(int id, String nombre, String descripcion, boolean epica) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.epica = epica;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public boolean isEpica() {
        return epica;
    }

    public void setEpica(boolean epica) {
        this.epica = epica;
    }
}
