package com.ald.blog.service.mapper;

import com.ald.blog.domain.*;
import com.ald.blog.service.dto.CourseDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Course and its DTO CourseDTO.
 */
@Mapper(componentModel = "spring", uses = {LessonMapper.class, })
public interface CourseMapper extends EntityMapper <CourseDTO, Course> {
    
    @Mapping(target = "resources", ignore = true)
    @Mapping(target = "programs", ignore = true)
    Course toEntity(CourseDTO courseDTO); 
    default Course fromId(Long id) {
        if (id == null) {
            return null;
        }
        Course course = new Course();
        course.setId(id);
        return course;
    }
}
