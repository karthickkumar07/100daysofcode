package io.spartan.springboot.starter.course;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.spartan.springboot.starter.topic.Topic;

@RestController
public class CourseController {
	@Autowired
	private CourseService courseService;
	
	
	@RequestMapping("/topics/{id}/courses")
	public List<Course> getAllCourses(@PathVariable  String id) {
	
      return courseService.getAllCourses(id);
		
	}
	
	@RequestMapping("/topic/{topicid}/courses/{id}")
	public Optional<Course> getCourses(@PathVariable  String id) {
		return courseService.getCourse(id);
	}
	@RequestMapping(method=RequestMethod.POST,value="/topic/{topicId}/addcourses")
	public String addCourse( @RequestBody  Course course,@PathVariable  String topicId) {
		course.setTopic(new Topic(topicId,"",""));
		courseService.addCourse(course);
		return "Successfully added";
	}
	
	@RequestMapping(method = RequestMethod.PUT,value="/topics/{topicid}/courses/{id}")
	public String updateCourse(@RequestBody Course course,@PathVariable  String topicId, @PathVariable  String id) {
		course.setTopic(new Topic(topicId,"",""));
		courseService.updateCourse(course);
		return "successfully updated";
	}
	@RequestMapping(method = RequestMethod.DELETE,value="/topics/{topicid}/deletecourse/{id}")
	public String deleteTopic(@PathVariable  String id) {
		courseService.deleteCourse(id);
		return "successfully Deleted";
	}
}


