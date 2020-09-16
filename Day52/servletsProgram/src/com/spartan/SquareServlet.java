package com.spartan;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



public class SquareServlet extends HttpServlet{

	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException
	{
		int z=0;
        // req redirect
		z=Integer.parseInt(req.getParameter("z"));
		
		
		// http sesssion
		HttpSession session=req.getSession();
		z=(int)session.getAttribute("z");
		
	    // cookies
		Cookie cookies[]=req.getCookies();
		for(Cookie c:cookies)
		{
			if(c.getName().equals("z"))
				z=Integer.parseInt(c.getValue());
			
		}
		
		
		// dispatcher method
		z=(int) req.getAttribute("z");
		res.getWriter().println("result :"+z);
		
		z=z*z;
		PrintWriter out=res.getWriter();
		out.println("square root is"+ z);
		
	}
	
}
