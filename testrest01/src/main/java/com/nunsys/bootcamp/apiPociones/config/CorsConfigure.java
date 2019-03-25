package com.nunsys.bootcamp.apiPociones.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
@EnableWebMvc
public class CorsConfigure {
    @Bean
    public WebMvcConfigurer corsConfiguration(){
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("*")
                        .allowedMethods("GET","PUT","POST","DELETE")
                        .allowCredentials(false).maxAge(3600);
            }
        };
    }

}
