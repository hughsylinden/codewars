var number = function(busStops){
  let onBus = 0
  busStops.forEach(stop => onBus+=stop[0]-stop[1])
  return onBus
}