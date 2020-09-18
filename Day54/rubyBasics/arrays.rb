x = ["Blue", "Red", "Green", "Yellow", "White"]
for i in x do
  puts i
end

last_value=[1,2,3]
last_value.each do |n|
  break n if last_value[n] == 0
  puts "not broken"
end
