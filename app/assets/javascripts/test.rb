cents = 492
change = []

if cents > 0
  if cents >= 25
    counter = (cents / 25).floor
    counter.times {change << 25}
    cents = cents - (25 * counter)
  end
  if cents >= 10
    counter = (cents / 10).floor
    counter.times {change << 10}
    cents = cents - (10 * counter)
  end
  if cents >= 5
    counter = (cents / 5).floor
    counter.times {change << 5}
    cents = cents - (5 * counter)
  end
  if cents >= 1
    counter = (cents / 1).floor
    counter.times {change << 1}
  end
end

p change