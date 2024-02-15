package com.home.home.mapper;

import com.home.home.dto.Enrolldto;
import com.home.home.entity.Enrollentity;

public class Enrollmapper {

    public static Enrolldto maptoServicedto(Enrollentity bookingentity) {
        // Implement the mapping logic
        return new Enrolldto(
                bookingentity.getId(),
                bookingentity.getUsername(),
                bookingentity.getEmail(),
                bookingentity.getPhonenumber(),
                bookingentity.getDate(),
                bookingentity.getServicetype()
              
        );
    }

    public static Enrollentity maptoServiceentity(Enrolldto bookingdto) {
        // Implement the mapping logic
        return new Enrollentity(
                bookingdto.getId(),
                bookingdto.getUsername(),
                bookingdto.getEmail(),
                bookingdto.getPhonenumber(),
                bookingdto.getDate(),
                bookingdto.getServicetype ()
                
        );
    }
}



