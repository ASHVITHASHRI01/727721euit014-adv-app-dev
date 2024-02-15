package com.home.home.mapper;

import com.home.home.dto.Formdto;
import com.home.home.entity.Formentity;

public class Formmapper {

    public static Formdto maptoServicedto(Formentity formentity) {
        // Implement the mapping logic
        return new Formdto(
                formentity.getId(),
                formentity.getName(),
                formentity.getGender(),
                formentity.getPhone(),
                formentity.getEmail(),
                formentity.getAge(),
                formentity.getDate(),
                formentity.getHouse(),
                formentity.getStreet(),
                formentity.getState(),
                formentity.getPincode()
              
        );
    }

    public static Formentity maptoServiceentity(Formdto formdto) {
        // Implement the mapping logic
        return new Formentity(
                formdto.getId(),
                formdto.getName(),
                formdto.getEmail(),
                formdto.getPhone(),
                formdto.getEmail(),
                formdto.getAge(),
                formdto.getDate(),
                formdto.getHouse(),
                formdto.getStreet(),
                formdto.getState(),
                formdto.getPincode()
                
        );
    }
}



