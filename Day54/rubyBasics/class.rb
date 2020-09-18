

class Couples
  def fixCouple(male,female)
    @mapla = male
    @ponnu = female
  end

  def marriage()
    puts "#@mapla weds #@ponnu"
  end
end

couple1=Couples.new()
couple1.fixCouple("hero","heroine")
couple1.marriage()
