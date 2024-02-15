package com.home.home.mapper;

import com.home.home.dto.Coursedto;
import com.home.home.entity.Courseentity;

public class Coursemapper {

    public static Coursedto maptoServicedto(Courseentity courseentity) {
        // Implement the mapping logic
        return new Coursedto(
                courseentity.getId(),
                courseentity.getName(),
                courseentity.getDuration(),
                courseentity.getFees()
                // courseentity.getLocation(),
                // courseentity.getDescription()
              
        );
    }

    public static Courseentity maptoServiceentity(Coursedto coursedto) {
        // Implement the mapping logic
        return new Courseentity(
                coursedto.getId(),
                coursedto.getName(),
                coursedto.getDuration(),
                coursedto.getFees()
                // coursedto.getPhonenumber(),
                // coursedto.getLocation(),
                
        );
    }
}



