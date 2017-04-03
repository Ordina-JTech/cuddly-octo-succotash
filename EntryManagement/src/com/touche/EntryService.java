package com.touche;

import java.util.List; 
import javax.ws.rs.GET; 
import javax.ws.rs.Path; 
import javax.ws.rs.Produces; 
import javax.ws.rs.core.MediaType;

import com.touche.Entry;
import com.touche.EntryDao;  
@Path("/EntryService")

public class EntryService {
	   EntryDao entryDao = new EntryDao();  
	   @GET 
	   @Path("/entries") 
	   @Produces(MediaType.APPLICATION_XML) 
	   public List<Entry> getEntries(){ 
	      return entryDao.getAllEntries(); 
	   }  
}
