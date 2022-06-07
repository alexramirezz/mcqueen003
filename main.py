Izq = 0
Der = 0

def on_forever():
    global Izq, Der
    Izq = maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)
    Der = maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    if not (Der):
        maqueen.motor_run(100, maqueen.Dir.CW, 30)
    if not (Izq):
        maqueen.motor_run(100, maqueen.Dir.CW, 30)
basic.forever(on_forever)
