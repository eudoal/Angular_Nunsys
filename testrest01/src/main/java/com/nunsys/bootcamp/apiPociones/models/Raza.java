package com.nunsys.bootcamp.apiPociones.models;

public class Raza {
    private int id;
    private String nombre;
    private String foto;
    private String descripcion;
    private String detail;
    private int bando;


    public Raza() {
    }

    public Raza(int id, String nombre,String foto, String descripcion, String detail, int bando) {
        this.id = id;
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.detail = detail;
        this.bando = bando;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
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

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public int getBando() {
        return bando;
    }

    public void setBando(int bando) {
        this.bando = bando;
    }
}

