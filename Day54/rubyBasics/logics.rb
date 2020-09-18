String username="Admin"
String password="password"

if username==="Admin"
  if password==="password"
    puts "Login success"
  else
    puts "password incorrect"
  end
else
  puts "wrong username"
end

age =  5
case age
when 0 .. 2
   puts "baby"
when 3 .. 6
   puts "little child"
when 7 .. 12
   puts "child"
when 13 .. 18
   puts "youth"
else
   puts "adult"
end

arr=[1,2,3,4,5]
for i in arr do
  puts i
end

n=5
while n>2
  puts "yeah"
  n-=1
end
