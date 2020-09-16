package com.spartan;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class AddServlet extends HttpServlet{
	
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException, ServletException
	{
		int x=Integer.parseInt(req.getParameter("num1"));
		int y=Integer.parseInt(req.getParameter("num2"));
		
		int z=x+y;
	
		
		// req dispatcher
		req.setAttribute("z", z);
		RequestDispatcher rd=req.getRequestDispatcher("sq");  
		rd.forward(req,res);
		
		// res redirect
		res.sendRedirect("sq?z="+z); // url rewriting 
		
		
		//http session method
		HttpSession session=req.getSession();
		session.setAttribute("z", z);
		
		// cookie
		Cookie cookie=new Cookie("z",z+"");
		res.addCookie(cookie);
		
		// res redirect
		res.sendRedirect("sq");
		
		

	}

}
