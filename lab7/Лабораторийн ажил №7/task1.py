from typing import *

class Passenger:
    def __init__(self, name: str, ticket_number: int, start_station: str, end_station: str):
        self.name: str = name
        self.ticket_number: int = ticket_number
        self.start_station: str = start_station
        self.end_station: str = end_station

class Station:
    def __init__(self, name: str, passengers: set[Passenger]):
        self.name: str = name
        self.passengers: set[Passenger] = passengers

    def arrive(self, arriving_passengers: list[Passenger]):
        self.passengers = self.passengers.union(arriving_passengers)

    def depart(self, train_station_names: str):
        departing_passengers: set[Passenger] = set()
        for passenger in self.passengers:
            if passenger.end_station in train_station_names:
                departing_passengers.add(passenger)
        self.passengers -= departing_passengers
        return departing_passengers

class Train:
    def __init__(self, identifier: str, stations: list[Station], passengers: set[Passenger]):
        self.identifier: str  = identifier
        self.stations: list[Station] = stations
        self.passengers: set[Passenger] = passengers

    def embark(self, departing_passengers: List[Passenger]):
        self.passengers = self.passengers.union(departing_passengers)

    def disembark(self):
        disembarking_passengers = set()
        for passenger in self.passengers:
            if passenger.end_station == self.stations[0].name:
                disembarking_passengers.add(passenger)
        self.passengers = self.passengers - disembarking_passengers
        return disembarking_passengers

    def move(self):
        print(f"Next Station: {self.stations[0].name}")
        self.stop()

    def stop(self):
        print(f"<<{self.stations[0].name}>>")

        arriving_passengers = self.disembark()
        self.stations[0].arrive(arriving_passengers)

        departing_passengers = self.stations[0].depart(self.get_station_names())
        self.embark(departing_passengers)

        self.stations.pop(0)

        self.print_passengers()

        if len(self.stations) > 0:
            self.move()
        else:
            print("This train terminates here. Please, everyone disembark!")

    def get_station_names(self):
        station_names: list[str] = []
        for station in self.stations:
            station_names.append(station.name)
        return station_names
    
    def print_passengers(self):
        for passenger in self.passengers:
            print(passenger.name)

if __name__ == "__main__":
    p1: Passenger = Passenger("Arendt", 1, "Hauptbahnhof", "Universität")
    p2: Passenger = Passenger("Nietzsche", 2, "Feuersee", "Universität")
    p3: Passenger = Passenger("Marx", 3, "Schwabstraße", "Universität")

    s1: Station = Station("Hauptbahnhof", {p1})
    s2: Station = Station("Feuersee", {p2})
    s3: Station = Station("Schwabstraße", {p3})
    s4: Station = Station("Universität", set())

    train: Train = Train("S3 - Vaihingen", [s1, s2, s3, s4], set())
    train.move()
