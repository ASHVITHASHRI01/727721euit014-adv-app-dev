package com.home.home.mapper;

import com.home.home.dto.Academydto;
import com.home.home.entity.Academyentity;

public class Academymapper {

    public static Academydto maptoServicedto(Academyentity academyentity) {
        // Implement the mapping logic
        return new Academydto(
                academyentity.getId(),
                academyentity.getName(),
                academyentity.getEmail(),
                academyentity.getPhonenumber(),
                academyentity.getLocation(),
                academyentity.getDescription()
              
        );
    }

    public static Academyentity maptoServiceentity(Academydto academydto) {
        // Implement the mapping logic
        return new Academyentity(
                academydto.getId(),
                academydto.getName(),
                academydto.getEmail(),
                academydto.getPhonenumber(),
                academydto.getLocation(),
                academydto.getDescription()
                
        );
    }
}



